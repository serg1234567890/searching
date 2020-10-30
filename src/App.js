import React, { Component } from 'react'
import PageContainer from './page/Container' // изменили импорт

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
      </div>
    )
  }
}

export default App
