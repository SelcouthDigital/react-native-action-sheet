import React, { Fragment, useState, useRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import ActionSheet from '../lib'

const Simple = () => {
  const [visible, setVisible] = useState(false)

  const options = [
    {
      title: 'Option 1',
      onPress: (e, callback) => {
        console.log(e)
        callback()
      }
    },
    {
      title: 'Option 2',
      onPress: (e, callback) => {
        console.log(e)
        callback()
      }
    }
  ]

  const CancelButton = callback => <Button onPress={callback} title="Cancel" />

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native - Action Sheet</Text>
        <Button onPress={() => setVisible(true)} title="Open ActionSheet" />
      </View>
      <ActionSheet CancelButton={CancelButton} onDismiss={() => setVisible(false)} options={options} visible={visible} />
    </Fragment>
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
