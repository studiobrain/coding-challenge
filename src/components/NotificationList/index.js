import React from "react";
import { observer } from "mobx-react";

const styles = require("./styles.module.css");

const NotificationList = observer((props) => {
  const { list, removalType, removalCallback, headerDisplay, icon } = props;

  return (
    <div className={styles.notificationList}>
      <div className={styles.notificationHeader}>
        {headerDisplay} <span>{!!list.length ? String(list.length) : 0}</span>
      </div>
      {!!list.length ? (
        <>
          {list.map((item, i) => (
            <div
              className={`${styles.notificationCard} ${styles[removalType]}`}
              key={i}
            >
              {icon}
              {item.message}
              <div
                className={styles.notificationRemoval}
                onClick={() => removalCallback(item, removalType)}
              >
                clear
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>{`There are currently no ${removalType} messages.`}</p>
      )}
    </div>
  );
});

export default NotificationList;
