import React from 'react'
import PropTypes from 'prop-types'
import { Control, Field } from 'react-redux-form';
import { Submission } from '../services/Submission';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
  onSubmitClick = () => {
    this.props.onSubmitClick()
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
      return <Container fluid><hr/>
          <Button className="btn" onClick={this.onSubmitClick}>Restore default</Button>
          {controls.map(control =>
                    <Submission model='searching' 
                    key={control.id} type={control.type} modelname={control.name} id={control.id} value={this.convertValue(control.type, control.value)}
                     changeInputAction={this.changeInputAction} removeInputAction={this.removeInputAction} />
                )}
        </Container>
    }
  }
  convertValue(type, value){
    if(value==null) return;
    if(type=='date') {
      const day = value.substr(0, 2)
      const month = value.substr(2, 2) - 1
      const year = value.substr(4, 4)
      var date = new Date(year, month, day)
      return date
    }
    else if(type=='checkbox') {
      return value == 'true';
    }
    else return value
  }
  render() {
    const { controls, isFetching, error } = this.props

    console.log('isFetching ' + isFetching);
    console.log(controls);

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
  lastindex: PropTypes.number,
  addControl: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  changeInputAction: PropTypes.func.isRequired,
  removeInputAction: PropTypes.func.isRequired,
  getControls: PropTypes.func.isRequired
}

