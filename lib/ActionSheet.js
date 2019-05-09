import React, { Fragment, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'

import { s, useActionSheet } from './index'

const ActionSheet = ({
  CancelButton,
  cancelText,
  message,
  onDismiss,
  options,
  styles,
  title,
  visible
}) => {
  const {
    contentLayout,
    onActionSheetDismiss,
    opacity,
    showActionSheet,
    transY
  } = useActionSheet({ duration: 300, onDismiss, visible })

  useEffect(() => {
    return () => {
      console.log('component:will:unmount')
      onActionSheetDismiss()
    }
  }, [])

  const renderOverlay = () => {
    const style = {
      overlayBox: styles && styles.overlayBox ? styles.overlayBox : s.overlayBox,
      overlay: styles && styles.overlay ? styles.overlay : s.overlay
    }
    const { overlayBox, overlay } = style
    return showActionSheet && (
      <Animated.View style={[overlayBox, opacity]}>
        <Text onPress={onActionSheetDismiss} style={overlay} />
      </Animated.View>
    )
  }

  const renderTitle = () => {
    const style = {
      titleBox: styles && styles.titleBox ? styles.titleBox : s.titleBox,
      titleText: styles && styles.titleText ? styles.titleText : s.titleText,
    }
    const { titleBox, titleText } = style
    return title && (
      <View style={titleBox}>
        <Text style={titleText}>{title}</Text>
      </View>
    )
  }

  const renderMessage = () => {
    const style = {
      messageBox: styles && styles.messageBox ? styles.messageBox : s.messageBox,
      messageText: styles && styles.messageText ? styles.messageText : s.messageText
    }
    const { messageBox, messageText } = style
    return message && (
      <View style={messageBox}>
        <Text style={messageText}>{message}</Text>
      </View>
    )
  }

  const renderOption = option => {
    const style = {
      optionStyle: styles && styles.option ? styles.option : s.option,
      optionText: styles && styles.optionText ? styles.optionText : s.optionText
    }
    const { optionStyle, optionText } = style
    return (
      <TouchableOpacity
        key={option.title}
        activeOpacity={1}
        style={optionStyle}
        onPress={option.onPress}
      >
        <Text style={optionText}>{option.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderOptions = () => options.map(option => renderOption(option))

  const renderCancelButton = () => {
    const style = styles && styles.cancelButton ? styles.cancelButton : s.bcancelButton
    return CancelButton ? (
      <CancelButton onPress={onActionSheetDismiss} />
    ) : (
      <Button
        onPress={onActionSheetDismiss}
        style={style}
        title={cancelText || 'Cancel'}
      />
    )
  }

  const renderBody = () => {
    const style = {
      body: styles && styles.body ? styles.body : s.body,
      transform: {
        transform: [{
          translateY: transY
        }]
      }
    }
    const { body, transform } = style
    return (
      <Animated.View onLayout={contentLayout} style={[
        body,
        transform
      ]}>
        {renderTitle()}
        {renderMessage()}
        {renderOptions()}
        {renderCancelButton()}
      </Animated.View>
    )
  }

  return (
    <Fragment>
      {renderOverlay()}
      {renderBody()}
    </Fragment>
  )
}

ActionSheet.propTypes = {
  CancelButton: PropTypes.node,
  cancelText: PropTypes.string,
  message: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  styles: ViewPropTypes.style,
  title: PropTypes.string
}

ActionSheet.defaultProps = {
  title: 'Select an option...'
}

export default ActionSheet
