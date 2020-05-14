import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button: testing base functionality and it", () => {
  const callBack = jest.fn();
  const display = "stop";
  const { getByText } = render(
    <Button callBack={callBack} display={display} />,
  );
  const button = getByText(display);
  fireEvent.click(button);

  it.only("renders the correct display text", async () => {
    expect(button.textContent).toEqual(display);
  });

  it.only("fires the provided callBack on click", async () => {
    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
