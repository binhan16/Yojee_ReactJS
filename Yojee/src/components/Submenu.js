import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./Submenu.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
    };
  }

  toggle() {
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
          className="sub-menu d-inline-block "
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen1}
          toggle={this.toggle}
        >
          <DropdownToggle className="btn-sub-menu">Features</DropdownToggle>
          <DropdownMenu className="sub-menu-body">
            <h3>VIEW ALL</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            <div className="row">
              <ul className="sub-menu-left">
                <DropdownItem className="sub-menu-item">
                  Order Management
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Delivery Route Planning
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Delivery Route Optimization
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Fleet Delivery Tracking
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Automated Customer Update
                </DropdownItem>
              </ul>

              <ul className="sub-menu-right">
                <DropdownItem className="sub-menu-item">
                  Delivery Driver App
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Electronic Proof of Delivery
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Rating & Cost Calculations
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Partner Management
                </DropdownItem>
                <DropdownItem className="sub-menu-item">
                  Reporting and Insights
                </DropdownItem>
              </ul>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
