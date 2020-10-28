import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../../components/Widget/Widget';
import s from './Static.module.scss';
import axios from 'axios'

class Today extends React.Component {

 constructor(props) {
   super(props)
 
   this.state = {
      today:[]
   }
 }
 
 componentDidMount(){
  axios.get('')
  .then(response => {
    console.log(response);
    this.setState({today : response.data})
  })
  .catch(error => {
    console.log(error)
  })

}

  render() {
    return (
      <div className={s.root}>
        
        
        
          
            <Widget
              title={<h5> All Appoinment <span className="fw-semi-bold">Today</span></h5>} settings close
            >
              
              <br /><br />
              <div className="table-responsive">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Appoinment type</th>
                      <th>Time</th>
                      <th>Telephone</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                  {this.state.today.map(t => (
                                          <tr>
                                          <td>1</td>
                                          <td>{this.state.t.customer_name}</td>
                                          <td>{this.state.t.A_type}</td>
                                          <td>{this.state.t.time}</td>
                                          <td>{this.state.t.t_no}</td>
                                          <td>{this.state.t.messege}</td>
                                          
                                          
                                        </tr>

                    ))}
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>tatoo</td>
                      <td>10am</td>
                      <td>01187683993</td>
                      <th>Message</th>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>tatoo</td>
                      <td>10am</td>
                      <td>01187683993</td>
                      <th>Message</th>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>tatoo</td>
                      <td>10am</td>
                      <td>01187683993</td>
                      <th>Message</th>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
              </div>
            </Widget>
          
            
            
            
         
        
      </div>
    );
  }

}

export default Today;
