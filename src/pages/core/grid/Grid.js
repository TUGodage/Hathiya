
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




class Grid extends React.Component {

  
        
        

  render() {

    return (
<div>
        
        
        
          
        
          
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><a href="#">ottoto@example.com</a></td>
                  <td><Badge color="gray" className="text-secondary" pill>Pending</Badge></td>
                  <th>Message</th>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><a href="#">fat.thor@example.com</a></td>
                  <td><Badge color="gray" className="text-secondary" pill>Unconfirmed</Badge></td>
                  <th>Message</th>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td><a href="#">larry@example.com</a></td>
                  <td><Badge color="primary" className="text-secondary" pill>New</Badge></td>
                  <th>Message</th>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Peter</td>
                  <td>Horadnia</td>
                  <td><a href="#">peter@example.com</a></td>
                  <td><Badge color="success" className="text-secondary" pill>Active</Badge></td>
                  <th>Message</th>
                </tr>
              </tbody>
              {/* eslint-enable */}
            </Table>
          </div>
      
      
        
        
        
     
    
  </div>
      

    );
  }
}

export default Grid;