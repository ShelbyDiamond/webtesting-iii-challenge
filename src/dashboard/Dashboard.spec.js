// Test away
import React from "react"
import renderer from "react-test-renderer"
import Dashboard from "./Dashboard"
import * as rtl from "react-testing-library"
import Controls from "./Controls"
import { render } from "@testing-library/react"

// describe("<Dashboard/>", () => {
//   it("defaults to `unlocked` and `open`", () => {
//     const tree = renderer.create(<Dashboard />)
//     expect(tree.toJSON()).toMatchSnapshot()
//   })

//   it("renders correctly", () => {
//     const test = rtl.render(<Controls />)
//     expect(test.baseElement).toMatchSnapshot()
//   })
// })

describe("Button Defaluts to unlocked and open", () => {
  it("Defaluts to unlocked", () => {
    const { getByText } = render(<Controls />)
    expect(getByText(/close gate/i)).toBeTruthy()
  })

  it("Defaluts to unlocked", () => {
    const { getByText } = render(<Controls />)
    expect(getByText(/lock gate/i)).toBeTruthy()
  })
})

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />)

    expect(tree.toJSON()).toMatchSnapshot()
  })
})
