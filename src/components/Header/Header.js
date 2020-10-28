import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  UncontrolledAlert,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';
import Notifications from '../Notifications';
import { logoutUser } from '../../actions/auth';
import { openSidebar, closeSidebar, changeSidebarPosition, changeSidebarVisibility } from '../../actions/navigation';

import sender1 from '../../images/1.png';
import sender2 from '../../images/2.png';
import sender3 from '../../images/3.png';

import adminDefault from '../../images/chat/chat2.png';

import s from './Header.module.scss';

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleMessagesDropdown = this.toggleMessagesDropdown.bind(this);
    this.toggleSupportDropdown = this.toggleSupportDropdown.bind(this);
    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleAccountDropdown = this.toggleAccountDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

    this.state = {
      visible: true,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false
    };
  }

  toggleNotifications = () => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  doLogout() {
    this.props
      .dispatch(logoutUser());
  }

  toggleMessagesDropdown() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
    });
  }

  toggleSupportDropdown() {
    this.setState({
      supportOpen: !this.state.supportOpen,
    });
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleAccountDropdown() {
    this.setState({
      accountOpen: !this.state.accountOpen,
    });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar())
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    const user = this.props.currentUser;
    const avatar = user && user.avatar && user.avatar.length && user.avatar[0].publicUrl;

    const firstUserLetter = user && (user.firstName|| user.email)[0].toUpperCase();
    return (
      <Navbar className={`d-print-none ${s.root}`}>
        
        <Collapse className={`${s.searchCollapse} ml-lg-0 mr-md-3`} isOpen={this.state.searchOpen}>
          <InputGroup className={`${s.navbarForm} ${this.state.searchFocused ? s.navbarFormFocused : ''}`}>
            <InputGroupAddon addonType="prepend" className={s.inputAddon}><InputGroupText><i className="fa fa-search" /></InputGroupText></InputGroupAddon>
            <Input
              id="search-input-2" placeholder="Search..." className="input-transparent"
              onFocus={() => this.setState({ searchFocused: true })}
              onBlur={() => this.setState({ searchFocused: false })}
            />
          </InputGroup>
        </Collapse>
        {/* <Form className="d-md-down-none mr-3 ml-3" inline>
          <FormGroup>
            <InputGroup className="input-group-no-border">
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="fa fa-search text-white" /></InputGroupText>
              </InputGroupAddon>
              <Input id="search-input" className="input-transparent" placeholder="Search" />
            </InputGroup>
          </FormGroup>
        </Form> */}

        <Nav className="ml-md-0">
          {/* <Dropdown nav isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className={`${s.notificationsMenu}`} >
            <DropdownToggle nav caret style={{color: "#f4f4f5", padding: 0}}>
            <span className={`${s.avatar} rounded-circle float-left mr-2`}>
              {avatar ? (
                <img src={avatar} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : user && user.role === 'admin' ? (
                <img src={adminDefault} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : <span title={user && (user.firstName || user.email)}>{firstUserLetter}</span>
              }
            </span>
              <span className={`small d-sm-down-none ${this.props.sidebarStatic ? s.adminEmail : ''}`}>{user ? (user.firstName || user.email) : "Philip smith"}</span>
              <Badge className={s.badge} color="primary">13</Badge>
            </DropdownToggle>
            <DropdownMenu right className={`${s.notificationsWrapper} py-0 animate__animated animate__faster animate__fadeInUp`}>
              <Notifications />
            </DropdownMenu>
          </Dropdown> */}
          {/*<NavItem className="d-lg-none d-md-block">
            <NavLink onClick={this.toggleSearchOpen} className={s.navItem} href="#">
              <i className="glyphicon glyphicon-search text-white" />
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.messagesOpen} toggle={this.toggleMessagesDropdown}>
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <i className="glyphicon glyphicon-comments" />
            </DropdownToggle>
            <DropdownMenu className={`${s.dropdownMenu} ${s.messages}`}>
              <DropdownItem>
                <img className={s.image} src={sender1} alt="" />
                <div className={s.details}>
                  <div>Jane Hew</div>
                  <div className={s.text}>
                    Hey, John! How is it going? ...
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <img className={s.image} src={sender2} alt="" />
                <div className={s.details}>
                  <div>Alies Rumiancaŭ</div>
                  <div className={s.text}>
                    I will definitely buy this template
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <img className={s.image} src={sender3} alt="" />
                <div className={s.details}>
                  <div>Michał Rumiancaŭ</div>
                  <div className={s.text}>
                    Is it really Lore ipsum? Lore ...
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
               
                <a href="#" className="text-white">
                  See all messages <i className="fa fa-arrow-right" />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>*/}
          <NavItem className={`${s.divider} text-white`} />
         
          
          <NavItem>
            <NavLink onClick={this.doLogout} className={`${s.navItem} text-white`} href="#">
              <i className="glyphicon glyphicon-off" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-none">
            <NavLink onClick={this.toggleSidebar} className={`${s.navItem} text-white`} href="#">
              <i className="fa fa-bars" />
            </NavLink>
          </NavItem>
          
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

