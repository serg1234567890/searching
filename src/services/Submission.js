import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Control, Field, ReduxField } from 'react-redux-form';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "./react-datepicker.css";

export class Submission extends Component {
    state = {
        startDate: null //new Date()
    };
    render() {
        const { startDate } = this.state;
        const { type, modelname, id, value, changeInputAction } = this.props
        const controlname = type + id;
        const onChangeRadio = e => { changeInputAction(e.target.name, e.target.value); }    
        const onChangeCheckbox = e => { changeInputAction(e.target.name, e.target.checked); }    
        const onChangeSelect = e => { changeInputAction(e.target.name, e.target.value); }    
        const onChangeText = e => { changeInputAction(e.target.name, e.target.value); }    
        const onChangeDate = (model, startDate, event) => {
            //console.log(model.modelname, startDate, event);
            this.setState({ startDate });
            changeInputAction(model.modelname, startDate);
        };    
    
        if(type == 'text') {
            return (
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type='text' model={modelname} name={modelname} onChange={(e) => onChangeText(e)} />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            )
        }
        else if(type == 'textarea') {
            return (
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" rows={3} model={modelname} name={modelname} onChange={(e) => onChangeText(e)}/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            )
        }
        else if(type == 'select') {
            return (
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="select" model={modelname} name={modelname} onChange={(e) => onChangeSelect(e)}>
                    <option value="0"></option>
                    <option value="1">this is value 1 of the select control</option>
                    <option value="2">value 2</option>
                    <option value="3">value 3</option>
                    <option value="4">value 4</option>
                </Form.Control>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            )
        }
        else if(type == 'date') {
            return (
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <DatePicker className='form-control datepicker' selected={startDate} onChange={(date, event) => onChangeDate({modelname}, date, event)} />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            )
        }
        else if(type == 'radio') {
            return (<div key={controlname}>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Check type='radio' className='checkboxradio' model={modelname} name={modelname} value='on' onChange={(e) => onChangeRadio(e)} />
                <Form.Control type='text' value='on' readOnly/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Check  type='radio' className='checkboxradio' model={modelname} name={modelname} value='off' onChange={(e) => onChangeRadio(e)} />
                <Form.Control type='text' value='off' readOnly/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>)
        }
        else if(type == 'checkbox') {
            return (<div key={controlname}>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>{modelname}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Check type='checkbox' className='checkboxradio' model={modelname} name={modelname} value='vote1' onChange={(e) => onChangeCheckbox(e)} />
                <Form.Control type='text' readOnly/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>)
        }
        else return(<Field><a>Empty</a></Field>)
    }
}
Submission.propTypes = {
    type: PropTypes.string,
    modelname: PropTypes.string,
    id: PropTypes.number,
    changeInputAction: PropTypes.func.isRequired,
}
