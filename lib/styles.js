import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  overlayBox: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  overlay: {
    ...StyleSheet.absoluteFill
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'flex-end',
    flex: 1,
    paddingBottom: 20
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
  }
})
