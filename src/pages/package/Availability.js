import React, { Component } from 'react';
import Calendar from '../dashboard/components/calendar/Calendar';
import Widget from '../../components/Widget/Widget';
import s from './SPackage.module.scss';
import reactLogo from '../../images/react-logo.svg';
import angularLogo from '../../images/angularjs-logo.svg';
import jsLogo from '../../images/js-logo.svg';

class Availability extends React.Component {

  render() {
    return (
      <div>
                <Widget
                    title={<h4>Calendar</h4>}
                    refresh close
                >
                <Calendar />
              
                </Widget>
            </div>
    );
  }
}

export default Availability;
