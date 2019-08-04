import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabItem = ({
  title,
  index,
  onTabSelected,
  arrIndex,
}) => {
  const tabClass = classNames({
    'App__tabs-name-item': true,
    'tab-active': arrIndex === index,
  });

  return (
    <li
      onClick={() => onTabSelected(arrIndex)}
      className={tabClass}
    >
      {title}
    </li>
  );
};

class Tabs extends React.Component {
  static Tab = TabItem;

  render() {
    const { children, index } = this.props;

    return (
      <div className="App__tabs">
        <ul className="App__tabs-name">{children}</ul>
        <div className="App__tabs-content">
          {children.map((child, i) => (
            i === index ? child.props.children : null
          ))}
        </div>
      </div>
    );
  }
}

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  arrIndex: PropTypes.number.isRequired,
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Tabs;
