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

// const DropOur = () => {
//   const [data, setData] = useState(false);
//   const [delayHandler, setDelayHandler] = useState(false);
//   const handleMouseEnter = (event) => {
//     setDelayHandler(
//       setTimeout(() => {
//         const yourData = toggle;
//         setData(yourData); // whatever your data is
//       }, 500)
//     );
//   };
// };

// const debounce = require("debounce");
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    // const finalMouseDelay = props.mouseDelay || 300;

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    // this.toggleHover = debounce(this.toggleHover.bind(this), 300);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  // toggleHover() {
  //   this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  // }

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
          className="dropdown d-inline-block"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleHover}
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
