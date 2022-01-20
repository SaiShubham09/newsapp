import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            <Route path="*" element={<main style={{ padding: "1rem" }}>
                  <p>404!</p>
                </main>
              }
            />
        </Routes>
      </BrowserRouter>
      </div >
    )
  }
}
