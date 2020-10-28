import React from 'react';
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
} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Datetime from 'react-datetime';
import ColorPicker from 'rc-color-picker';
import MaskedInput from 'react-maskedinput';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import Dropzone from 'react-dropzone';
import TextareaAutosize from 'react-autosize-textarea';
import ReactMde, { ReactMdeCommands } from 'react-mde';
import Select from 'react-select';
import Widget from '../../components/Widget/Widget';
import axios from 'axios';



//import s from './Elements.module.scss';

import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeTooltip = createSliderWithTooltip(Range);
class Service extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      service:'',
      discription:'',
      price:''   
      
      
    };
    this.changeService = this.changeService.bind(this);
    this.changeDiscription = this.changeDiscription.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.doSave = this.doSave.bind(this);
  }

  
  
  changeService = (e) => {
    this.setState({ service: e.target.value });
  }
  changeDiscription = (e) => {
    this.setState({ discription: e.target.value});
  }
  changePrice = (e) => {
    this.setState({ price: e.target.value});
  }

  doSave(e) {
    e.preventDefault();
    const obj = {
        service : this.state.service,
        discription: this.state.discription,
        price : this.state. price,
        
    };

    console.log(obj);

    axios.post('', obj)
    .then(res => {
        console.log(res.data);
        
    });


  

}

  

  valueFormatter = (v) => {
    return `${v}`;
  }
    render() {
        return (
          <div>
<Row>
          <Col md="12">
            <Widget
              title={<h6> Set <strong>Services</strong></h6>} settingsInverse refresh
              close
            >
              
                  <Form onSubmit={this.doSave}>

                  <FormGroup row>
                  <Label md={2} className="text-md-right" for="default-textarea"></Label>
                  <Col md={6}>
                    <Input rows="4" className="input-transparent" type="textbox" name="text" id="default-textarea" placeholder="Add Services" value={this.state.service}
                    onChange={this.changeService} />
                  </Col>
                </FormGroup>
                  <FormGroup row>
                  <Label md={2} className="text-md-right" for="default-textarea"> </Label>
                  <Col md={6}>
                    <Input rows="4" className="input-transparent" type="textarea" name="text" id="default-textarea" placeholder="Add Discription" value={this.state.discription}
                    onChange={this.changeDiscription} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={2} className="text-md-right" for="default-textarea"></Label>
                  <Col md={6}>
                    <Input rows="4" className="input-transparent" type="textbox" name="text" id="default-textarea" placeholder="Add Prices" value={this.state.price} 
                    onChange={this.changePrice}/>
                  </Col>
                </FormGroup>
                


                
                <FormGroup row>
                  
                  <Col md={8}>
                    
                    <div className="text-md-right mt-xs">
                      <Button color="danger" className="mr-xs">Save</Button>
                      <Button color="default">Clear</Button>
                    </div>
                  </Col>
                </FormGroup>   

                  </Form>
            </Widget>
          </Col>
        </Row>
        </div>


            
            
        )
    }
}

export default Service











{/*import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    BootstrapTable,
    TableHeaderColumn,
} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Popover, PopoverBody, PopoverHeader, Alert } from 'reactstrap';

import {
    Button,
    ButtonToolbar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";

import Widget from '../../components/Widget';
import Rating from '../product/components/Rating/Rating';
import s from './Management.module.scss';

import { getProductsRequest, deleteProductRequest } from '../../actions/products'
import Loader from '../../components/Loader';
import cx from 'classnames';

class Management extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    state = {
        popovers: {},
        promoAlert: false,
    };

    constructor() {
        super();
        this.apiFormatter = this.apiFormatter.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProductsRequest());
        setTimeout(() => {
            this.showPromoAlert();
        }, 100);
    }

    showPromoAlert() {
        this.setState({promoAlert: true});
    }

    imageFormatter(cell) {
        return (
            <img src={cell} alt="..." className={s.image} title="image"/>
        )
    }

    ratingFormatter(cell) {
        return (
            <Rating rating={parseFloat(cell)}/>
        )
    }

    priceFormatter = (cell) => {
        return (
            <span className="text-success">{cell}</span>
        )
    }

    titleFormatter(cell, row) {
        return cell ? (
            <Link className="text-success" to={'/app/ecommerce/product/' + row.id}>
               {cell[0].toUpperCase() + cell.slice(1)}
            </Link>
        ) : ""
    }

    deleteProduct(id) {
        this.props.dispatch(deleteProductRequest({
            id,
            history: this.props.history
        }))
    }

    togglePopover(id) {
        let newState = {...this.state};
        if (!this.state.popovers[id]) {
            newState.popovers[id] = true;
        } else {
            newState.popovers[id] = !newState.popovers[id];
        }
        this.setState(newState);
    }

    apiFormatter(cell, row) {
        return (
            <ButtonToolbar>
                <Button color="primary" size="xs" onClick={()=> this.props.history.push('/app/ecommerce/management/' + row.id)}>
                    <span className="d-none d-md-inline-block">Edit</span>
                    <span className="d-md-none"><i className='la la-edit'/></span>
                </Button>
                <Button id={'popoverDelete_' + row.id} color="danger" size="xs">
                    {this.props.isDeleting && this.props.idToDelete === row.id ? <Loader size={14}/> :
                        <span>
                            <span className="d-none d-md-inline-block">Delete</span>
                            <span className="d-md-none"><i className='la la-remove'/></span>
                        </span>
                    }
                </Button>
                <Popover className="popover-danger" target={'popoverDelete_' + row.id} placement="top" isOpen={this.state.popovers[row.id]}
                         toggle={()=>{this.togglePopover(row.id)}}
                >
                    <PopoverHeader className="px-5">Are you sure?</PopoverHeader>
                    <PopoverBody className="px-5 d-flex justify-content-center">
                        <ButtonToolbar>
                            <Button color="success" size="xs" onClick={() => {this.deleteProduct(row.id)}}>
                                Yes
                            </Button>
                            <Button color="danger" size="xs" onClick={() => {this.togglePopover(row.id)}}>
                                No
                            </Button>
                        </ButtonToolbar>
                    </PopoverBody>
                </Popover>
            </ButtonToolbar>
        )
    }

    renderSizePerPageDropDown = (props) => {
        const limits = [];
        props.sizePerPageList.forEach((limit) => {
            limits.push(<DropdownItem key={limit}
                                      onClick={() => props.changeSizePerPage(limit)}>{limit}</DropdownItem>);
        });

        return (
            <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
                <DropdownToggle color="subtle-blue" caret>
                    {props.currSizePerPage}
                </DropdownToggle>
                <DropdownMenu>
                    {limits}
                </DropdownMenu>
            </Dropdown>
        );
    };

    createNewProduct() {
        this.props.history.push('/app/ecommerce/management/create');
    }

    render() {
        const options = {
            sizePerPage: 10,
            paginationSize: 3,
            sizePerPageDropDown: this.renderSizePerPageDropDown,
        };

        return (
            <div>
                <div className="page-top-line">
                    <h2 className="page-title">Product - <span className="fw-semi-bold">Management</span></h2>
                    <Alert
                        color="success"
                        className={cx(s.promoAlert, {[s.showAlert]: this.state.promoAlert})}
                    >
                        This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com/admin-dashboards/light-blue-react-node-js" target="_blank">Light Blue React with Node.js</a> integration!
                    </Alert>
                </div>
                <Widget title="List of Products" collapse close
                        fetchingData={this.props.isReceiving}
                >
                    <Button color="success" onClick={() => this.createNewProduct()}>Create Product</Button>
                    <BootstrapTable data={this.props.products} version="4" pagination options={options} search
                                    tableContainerClass={`table-striped ${s.bootstrapTable}`}>
                        <TableHeaderColumn dataField="id" isKey={true} className="width-50"
                                           columnClassName="width-50">
                            <span className="fs-sm">ID</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="img" dataFormat={this.imageFormatter}>
                            <span className="fs-sm">Image</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataFormat={this.titleFormatter}>
                            <span className="fs-sm">Title</span>
                        </TableHeaderColumn>
                        {window.innerWidth >= 768 && (
                            <TableHeaderColumn dataField="subtitle">
                                <span className="fs-sm">Subtitle</span>
                            </TableHeaderColumn>
                        )}
                        {window.innerWidth >= 768 && (
                            <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>
                                <span className="fs-sm">Price($)</span>
                            </TableHeaderColumn>
                        )}
                        {window.innerWidth >= 768 && (
                            <TableHeaderColumn dataField="rating" dataFormat={this.ratingFormatter}>
                                <span className="fs-sm">Rating</span>
                            </TableHeaderColumn>
                        )}
                        <TableHeaderColumn dataFormat={this.apiFormatter}>
                            <span className="fs-sm">Api</span>
                        </TableHeaderColumn>
                    </BootstrapTable>
                </Widget>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
        isReceiving: state.products.isReceiving,
        isDeleting: state.products.isDeleting,
        idToDelete: state.products.idToDelete,
    };
}
*/}

