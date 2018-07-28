import React, { Component } from "react";
import ReactDOM from "react-dom";
import { menuItems, segmentTexts } from "./componentConfig.js";
import { Menu, Icon, Segment } from "semantic-ui-react";
import map from "lodash/map";

import "./styles.css";

class AnimatedMenuWithMovingSegments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: props.menu,
      activeItem: props.menu[0].title,
      numberOfMenuItems: props.menu.length,
      menuItemNumber: 1,
      menuWidth: props.menu.length * 80,
      textsForSegment: props.textsForSegment
    };
    this.menuRef = React.createRef();
  }

  handleItemClick = (e, { name, menuitemnumber }) =>
    this.setState({
      activeItem: name,
      menuItemNumber: menuitemnumber
    });

  calculateX = () => {
    const widthMenu = this.menuRef.current
      ? this.menuRef.current.clientWidth
      : 0;
    const widthOfMenuItem = widthMenu / this.state.numberOfMenuItems;
    return (this.state.menuItemNumber - 1) * widthOfMenuItem;
  };

  render() {
    const {
      menu,
      activeItem,
      menuWidth,
      textsForSegment,
      numberOfMenuItems,
      menuItemNumber
    } = this.state;

    const x = this.calculateX();
    const styles = {
      left: `${x}px`
    };
    const backgroundColor = {
      background: this.props.backgroundColor
    };
    const componentMenuWidth = {
      width: `${menuWidth}px`
    };

    const segmentTextWidth = {
      width: `${menuWidth * numberOfMenuItems}px`,
      left: `${-menuWidth * (menuItemNumber - 1)}px`
    };

    const innerContainerWidth = {
      minWidth: `${menuWidth}px`
    };

    return (
      <React.Fragment>
        <div className="componentWrapper">
          <Segment style={componentMenuWidth} className="componentSegment">
            <div className="segmentText" style={segmentTextWidth}>
              {map(textsForSegment, text => (
                <div
                  className="segmentText__innerContainer"
                  style={innerContainerWidth}
                  key={text.id}
                >
                  <div className="segmentText__innerText">{text.text}</div>
                </div>
              ))}
            </div>
          </Segment>
          <div className="menuWrapper" ref={this.menuRef}>
            <div className="iconCircleWrapper" style={styles}>
              <div className="iconInnerCircleWrapper" style={backgroundColor}>
                <div className="iconCircle" />
              </div>
            </div>
            <Menu className="indexMenu" style={backgroundColor}>
              {map(menu, menuItem => (
                <Menu.Item
                  key={menuItem.menuItemNumber}
                  menuitemnumber={menuItem.menuItemNumber}
                  name={menuItem.title}
                  active={activeItem === `${menuItem.title}`}
                  onClick={this.handleItemClick}
                >
                  <Icon name={menuItem.icon} className="iconWrapper" />
                  <span>{menuItem.title}</span>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AnimatedMenuWithMovingSegments.defaultProps = {
  backgroundColor: "#000000",
  menu: menuItems,
  textsForSegment: segmentTexts
};

const rootElement = document.getElementById("root");
ReactDOM.render(<AnimatedMenuWithMovingSegments />, rootElement);
