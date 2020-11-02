import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { onSubmitClick, addControl, changeInputAction } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, onSubmitClick, addControl, changeInputAction } = this.props
    return (
      <Page
        controltype={page.controltype}
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        onSubmitClick={onSubmitClick}
        addControl={addControl}
        changeInputAction={changeInputAction}
      />
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  console.log('mapdispatch')
  return {
    onSubmitClick: () => dispatch(onSubmitClick()),
    addControl: () => dispatch(addControl()),
    changeInputAction: (name, value) => dispatch(changeInputAction(name, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
