import React, { Fragment, useRef } from 'react'
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
  customStyles,
  title,
  trigger,
  visible
}) => {
  const {
    contentLayout,
    onActionSheetDismiss,
    opacity,
    showActionSheet,
    transY
  } = useActionSheet({ duration: 300, onDismiss, visible })

  const renderOverlay = () => {
    const style = {
      overlayBox: customStyles && customStyles.overlayBox ? customStyles.overlayBox : s.overlayBox,
      overlay: customStyles && customStyles.overlay ? customStyles.overlay : s.overlay
    }
    const { overlayBox, overlay } = style
    const interpolation = {
      opacity: opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      })
    }
    return showActionSheet && (
      <Animated.View style={[overlayBox, interpolation]}>
        <Text onPress={onActionSheetDismiss} style={overlay} />
      </Animated.View>
    )
  }

  const renderTitle = () => {
    const style = {
      titleBox: customStyles && customStyles.titleBox ? customStyles.titleBox : s.titleBox,
      titleText: customStyles && customStyles.titleText ? customStyles.titleText : s.titleText,
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
      messageBox: customStyles && customStyles.messageBox ? customStyles.messageBox : s.messageBox,
      messageText: customStyles && customStyles.messageText ? customStyles.messageText : s.messageText
    }
    const { messageBox, messageText } = style
    return message && (
      <View style={messageBox}>
        <Text style={messageText}>{message}</Text>
      </View>
    )
  }

  const renderOption = ({ key, option }) => {
    const style = {
      optionStyle: customStyles && customStyles.option ? customStyles.option : s.option,
      optionText: customStyles && customStyles.optionText ? customStyles.optionText : s.optionText
    }
    const { optionStyle, optionText } = style
    return (
      <TouchableOpacity
        key={key}
        activeOpacity={1}
        style={optionStyle}
        onPress={e => option.onPress(e, onActionSheetDismiss)}
      >
        {typeof option.title === 'string' ? <Text style={optionText}>{option.title}</Text> : option.title}
      </TouchableOpacity>
    )
  }

  const renderOptions = () => options.map((option, index) => renderOption({ key: index, option }))

  const renderCancelButton = () => {
    const style = customStyles && customStyles.cancelButton ? customStyles.cancelButton : s.bcancelButton

    const CustomCancelButton = CancelButton(onActionSheetDismiss)

    return CancelButton ? (
      CustomCancelButton
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
      body: customStyles && customStyles.body ? customStyles.body : s.body,
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
  CancelButton: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  cancelText: PropTypes.string,
  customStyles: PropTypes.shape(),
  message: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired
}

ActionSheet.defaultProps = {
  title: 'Select an option...'
}

export default ActionSheet
