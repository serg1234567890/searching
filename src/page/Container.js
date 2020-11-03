import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { onSubmitClick, addControl, changeInputAction, removeInputAction } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, onSubmitClick, addControl, changeInputAction, removeInputAction } = this.props
    return (
      <Page
        controltype={page.controltype}
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        lastindex={page.lastindex}
        onSubmitClick={onSubmitClick}
        addControl={addControl}
        changeInputAction={changeInputAction}
        removeInputAction={removeInputAction}
      />
    )
  }
}

const mapStateToProps = store => {
  //console.log(store)
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  //console.log('mapdispatch')
  return {
    onSubmitClick: () => dispatch(onSubmitClick()),
    addControl: () => dispatch(addControl()),
    changeInputAction: (name, value) => dispatch(changeInputAction(name, value)),
    removeInputAction: (name) => dispatch(removeInputAction(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
