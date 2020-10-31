import React from 'react'
import PropTypes from 'prop-types'
import { Control } from 'react-redux-form';

export class Page extends React.Component {

  onBtnClick = e => {
    this.props.saveSubmissions()
  }

  renderButton = () => {

    return (
      <div model="page" >
        <Control.text model="page.singlelinetext" id="page.singlelinetext" />
        <Control.textarea model="page.multiplelinetext" id="page.multiplelinetext" />
        <Control.select model="page.dropdown" id="page.dropdown" >
            <option value="1">Grapefruit</option>
            <option value="2">Lime</option>
            <option value="3">Coconut</option>
            <option value="4">Mango</option>
        </Control.select>
        <Control.text model="page.date" id="page.date" />
        <Control.radio model="page.radio" id="page.radio" value="1" />
        <Control.radio model="page.radio" id="page.radio" value="2" />
        <Control.checkbox model="page.checkbox" id="page.checkbox" />
        <Control.checkbox model="page.checkbox2" id="page.checkbox2" />

        <button className="btn" onClick={this.onBtnClick}>Save</button>

      </div>
    )
  }
  renderTemplate = () => {
    const { isFetching, error } = this.props

    if (error) {
      return <p className="error">Error loading</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    } else {
      return <p>Loaded</p>
    }
  }

  render() {
    //const { year, photos } = this.props
    return (
      <div className="ib page">
        {this.renderTemplate()}
        {this.renderButton()}
      </div>
    )
  }
}

Page.propTypes = {
  saveSubmissions: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
