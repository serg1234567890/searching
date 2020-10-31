import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { actions } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, saveSubmissions } = this.props
    return (
      <Page
        isFetching={page.isFetching}
        error={page.error}
        saveSubmissions={saveSubmissions}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveSubmissions: () => dispatch(actions),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
