import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import { changeActiveSidebarItem } from '../../actions/navigation';
import { logoutUser } from '../../actions/auth';

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    activeItem: '',
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  componentDidMount() {
    this.element.addEventListener('transitionend', () => {
      if (this.props.sidebarOpened) {
        this.element.classList.add(s.sidebarOpen);
      }
    }, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
      if (nextProps.sidebarOpened) {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.classList.remove(s.sidebarOpen);
        setTimeout(() => {
          this.element.style.height = '';
        }, 0);
      }
    }
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <nav
        className={cx(s.root)}
        ref={(nav) => { this.element = nav; }}
      >
        <header className={s.logo}>
          <a href=""> <span className="fw-bold">Ranky</span></a>
        </header>
        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="User List"
            isHeader
            iconName="flaticon-home"
            link="/app/admin/userlist"
            index="main"
            
          />
          
          
            <LinksGroup
                onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                activeItem={this.props.activeItem}
                header="Challenges"
                isHeader
                iconName="flaticon-star"
                link="/app/admin/challenges"
                index="ecommerce"
              
            />
             <LinksGroup
                onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                activeItem={this.props.activeItem}
                header="Rewards"
                isHeader
                iconName="flaticon-star"
                link="/app/ViewService"
                index="ecommerce"
              
            />
          {/* <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Availability Set"
            link="/app/Availability"
            isHeader
            iconName="flaticon-star"
            index="packages"
          /> */}
          
          {/* <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Add Quetions"
            isHeader
            iconName="flaticon-star"
            link="/app/Question"
            index="forms"
            
          /> */}
          
          {/* <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="View All Appoinment"
            isHeader
            iconName="flaticon-star"
            link="/app/Appoinment"
            index="core"
            
          /> */}
          
          {/* <LinksGroup
            header="Accepted Appoinment"
            link="/app/Accepted"
            isHeader
            iconName="flaticon-star"
          /> */}
          
          {/* <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Calander"
            isHeader
            iconName="flaticon-star"
            link="/app/extra/calendar"
            index="extra"
          
          /> */}
          
          {/*<LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="UI Elements"
            isHeader
            iconName="flaticon-layers"
            link="/app/ui"
            index="ui"
            childrenLinks={[
              {
                header: 'Alerts', link: '/app/ui/alerts',
              },
              {
                header: 'Badge', link: '/app/ui/badge',
              },
              {
                header: 'Buttons', link: '/app/ui/buttons',
              },
              {
                header: 'Card', link: '/app/ui/card',
              },
              {
                header: 'Carousel', link: '/app/ui/carousel',
              },
              {
                header: 'Jumbotron', link: '/app/ui/jumbotron',
              },
              {
                header: 'Icons', link: '/app/ui/icons',
              },
              {
                header: 'List Groups', link: '/app/ui/list-groups',
              },
              {
                header: 'Modal', link: '/app/ui/modal',
              },
              {
                header: 'Nav', link: '/app/ui/nav',
              },
              {
                header: 'Navbar', link: '/app/ui/navbar',
              },
              {
                header: 'Notifications', link: '/app/ui/notifications',
              },
              {
                header: 'Pagination', link: '/app/tables/dynamic',
              },
              {
                header: 'Popovers & Tooltips', link: '/app/ui/popovers',
              },
              {
                header: 'Progress', link: '/app/ui/progress',
              },
              {
                header: 'Tabs & Accordion', link: '/app/ui/tabs-accordion',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Forms"
            isHeader
            iconName="flaticon-list"
            link="/app/forms"
            index="forms"
            childrenLinks={[
              {
                header: 'Forms Elements', link: '/app/forms/elements',
              },
              {
                header: 'Forms Validation', link: '/app/forms/validation',
              },
              {
                header: 'Forms Wizard', link: '/app/forms/wizard',
              },
            ]}
          />*/}
          
          
        {/*  <LinksGroup
            onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
            activeItem={this.props.activeItem}
            header="Tables"
            isHeader
            iconName="flaticon-map-location"
            link="/app/tables"
            index="tables"
            childrenLinks={[
              {
                header: 'Tables Basic', link: '/app/tables/static',
              },
              {
                header: 'Tables Dynamic', link: '/app/tables/dynamic',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Maps"
            isHeader
            iconName="flaticon-equal-1"
            link="/app/maps"
            index="maps"
            childrenLinks={[
              {
                header: 'Google Maps', link: '/app/maps/google',
              },
              {
                header: 'Vector Map', link: '/app/maps/vector',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Extra"
            isHeader
            iconName="flaticon-star"
            link="/app/extra"
            index="extra"
            childrenLinks={[
              {
                header: 'Calendar', link: '/app/extra/calendar',
              },
              {
                header: 'Invoice', link: '/app/extra/invoice',
              },
              {
                header: 'Login Page', link: '/login', onClick: this.doLogout,
              },
              {
                header: 'Error Page', link: '/error',
              },
              {
                header: 'Gallery', link: '/app/extra/gallery',
              },
              {
                header: 'Search Result', link: '/app/extra/search',
              },
              {
                header: 'Time line', link: '/app/extra/timeline',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Menu Levels"
            isHeader
            iconName="flaticon-folder-10"
            link="/app/menu"
            index="menu"
            childrenLinks={[
              {
                header: 'Level 1.1', link: '/app/menu/level1',
              },
              {
                header: 'Level 1.2',
                link: '/app/menu/level_12',
                index: 'level_12',
                childrenLinks: [
                  {
                    header: 'Level 2.1',
                    link: '/app/menu/level_12/level_21',
                    index: 'level_21',
                  },
                  {
                    header: 'Level 2.2',
                    link: '/app/menu/level_12/level_22',
                    index: 'level_22',
                    childrenLinks: [
                      {
                        header: 'Level 3.1',
                        link: '/app/menu/level_12/level_22/level_31',
                        index: 'level_31',
                      },
                      {
                        header: 'Level 3.2',
                        link: '/app/menu/level_12/level_22/level_32',
                        index: 'level_32 ',
                      },
                    ],
                  },
                  {
                    header: 'Level 2.3',
                    link: '/app/menu/level_12/level_23',
                    index: 'level_23',
                  },
                ],
              },
            ]}
          />*/}
        </ul>
        {/*<h5 className={s.navTitle}>
          LABELS
          {/* eslint-disable-next-line 
          <a className={s.actionLink}>
            <i className={`${s.glyphiconSm} glyphicon glyphicon-plus float-right`} />
          </a>
        </h5>
        {/* eslint-disable 
        <ul className={s.sidebarLabels}>
          <li>
            <a href="#">
              <i className="fa fa-circle text-success mr-2" />
              <span className={s.labelName}>My Recent</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle text-primary mr-2" />
              <span className={s.labelName}>Starred</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle text-danger mr-2" />
              <span className={s.labelName}>Background</span>
            </a>
          </li>
        </ul>
        {/* eslint-enable */}
        {/*<h5 className={s.navTitle}>
          PROJECTS
        </h5>
        <div className={s.sidebarAlerts}>
          {this.props.alertsList.map(alert => // eslint-disable-line
            <Alert
              key={alert.id}
              className={s.sidebarAlert} color="transparent"
              isOpen={true} // eslint-disable-line
              toggle={() => { this.dismissAlert(alert.id); }}
            >
              <span>{alert.title}</span><br />
              <Progress className={`bg-custom-dark progress-xs mt-1`} color={alert.color} value={alert.value} />
              <small>{alert.footer}</small>
            </Alert>,
          )}
        </div>*/}
      </nav >
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
