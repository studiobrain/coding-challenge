import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../hooks";
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
          <div
            className={`${styles.button} ${
              generating ? styles.generating : styles.start
            }`}
            onClick={toggleGeneration}
          >
            {generating ? "stop" : "start"}
          </div>
          <div className={styles.button} onClick={removeAllNotifications}>
            clear all
          </div>
        </div>
      </div>
      <div className={styles.applicationContent}>
        <div className={styles.notificationContainer}>
          <div className={styles.notificationList}>
            <div className={styles.notificationHeader}>errors</div>
            {!!errorsList.length ? (
              <>
                {errorsList.map((item, i) => (
                  <div
                    className={`${styles.notificationCard} ${styles.error}`}
                    key={i}
                  >
                    <MdError />
                    {item.message} {String(item.id)}
                    <div
                      className={styles.notificationRemoval}
                      onClick={() => removeNotification(item, "error")}
                    >
                      clear
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>there are not currently any error messages</p>
            )}
          </div>
          <div className={styles.notificationList}>
            <div className={styles.notificationHeader}>warnings</div>
            {!!warningsList.length ? (
              <>
                {warningsList.map((item, i) => (
                  <div
                    className={`${styles.notificationCard} ${styles.warning}`}
                    key={i}
                  >
                    <MdWarning />
                    {item.message}
                    <div
                      className={styles.notificationRemoval}
                      onClick={() => removeNotification(item, "warning")}
                    >
                      clear
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>there are not currently any warning messages</p>
            )}
          </div>
          <div className={styles.notificationList}>
            <div className={styles.notificationHeader}>information</div>
            {!!informationList.length ? (
              <>
                {informationList.map((item, i) => (
                  <div
                    className={`${styles.notificationCard} ${styles.info}`}
                    key={i}
                  >
                    <MdInfo />
                    {item.message}
                    <div
                      className={styles.notificationRemoval}
                      onClick={() => removeNotification(item.id, "information")}
                    >
                      clear
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>there are not currently any information messages</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Application;
