import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { getDefault, addControl, changeInputAction, removeInputAction, getControls, saveControls, clearDB ,sendSignalAction } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, getDefault, addControl, changeInputAction, removeInputAction, getControls, saveControls, clearDB, sendSignalAction } = this.props
    return (
      <Page
        controltype={page.controltype}
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        signalRConnection={page.signalRConnection}
        sendSignal={page.sendSignal}
        sendSignalAction={sendSignalAction}
        getDefault={getDefault}
        addControl={addControl}
        changeInputAction={changeInputAction}
        removeInputAction={removeInputAction}
        getControls={getControls}
        saveControls={saveControls}
        clearDB={clearDB}
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
    sendSignalAction: () => dispatch(sendSignalAction()),
    getDefault: () => dispatch(getDefault()),
    addControl: () => dispatch(addControl()),
    getControls: () => dispatch(getControls()),
    saveControls: () => dispatch(saveControls()),
    clearDB:() => dispatch(clearDB()),
    changeInputAction: (name, value) => dispatch(changeInputAction(name, value)),
    removeInputAction: (name) => dispatch(removeInputAction(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
