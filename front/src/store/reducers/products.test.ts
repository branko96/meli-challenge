import { hideDialog, showDialog } from "../actions/products"
import dialogReducer from "./products"

describe("Assets Duck", () => {
  describe("Action creators", () => {
    it("showDialog", () => {
      const title = "Title example"
      const subtitle = "Subtitle example"
      const okButtonText = "ok"
      const payload = {
        title,
        subtitle,
        okButtonText
      }
      const resultado = showDialog(title, subtitle, okButtonText)
      expect(resultado).toEqual({
        type: "SHOW_DIALOG",
        payload: payload
      })
    })
    it("hideDialog", () => {
      const resultado = hideDialog()
      expect(resultado).toEqual({
        type: "HIDE_DIALOG"
      })
    })
  })
  describe("reducer", () => {
    it("SHOW_DIALOG", () => {
      const title = "Title example"
      const subtitle = "Subtitle example"
      const okButtonText = "ok"
      const payload = {
        title,
        subtitle,
        okButtonText
      }
      const initialState = {
        visible: false,
        title: "",
        subtitle: "",
        okButtonText: "base.ok"
      }
      const resultado = dialogReducer(initialState, {
        type: "SHOW_DIALOG",
        payload
      })
      expect(resultado).toEqual({ visible: true, title, subtitle, okButtonText })
    })
    it("HIDE_DIALOG", () => {
      const title = "Title example"
      const subtitle = "Subtitle example"
      const okButtonText = "ok"
      const initialState = {
        visible: true,
        title,
        subtitle,
        okButtonText
      }
      const stateAfterHide = {
        visible: false,
        title: "",
        subtitle: "",
        okButtonText: "base.ok"
      }
      const resultado = dialogReducer(initialState, {
        type: "HIDE_DIALOG"
      })
      expect(resultado).toEqual(stateAfterHide)
    })
    it("default", () => {
      const initialState = {
        visible: false,
        title: "",
        subtitle: "",
        okButtonText: "base.ok"
      }
      const resultado = dialogReducer(initialState, {
        type: "NADA_EN_MI_REDUCER"
      })
      expect(resultado).toEqual(initialState)
    })
  })
})
