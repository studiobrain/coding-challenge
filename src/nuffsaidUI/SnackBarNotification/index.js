import React from "react";

const styles = require("./styles.module.css");

const SnackBarNotification = (props) => {
  const { icon, callBack, display, message } = props;

  return (
    <div className={styles.notificationSnackbar}>
      {icon}
      {message}
      <div className={styles.notificationRemoval} onClick={callBack}>
        {display}
      </div>
    </div>
  );
};

export default SnackBarNotification;
