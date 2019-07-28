import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({
  title,
  index,
  onTabSelected,
  arrIndex,
}) => {
  let className = 'App__tabs-name-item';

  className += arrIndex === index ? ' tab-active' : '';

  return (
    <li
      onClick={() => onTabSelected(arrIndex)}
      className={className}
    >
      {title}
    </li>
  );
};

class Tabs extends React.Component {
  static Tab = TabItem;

  render() {
    return (
      <div className="App__tabs">
        <ul className="App__tabs-name">{this.props.children}</ul>
        <div className="App__tabs-content">
          {this.props.children.map((child, i) => (
            i === this.props.index ? child.props.children : null
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
