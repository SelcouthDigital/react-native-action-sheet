# React Native - Action Sheet

React Native - Custom Action Sheet (with hooks).

<img src="https://github.com/SelcouthDigital/react-native-action-sheet/blob/master/examples/react-native-action-sheet.gif?raw=true" width="250">

## Notes

React Native Action Sheet cannot get dismissed programatically, so we've decided to use React Native Modal and imitate Action Sheet behaviour with it to enable dismissable option.

## Install

`yarn add @selcouth-digital/react-native-action-sheet`

## Usage

Simple example:

```javascript
import React, { Fragment, useState } from 'react'
import ActionSheet from '@selcouth-digital/react-native-action-sheet'

const Example = () => {
  const [showActionSheet, setShowActionSheet] = useState(false)
  
  const options = [
    {
      onPress: () => console.log('option 1 pressed'),
      title: 'Option 1'
    }
  ]
  
  return (
    <Fragment>
      <Button onPress={() => setShowActionSheet(true)} title="Open Action Sheet" />

      /*
       * note that the ActionSheet component has to be at the highest screen level
       * so it overlaps the other components
       */
      <ActionSheet
        onDismiss={() => setShowActionSheet(false)}
        options={options}
        visible={showActionSheet}
      />
    </Fragment>
  )
}

export default Example
```

## API

### Props

| Name           | Type    | Required?  | Default                 |
| -------------- |:-------:|:----------:|:-----------------------:|
| `options`      | Array   | -          |                         |
| `title`        | String  | -          | `'Select an option...'` |
| `visible`      | Boolean | `true`     | `false`                 |
| `CancelButton` | Node    | -          | -                       |
| `styles`*      | Object  | -          | -                       |

*see available styles below

### Methods

| Name         | Required?  | Description                |
| ------------ |:----------:|:--------------------------:|
| `onDismiss()`| `true`     | ActionSheet gets destroyed |

### Styles

| Name           | Description                             |
| -------------- |:---------------------------------------:|
| `overlayBox`   | Overlay wrapper (animated view)         |
| `overlay`      | Overlay "clickable" layer               |
| `body`         | Action Sheet wrapper (box)              |
| `titleBox`     | Title wrapper (box)                     |
| `titleText`    | Title text                              |
| `option`       | Option wrapper (box)                    |
| `optionText`   | Option text                             |
| `cancelButton` | Cancel button                           |

## TODO

* Add more Action Sheet types
* Add Gesture Handler to resize action sheet (when it's too long for half a screen)
* Unit Tests
* Add icons and subtitles to options

## PEER Dependencies

### Reanimated

We use [Ract Native Reanimated](https://github.com/kmagiera/react-native-reanimated) library for animating! Special thanks to @[kmagiera](https://github.com/kmagiera) for providing it!

___

### Created with ♥ by Selcouth.DIGITAL team
