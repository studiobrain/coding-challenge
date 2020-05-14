import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../hooks";
import NotificationList from "../NotificationList";
import { Button, SnackBarNotification } from "../../nuffsaidUI";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { MdError } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import { MdInfo } from "react-icons/md";

const styles = require("./styles.module.css");

const Application = observer(() => {
  const {
    app: {
      services: {
        generating,
        errorsList,
        warningsList,
        informationList,
        toggleGeneration,
        removeNotification,
        removeAllNotifications,
        currentSnackbarError,
        removeSnackBar,
      },
    },
  } = useStore();

  useEffect(() => {}, [errorsList, warningsList, informationList]);

  return (
    <div className={styles.applicationContainer}>
      <div className={styles.applicationHeader}>
        <Logo />
      </div>
      <div className={styles.applicationSubHeader}>
        <div className={styles.actions}>
          <Button
            callBack={toggleGeneration}
            display={generating ? "stop" : "start"}
            type={generating ? "generating" : "start"}
          />
          <Button callBack={removeAllNotifications} display="clear all" />
        </div>
      </div>
      {!!currentSnackbarError && (
        <SnackBarNotification
          icon={<MdError />}
          message={currentSnackbarError.message}
          callBack={removeSnackBar}
          display="clear"
        />
      )}
      <div className={styles.applicationContent}>
        <div className={styles.notificationContainer}>
          <NotificationList
            list={errorsList}
            removalType="error"
            removalCallback={removeNotification}
            headerDisplay="Errors"
            icon={<MdError />}
          />
          <NotificationList
            list={warningsList}
            removalType="warning"
            removalCallback={removeNotification}
            headerDisplay="Warnings"
            icon={<MdWarning />}
          />
          <NotificationList
            list={informationList}
            removalType="information"
            removalCallback={removeNotification}
            headerDisplay="Information"
            icon={<MdInfo />}
          />
        </div>
      </div>
    </div>
  );
});

export default Application;
