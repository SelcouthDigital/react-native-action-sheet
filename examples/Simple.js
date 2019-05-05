import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { ActionSheet } from '../lib'

const Simple = () => {
  const [visible, setVisible] = useState(false)

  const setShowActionSheet = val => {
    setVisible(val)
  }

  const options = [
    {
      title: 'Option 1',
      onPress: e => console.log(e)
    },
    {
      title: 'Option 2',
      onPress: e => console.log(e)
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>React Native - Action Sheet</Text>
      <Button onPress={() => setShowActionSheet(true)} title="Open ActionSheet" />
      <ActionSheet onDismiss={() => setShowActionSheet(false)} options={options} visible={visible} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Simple
