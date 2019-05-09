import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'

const { timing, Value } = Animated

const useActionSheet = ({ duration = 400, onDismiss, visible }) => {
  const [showActionSheet, setShowActionSheet] = useState(visible)
  const [contentHeight, setContentHeight] = useState(200)
  const screenHeight = Dimensions.get('window').height
  const transY = new Value(screenHeight - contentHeight)
  const opacity = new Value(0)
  const easing = Easing.inOut(Easing.ease)

  const animate = (el, { d, value }) => timing(el, {
    duration: d || duration,
    toValue: value,
    easing,
    useNativeDriver: true
  })

  const contentLayout = e => {
    setContentHeight(e.nativeEvent.layout.height)
  }

  const show = () => {
    animate(opacity, { d: duration / 2, value: 1 }).start()
    animate(transY, { value: 0 }).start()
  }

  const hide = () => {
    animate(transY, { value: screenHeight - contentHeight }).start()
  }

  const onActionSheetDismiss = callback => {
    hide()
    setTimeout(() => {
      setShowActionSheet(false)
      onDismiss()
    }, duration)
  }

  useEffect(() => {
    setShowActionSheet(visible)
    return () => {
      setShowActionSheet(false)
    }
  }, [visible])

  useEffect(() => {
    if (showActionSheet) show()
    return () => {
      animate(opacity, { d: duration / 2, value: 0 }).start()
      hide()
    }
  }, [showActionSheet, visible])

  return {
    contentLayout,
    onActionSheetDismiss,
    opacity,
    showActionSheet,
    transY
  }
}

export default useActionSheet
