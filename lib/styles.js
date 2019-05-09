import { Platform, StyleSheet } from 'react-native'

const androidStyles = {
  body: {
    alignSelf: 'center',
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
    position: 'absolute',
    width: '100%'
  }
}

const iosStyles = {
  body: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'flex-end',
    flex: 1,
    paddingBottom: 20
  }
}

export default StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'row',
    zIndex: 999999
  },
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
