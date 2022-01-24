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
          className="drop-down d-inline-block "
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle className="btn-dropdown">Our Software</DropdownToggle>
          <DropdownMenu>
            <DropdownItem className="drop-down-item">
              Solving Challenges
              
            </DropdownItem>
            <DropdownItem className="drop-down-item">
              {/* submenu Features */}
              <Submenu/>
            </DropdownItem>
            <DropdownItem className="drop-down-item">
              Pricing
              
            </DropdownItem>
            <DropdownItem className="drop-down-item">
              API
              
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
