import React, { Component } from 'react'
import './User.css'
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    InputGroup,
    InputGroupAddon,
    ButtonGroup,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    card
  } from 'reactstrap';
import Widget from '../../components/Widget/Widget';
export class UserDetais extends Component {
    render() {
        return (
            <div>
                
                <Col md="11">
            <Widget
               settingsInverse refresh
              close
            > 
            <br></br>
                <form className="user">
                    <h6>name:name</h6>
                    <h6>telephone:tp</h6>
                    <h6>Address:add</h6>
                    <h6>email:email</h6>
                    <h6>Answer for queston:q</h6>
                    <img src=""/>

                </form>
                </Widget>
                </Col>
                
            </div>
        )
    }
}

export default UserDetais
