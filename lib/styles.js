import { Platform, StyleSheet } from 'react-native'

const androidStyles = {
  body: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 30,
    position: 'absolute',
    width: '100%'
  }
}

const iosStyles = {
  body: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    paddingBottom: 20,
    position: 'absolute',
    width: '100%'
  }
}

export default StyleSheet.create({
  overlayBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  titleBox: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    width: '100%'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  option: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 15
  },
  optionText: {
    fontSize: 18
  },
  cancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  ...Platform.select({
    ios: {
      ...iosStyles
    },
    android: {
      ...androidStyles
    },
  })
})
