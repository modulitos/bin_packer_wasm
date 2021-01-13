import React from "react";
import { render, cleanup } from "@testing-library/react";
import Form from "../Form";

// afterEach(cleanup);
//
// it("should equal to 0", () => {
//   const { getByTestId } = render(
//     <Form
//       onPack={() => {
//         console.log("pack!");
//       }}
//     />,
//   );
//   expect(getByTestId("counter")).toHaveTextContent(0);
// });
// const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});
