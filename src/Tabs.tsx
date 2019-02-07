import React from "react";
import classnames from "classnames";

const TABS = ["List", "Add beer"];

const Tab = props => {
  const { text, selectedName } = props;
  const classes = classnames({
    "is-active": text === selectedName
  });

  return (
    <li className={classes}>
      <a>{text}</a>
    </li>
  );
};

const Tabs = () => {
  const items = TABS.map(value => (
    <Tab key={value} text={value} selectedName="List" />
  ));

  return (
    <div className="tabs">
      <ul>{items}</ul>
    </div>
  );
};

export default Tabs;
