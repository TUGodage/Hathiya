import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';
import Static from '../tables/static/Today';
import Prof from '../View_prof/Prof';
class Dashboard extends React.Component {

  

  render() {
    return (
      <div>
        <Prof/>
        <Static/>
        
      </div>
    );
  }
}

export default Dashboard;
