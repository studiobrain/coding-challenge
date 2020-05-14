import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SnackBarNotification from "./index";

describe("SnackBarNotification: testing base functionality and it", () => {
  const callBack = jest.fn();
  const message = "GibberishGeneratedByAPI";
  const { getByText } = render(
    <SnackBarNotification callBack={callBack} message={message} />,
  );
  const snackMessage = getByText(message);

  it.only("renders the correct message", async () => {
    expect(snackMessage.textContent).toEqual(message);
  });
});
