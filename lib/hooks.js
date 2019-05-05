import { useEffect, useState } from 'react'
import Animated, { Easing } from 'react-native-reanimated'

const { timing, Value } = Animated

const useActionSheet = ({ duration = 400, onDismiss, visible }) => {
  const [showActionSheet, setShowActionSheet] = useState(visible)
  const transY = new Value(250)
  const opacity = new Value(0)
  const easing = Easing.inOut(Easing.ease)

  const animate = (el, { d, value }) => timing(el, {
    duration: duration,
    toValue: value,
    easing,
    useNativeDriver: true
  })

  const show = () => {
    animate(opacity, { value: 1 }).start()
    animate(transY, { value: 0 }).start()
  }

  const hide = () => {
    animate(opacity, { value: 0 }).start()
    animate(transY, { value: 250 }).start()
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
  }, [visible])

  useEffect(() => {
    if (showActionSheet) show()
    return () => {
      hide()
    }
  }, [showActionSheet])

  return {
    onActionSheetDismiss,
    opacity,
    showActionSheet,
    transY
  }
}

export default useActionSheet
