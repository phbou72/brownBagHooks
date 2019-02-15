import React from "react";
import classnames from "classnames";

interface ITabProps {
  text: string;
  selectedName: string;
}

const Tab = (props: ITabProps) => {
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
  const TABS = ["List", "Add beer"];

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
