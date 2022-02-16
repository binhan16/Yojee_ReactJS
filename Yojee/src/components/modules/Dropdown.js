import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import Submenu from "./Submenu";
import "../../assets/scss/bootstrap/_dropdown.scss";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseOver = this.onMouseOver.bind(this);
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

  onMouseOver = () => {
    this.setState({ dropdownOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    return (
      <div
        className="tab__dropdown"
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        <Dropdown
          className="dropdown d-inline-block"
          isOpen={this.state.dropdownOpen}
          // toggle={this.toggle}
        >
          <DropdownToggle className="dropdown__btn">
            Our Software
          </DropdownToggle>
          <DropdownMenu className="dropdown__menu">
            <DropdownItem className="dropdown__item">
              <span>Solving Challenges</span>
              <FaChevronRight className="dropdown__icon" />
            </DropdownItem>
            <DropdownItem className="dropdown__item">
              {/* submenu Features */}
              <Submenu />
              <FaChevronRight className="dropdown__icon" />
            </DropdownItem>
            <DropdownItem className="dropdown__item">Pricing</DropdownItem>
            <DropdownItem className="dropdown__item">API</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
