// Test away
import React from "react"
import renderer from "react-test-renderer"
import Dashboard from "./Dashboard"
import * as rtl from "react-testing-library"

describe("<Dashboard/>", () => {
  it("defaults to `unlocked` and `open`", () => {
    const tree = renderer.create(<Dashboard />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders correctly", () => {
    const test2 = rtl.render(<Dashboard />)
    expect(test2.baseElement).toMatchSnapshot
  })
})
