import React from 'react'
import PropTypes from 'prop-types'
import { Control, Field } from 'react-redux-form';
import { Submission } from '../services/Submission';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Validation } from '../services/Validation';


export class Page extends React.Component {
  componentDidMount() {
    this.props.getControls();
  }
  changeInputAction = (name, value) => { 
    this.props.changeInputAction(name, value);
  }    
  removeInputAction = (name) => { 
    this.props.removeInputAction(name);
  }    
  onClearDB = () => {
    this.props.clearDB()
  }
  onAddClick = () => {
    this.props.addControl()
  }
  
  renderButton = () => {
    const { controltype, singlelinetext } = this.props
    const onChangeSelect = e => { this.changeInputAction(e.target.name, e.target.value); }    

    return (
      <div model="page">
        <InputGroup>
          <Form.Control type='text' value={controltype} readOnly ></Form.Control>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>Submission</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as="select" model="page.controltype" name="page.controltype" onChange={(e) => onChangeSelect(e)}>
              <option value="text">text</option>
              <option value="textarea">textarea</option>
              <option value="select">select</option>
              <option value="date">date</option>
              <option value="radio">radio</option>
              <option value="checkbox">checkbox</option>
            </Form.Control>
            <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.onAddClick}>Add</Button>
                </InputGroup.Append>
        </InputGroup>
      </div>
     )
  }
  renderTemplate = () => {
    const { controls, isFetching, error } = this.props
    if (error) {
      return <p className="error">Error loading</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    } else {
      Validation.check(controls)
      return <Container fluid><hr/>
          <Button className="btn" onClick={this.onClearDB}>Clear DB and load defaults</Button>
          {controls.map(control =>
                    <Submission model='searching' 
                    key={control.id} 
                    type={control.type} 
                    modelname={control.name} 
                    id={control.id} 
                    controlvalue={this.convertValue(control.type, control.value)}
                    error={control.error}
                    changeInputAction={this.changeInputAction} 
                    removeInputAction={this.removeInputAction} />
                )}
        </Container>
    }
  }
  convertValue(type, val){
    if(type=='date' && val!=null && (''+val).length==8) {
      const day = val.substr(0, 2)
      const month = val.substr(2, 2) - 1
      const year = val.substr(4, 4)
      var date = new Date(year, month, day)
      return date
    }
    else return val
  }
  render() {
    return (
      <div className="page">
        {this.renderButton()}
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  controltype: PropTypes.string,
  controls: PropTypes.any,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  addControl: PropTypes.func.isRequired,
  getDefault: PropTypes.func.isRequired,
  changeInputAction: PropTypes.func.isRequired,
  removeInputAction: PropTypes.func.isRequired,
  getControls: PropTypes.func.isRequired,
  saveControls: PropTypes.func.isRequired
}

