

import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Submenu from './Submenu';
import "../../assets/scss/bootstrap/_dropdown.scss";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <div>
        <Dropdown
          className="dropdown d-inline-block "
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle className="dropdown__btn">Our Software</DropdownToggle>
          <DropdownMenu className="dropdown__menu">
            <DropdownItem className="dropdown__item">
              Solving Challenges
              
            </DropdownItem>
            <DropdownItem className="dropdown__item">
              {/* submenu Features */}
              <Submenu/>
            </DropdownItem>
            <DropdownItem className="dropdown__item">
              Pricing
              
            </DropdownItem>
            <DropdownItem className="dropdown__item">
              API
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
