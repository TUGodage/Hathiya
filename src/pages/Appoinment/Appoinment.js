import React, {Component} from 'react';
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
  FormGroup,
  Input,
  Label,
  Badge,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import axios from 'axios'
import './ty.css'

import Widget from './../../components/Widget/Widget';

class Appoinment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             appoinment:[]
        }
    }
    componentDidMount(){
        axios.get('')
        .then(response => {
          console.log(response);
          this.setState({appoinment : response.data})
        })
        .catch(error => {
          console.log(error)
        })
    
      }
    render() {
        return (
            <div>

            <Widget title={<h5> All Appoinment <span className="fw-semi-bold">Today</span></h5>} settings close>
                          
                          <br />
                        
                                  <FormGroup className="search">
                                    
                                    <InputGroup>
                                      <Input type="text" id="search-input1" placeholder=" Search by type" />
                                      <InputGroupAddon addonType="append">
                                        <Button color="default">Search</Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </FormGroup>
            
                          <div className="table-responsive">
                            <Table className="table-hover">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Customer Name</th>
                                  <th>Appoinment type</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Deposit</th>
                                  <th>Accept or reject</th>
                                  
                                </tr>
                              </thead>
                              {/* eslint-disable */}
                              <tbody>
                              {this.state.appoinment.map(a => (
                                          <tr>
                                          <td>1</td>
                                          <td><a href="#/app/UserDetails">{this.state.a.customer_name}</a></td>
                                          <td>{this.state.a.A_type}</td>
                                          <td>{this.state.a.date}</td>
                                          <td>{this.state.a.time}</td>
                                          <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                                  <td>
                                  <Button color="default" size="sm">Accept</Button>
                                  <Button color="danger" className="mr-xs" size="sm">Reject</Button></td>
                                          
                                          
                                          
                                        </tr>
 
                    ))}
                                <tr>
                                  <td>2</td>
                                  <td><a href="#/app/UserDetails">Mark</a></td>
                                  <td>1hour tatoo</td>
                                  <td>2020/7/8</td>
                                  <td>10am</td>
                                  <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                                  <td>
                                  <Button color="default" size="sm">Accept</Button>
                                  <Button color="danger" className="mr-xs" size="sm">Reject</Button></td>
                                  
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td><a href="">Larry</a></td>
                                  <td>1hour tatoo</td>
                                  <td>2020/7/8</td>
                                  <td>10am</td>
                                  <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                                  <td>
                                  <Button color="default" size="sm">Accept</Button>
                                  <Button color="danger" className="mr-xs" size="sm">Reject</Button></td>
                                  
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td><a href="">peter</a></td>
                                  <td>1hour tatoo</td>
                                  <td>2020/7/8</td>
                                  <td>10am</td>
                                  <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                                  <td>
                                  <Button color="default" size="sm">Accept</Button>
                                  <Button color="danger" className="mr-xs" size="sm">Reject</Button></td>
                                  
                                </tr>
                              </tbody>
            
                              {/* eslint-enable */}
                            </Table>
                           
                          </div>
                        </Widget>
                      
                        
                        
            
              </div>
        )
    }
}

export default Appoinment
