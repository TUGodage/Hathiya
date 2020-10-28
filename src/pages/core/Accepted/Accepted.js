import React , {Component} from 'react';
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
  FormGroup,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget';
import './Accept.css';

export class Availability extends Component {
    render() {
        return (
            <div className="table-responsive">
                <Widget
              title={<h5> All Appoinment <span className="fw-semi-bold">Today</span></h5>} settings close
            >
                <FormGroup className="search">
                        <Label for="search-input1">
                         
                        </Label>
                        <InputGroup>
                          <Input type="text" id="search-input1" placeholder=" Search from type" />
                          <InputGroupAddon addonType="append">
                            <Button color="default">Search</Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Appoinment type</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Deposit</th>
                     
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><a href="">Mark</a></td>
                      <td>1hour tatoo</td>
                      <td>2020/7/8</td>
                      <td>10am</td>
                      <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                      
                      
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><a href="">john</a></td>
                      <td>1hour tatoo</td>
                      <td>2020/7/8</td>
                      <td>10am</td>
                      <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                      
                      
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><a href="">Larry</a></td>
                      <td>1hour tatoo</td>
                      <td>2020/7/8</td>
                      <td>10am</td>
                      <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                      
                      
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><a href="">peter</a></td>
                      <td>1hour tatoo</td>
                      <td>2020/7/8</td>
                      <td>10am</td>
                      <td><Input type="checkbox" className="ios" id="checkbox-ios2" /></td>
                      
                      
                    </tr>
                  </tbody>

                  {/* eslint-enable */}
                </Table>
                
                </Widget>
              </div>
            
          
            
            

  
        )
    }
}

export default Availability

