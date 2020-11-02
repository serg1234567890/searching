import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Control, Field, ReduxField } from 'react-redux-form';

export class Submission extends Component {
    render() {
        const { type, modelname, id, value, changeInputAction } = this.props
        const controlname = type + id;
        const onChangeRadio = e => { changeInputAction(e.target.name, e.target.value); }    
        const onChangeCheckbox = e => { changeInputAction(e.target.name, e.target.checked); }    
    
        if(type == 'text') {
            return (<div key={controlname}><label>{modelname}</label>
            <Control.text model={modelname} />
            </div>)
        }
        else if(type == 'textarea') {
            return (<div key={controlname}><label>{modelname}</label>
            <Control.textarea model={modelname} />
            </div>)
        }
        else if(type == 'select') {
            return (<div key={controlname}><label>{modelname}
                <Control.select model={modelname}>
                    <option value="1">value 1</option>
                    <option value="2">value 2</option>
                    <option value="3">value 3</option>
                    <option value="4">value 4</option>
                </Control.select>
            </label></div>)
        }
        else if(type == 'date') {
            return (<div key={controlname}><label>{modelname}</label>
            <Control.text model={modelname} />
            </div>)
        }
        else if(type == 'radio') {
            return (<div key={controlname}><label>{modelname}</label>
                <input type='radio' model={modelname} name={modelname} value='on' onChange={(e) => onChangeRadio(e)} />
                <input type='radio' model={modelname} name={modelname} value='off' onChange={(e) => onChangeRadio(e)} />
            </div>)
        }
        else if(type == 'checkbox') {
            return (<div key={controlname}><label className="form-check-label">{modelname}</label>
                <input type='checkbox' model={modelname} name={modelname} value={value} onChange={(e) => onChangeCheckbox(e)} />
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
