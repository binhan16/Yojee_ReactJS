import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../../assets/scss/layout/_subnav.scss";

export default class SubNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.state = {
      subNavOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      subNavOpen: !prevState.subNavOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ subNavOpen: true });
  }

  render() {
    return (
      <div>
        <Dropdown
          className="subnav d-inline-block"
          onMouseOver={this.onMouseEnter}
          isOpen={this.state.subNavOpen}
          toggle={this.toggle}
        >
          <DropdownToggle className="subnav__btn">Our Software</DropdownToggle>
          <DropdownMenu className="subnav__menu">
            <DropdownItem className="subnav__item">
              Solving Challenges
            </DropdownItem>
            <DropdownItem className="subnav__item">Featured</DropdownItem>
            <DropdownItem className="subnav__item">Pricing</DropdownItem>
            <DropdownItem className="subnav__item">API</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
