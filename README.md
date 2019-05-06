# React Native - Action Sheet

React Native - Custom Action Sheet (with hooks).

### Notes

  React Native Action Sheet cannot get dismissed programatically, so we've decided to use React Native Modal and imitate Action Sheet behaviour with it to enable dismissable option.

## Install

`yarn add @selcouth-digital/react-native-action-sheet`

## Usage

Simple example:

```
import React, { useState } from 'react'
import { ActionSheet } from '@selcouth-digital/react-native-action-sheet'

const Example = () => {
  const [showActionSheet, setShowActionSheet] = useState(false)
  
  const options = [
    {
      onPress: () => console.log('option 1 pressed'),
      title: 'Option 1'
    }
  ]
  
  return (
    <View>
      <Button onPress={() => setShowActionSheet(true)} title="Open Action Sheet" />
      <ActionSheet
        onDismiss={() => setShowActionSheet(false)}
        options={options}
        visible={showActionSheet}
      />
    </View>
  )
}

export default Example
```

## API

### Props:

| Name       | Type    | Required?  | Default                 |
| ---------- |:-------:|:----------:|:-----------------------:|
| `options`  | Array   | `false`    |                         |
| `title`    | String  | `false`    | `'Select an option...'` |
| `visible`  | Boolean | `true`     | `false`                 |

### Methods:

| Name         | Required?  | Description                |
| ------------ |:----------:|:--------------------------:|
| `onDismiss()`| `true`     | ActionSheet gets destroyed |

## TODO

* Add more Action Sheet types
* Add Gesture Handler to resize action sheet (when it's too long for half a screen)
* Unit Tests
* Add icons and subtitles to options

___

#### Reanimated

We use [Ract Native Reanimated](https://github.com/kmagiera/react-native-reanimated) library for animating! Special thanks to @[kmagiera](https://github.com/kmagiera) for providing it!

___

### Created with ♥ by Selcouth.DIGITAL team
