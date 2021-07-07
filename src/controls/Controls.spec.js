// Test away!
import React from "react"
import renderer from "react-test-renderer"
import Controls from "./Controls"

describe("<Controls/>", () => {
  it("defaults to `unlocked` and `open`", () => {
    const tree = renderer.create(<Controls />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
