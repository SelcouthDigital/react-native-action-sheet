import React from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'

import { s, useActionSheet } from './index'

const ActionSheet = ({
  cancelText,
  message,
  onDismiss,
  options,
  title,
  visible
}) => {
  const {
    actionSheetRef,
    onActionSheetDismiss,
    opacity,
    showActionSheet,
    transY
  } = useActionSheet({ duration: 300, onDismiss, visible })

  const renderTitle = () => title && (
    <View style={s.titleBox}>
      <Text style={s.titleText}>{title}</Text>
    </View>
  )

  const renderMessage = () => message && (
    <View style={s.messageBox}>
      <Text style={s.messageText}>{message}</Text>
    </View>
  )

  const renderOption = option => (
    <TouchableOpacity
      key={option.title}
      activeOpacity={1}
      style={s.option}
      onPress={option.onPress}
    >
      <Text style={s.optionText}>{option.title}</Text>
    </TouchableOpacity>
  )

  const renderOptions = () => options.map(option => renderOption(option))

  const renderCancelButton = () => (
    <Button
      onPress={onActionSheetDismiss}
      style={s.cancelButton}
      title={cancelText || 'Cancel'}
    />
  )

  return (
    <Modal
      animationType="none"
      onRequestClose={onActionSheetDismiss}
      ref={actionSheetRef}
      transparent
      visible={showActionSheet}
    >
      <View style={s.wrapper}>
        <Animated.View style={[s.overlayBox, opacity]}>
          <Text onPress={onActionSheetDismiss} style={s.overlay} />
        </Animated.View>
        <Animated.View style={[s.body, {
          transform: [{
            translateY: transY
          }]
        }]}>
          {renderTitle()}
          {renderMessage()}
          {renderOptions()}
          {renderCancelButton()}
        </Animated.View>
      </View>
    </Modal>
  )
}

ActionSheet.propTypes = {
  cancelText: PropTypes.string,
  message: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string
}

ActionSheet.defaultProps = {
  title: 'Select an option...'
}

export default ActionSheet
