import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'

const { timing, Value } = Animated

const useActionSheet = ({ duration = 400, onDismiss, visible }) => {
  const [showActionSheet, setShowActionSheet] = useState(visible)
  const [contentHeight, setContentHeight] = useState(200)

  let timer

  const screenHeight = Dimensions.get('window').height
  const pos = {
    on: screenHeight - contentHeight,
    off: screenHeight + contentHeight
  }

  const anim = {
    easing: Easing.inOut(Easing.ease),
    transY: new Value(pos.off),
    opacity: new Value(0)
  }

  const animate = (el, { d, value }) => timing(el, {
    duration: d || duration,
    toValue: value,
    easing: anim.easing,
    useNativeDriver: true
  })

  const contentLayout = e => {
    setContentHeight(e.nativeEvent.layout.height)
  }

  const show = () => {
    animate(anim.opacity, { d: duration / 3, value: 1 }).start()
    animate(anim.transY, { value: pos.on }).start()
  }

  const hide = () => {
    animate(anim.opacity, { d: duration / 3, value: 0 }).start()
    animate(anim.transY, { value: pos.off }).start()
  }

  const onActionSheetDismiss = () => {
    hide()
    timer = setTimeout(() => {
      setShowActionSheet(false)
      onDismiss()
    }, duration)
  }

  useEffect(() => {
    setShowActionSheet(visible)
    return () => {
      if (visible) {
        onActionSheetDismiss()
        clearTimeout(timer)
      }
    }
  }, [visible])

  useEffect(() => {
    if (showActionSheet) show()
    return () => {
      hide()
    }
  }, [showActionSheet, visible])

  return {
    contentLayout,
    onActionSheetDismiss,
    opacity: anim.opacity,
    showActionSheet,
    transY: anim.transY
  }
}

export default useActionSheet
