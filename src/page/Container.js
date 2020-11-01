import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { onSubmitClick } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, onSubmitClick } = this.props
    return (
      <Page
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        onSubmitClick={onSubmitClick}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
