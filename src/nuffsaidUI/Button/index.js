import React from "react";

const styles = require("./styles.module.css");

const Button = (props) => {
  const { callBack, display, type } = props;

  return (
    <div className={`${styles.button} ${styles[type]}`} onClick={callBack}>
      {display}
    </div>
  );
};

export default Button;
