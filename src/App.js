import React, { Component } from 'react'
import PageContainer from './page/Container' // изменили импорт
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
