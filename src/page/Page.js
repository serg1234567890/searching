import React from 'react'
import PropTypes from 'prop-types'
import { Control, Field } from 'react-redux-form';
import { Submission } from './Submission';


export class Page extends React.Component {

  onSubmitClick = () => {
    console.log('click save')
    this.props.onSubmitClick()
  }
  onAddClick = () => {
    console.log('click add ' + this.props.controltype)
    this.props.addControl()
  }

  renderButton = () => {
    const { controltype, singlelinetext } = this.props

    return (
      <div model="page">
        <a>{controltype}</a>
        <Field model="field1"><label>First name:</label><Control.text model="singlelinetext" id="singlelinetext" /></Field>
        <Control.select model="page.controltype" id="page.controltype" >
            <option value="text">text</option>
            <option value="textarea">textarea</option>
            <option value="select">select</option>
            <option value="date">date</option>
            <option value="radio">radio</option>
            <option value="checkbox">checkbox</option>
        </Control.select>
        <Control.radio model="page.radio" id="page.radio" value="1" />
        <Control.radio model="page.radio" id="page.radio" value="2" />

        <button className="btn" onClick={this.onAddClick}>Add</button>
        <button className="btn" onClick={this.onSubmitClick}>Save</button>
        <button type="submit">Submit (check console)</button>
      </div>
      /*
      <div model="page" >
        <Control.text model="page.singlelinetext" id="page.singlelinetext" />
        <Control.textarea model="page.multiplelinetext" id="page.multiplelinetext" />
        <Control.select model="page.dropdown" id="page.dropdown" >
            <option value="1">value 1</option>
            <option value="2">value 2</option>
            <option value="3">value 3</option>
            <option value="4">value 4</option>
        </Control.select>
        <Control.text model="page.date" id="page.date" />
        <Control.radio model="page.radio" id="page.radio" value="1" />
        <Control.radio model="page.radio" id="page.radio" value="2" />
        <Control.checkbox model="page.checkbox" id="page.checkbox" />
        <Control.checkbox model="page.checkbox2" id="page.checkbox2" />

        <button className="btn" onClick={this.onBtnClick}>Save</button>

      </div>
      */
     
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
      return <div>
        {controls.map(control =>
                    <Submission model='searching' 
                    key={control.id} type={control.type} modelname={control.name} id={control.id} />
                )}        
        </div>
    }
  }

  render() {
    const { controls, isFetching, error } = this.props

    console.log('isFetching ' + isFetching);
    console.log(controls);

    return (
      <div className="page">
        {this.renderTemplate()}
        {this.renderButton()}
      </div>
    )
  }
}

Page.propTypes = {
  controltype: PropTypes.string,
  controls: PropTypes.any,
  addControl: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}

