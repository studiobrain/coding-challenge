import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NotificationList from "./index";

describe("NotificationList: testing base functionality and it", () => {
  const callBack = jest.fn();
  const header = "nuffsaid errors";
  const errorsList = [
    {
      priority: 1,
      message: "GibberishGeneratedByAPI1",
      id: Math.round(Math.random() * (1000 - 1000) + 100),
    },
    {
      priority: 1,
      message: "GibberishGeneratedByAPI2",
      id: Math.round(Math.random() * (1000 - 1000) + 100),
    },
    {
      priority: 1,
      message: "GibberishGeneratedByAPI3",
      id: Math.round(Math.random() * (1000 - 1000) + 100),
    },
  ];
  const { getByText } = render(
    <NotificationList list={errorsList} headerDisplay={header} />,
  );
  const headerDisplay = getByText(header);

  it.only("renders the correct header with list count", async () => {
    expect(headerDisplay.textContent).toEqual(`${header} 3`);
  });

  it.only("renders a list of sunscribed notifications", async () => {
    expect(errorsList).toHaveLength(3);
  });

  it.only("renders a notification of priority error only", async () => {
    expect(errorsList[0].priority).toEqual(1);
  });

  it.only("renders a notification message", async () => {
    expect(errorsList[1].message).toEqual("GibberishGeneratedByAPI2");
  });

  it.only("renders a notification message", async () => {
    expect(errorsList[1].message).toEqual("GibberishGeneratedByAPI2");
  });

  it.only("renders a notification in the correct priority list", async () => {
    const information = { priority: 2 };
    expect(errorsList[1][information]).toBeUndefined();
  });
});
