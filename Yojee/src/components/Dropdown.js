import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Submenu from './Submenu';
import "./Dropdown.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
    };
  }

  toggle1() {
    this.setState((prevState) => ({
      dropdownOpen1: !prevState.dropdownOpen1,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen1: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen1: false });
  }

  render() {
    return (
      <div>
        <Dropdown
          className="drop-down d-inline-block "
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen1}
          toggle={this.toggle1}
        >
          <DropdownToggle className="btn-fix">Our Software</DropdownToggle>
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
