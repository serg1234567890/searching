import React from 'react'
import PropTypes from 'prop-types'
import { Control } from 'react-redux-form';

export class Page extends React.Component {

  onBtnClick = () => {
    console.log('click')
    this.props.onSubmitClick()
  }

  renderButton = () => {

    return (
      <div>
        <Control.text model="page.singlelinetext" id="page.singlelinetext" />
        <button className="btn" onClick={this.onBtnClick}>Save</button>
      </div>
      /*
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
      return <div>{controls.map(order => <div key={order.id}>{order.name}</div>)}</div>
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
  controls: PropTypes.any,
  onSubmitClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}

