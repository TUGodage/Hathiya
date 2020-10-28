import React, { Component } from 'react'
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
  
  import Widget from './../../components/Widget/Widget';

export class ViewService extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
         service:[]
  
    }
  }
  

  componentDidMount(){
    axios.get('')
    .then(response => {
      console.log(response);
      this.setState({service : response.data})
    })
    .catch(error => {
      console.log(error)
    })

  }
    render() {
      const { service } = this.state
        return (
            <div>
               <Widget title={<h5> All Services <span className="fw-semi-bold"></span></h5>} settings close>
              
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
                      
                      <th>Service type</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Accept or reject</th>
                      
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    {this.state.service.map(s => (
                                          <tr>
                                          <td>1</td>
                                          <td>{this.state.s.service}</td>
                                          <td>{this.state.s.price}</td>
                                          <td>{this.state.s.discription}</td>
                                          <td>
                                          <Button color="default" size="sm">Update</Button>
                                          <Button color="danger" className="mr-xs" size="sm">Delete</Button></td>
                                          
                                        </tr>

                    ))}

                    <tr>
                      <td>2</td>
                      <td>1hour tatoo</td>
                      <td>$67</td>
                      <td>jgyftfhujnj</td>
                      
                      <td>
                      <Button color="default" size="sm">update</Button>
                      <Button color="danger" className="mr-xs" size="sm">Delete</Button></td>
                      
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

export default ViewService
