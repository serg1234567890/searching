import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { onSubmitClick, addControl } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, onSubmitClick, addControl } = this.props
    return (
      <Page
        controltype={page.controltype}
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        onSubmitClick={onSubmitClick}
        addControl={addControl}
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
    addControl: () => dispatch(addControl())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
