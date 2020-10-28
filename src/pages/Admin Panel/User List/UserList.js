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
import s from '../../tables/static/Static.module.scss';
import axios from 'axios'

class UserList extends React.Component {

 constructor(props) {
   super(props)
 
 }
 


  render() {
    return (
      <div className={s.root}>
        
        
        
          
            <Widget
              title={<h5> All Users</h5>} settings close
            >
              
              <br /><br />
              <div className="table-responsive">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Telephone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                  
                    <tr>
                      <td>1</td>
                      <td>Jacob</td>
                      <td>01134557890</td>
                      <td>
                                  <Button color="default" size="sm">Edit</Button>
                                  &nbsp;&nbsp;<Button color="danger" className="mr-xs" size="sm">Delete</Button></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>01134557890</td>
                      <td>
                                  <Button color="default" size="sm">Edit</Button>
                                  &nbsp;&nbsp;<Button color="danger" className="mr-xs" size="sm">Delete</Button></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>01134557890</td>
                      <td>
                                  <Button color="default" size="sm">Edit</Button>
                                  &nbsp;&nbsp;<Button color="danger" className="mr-xs" size="sm">Delete</Button></td>
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

export default UserList;