import { StyleSheet } from "react-native"
import C from "./Colors"
import L from "./Layout"

const S = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: C.orangeish,
    borderRadius: L.corner,
    padding: 5,
    margin: 5
  },
  textItem: {
    fontSize: 18,
    padding: 3
  },
  funText: {
    color: C.darkGray3,
    fontSize: 24,
    borderRadius: L.corner
    // width: '50%',
    // opacity: 0.5
  }
})

export default S