import React, { Component } from 'react';
//import logo from './logo.svg';
import Course from './components/Course';
import './App.css';

class App extends Component {
  render() {
    const items = [
      {
        name: 'ReactJS',
        time: '30h',
        free: true,
        desc: 'ReactJS is very simple'
      },
      {
        name: 'Angular 4x',
        time: '55h',
        free: false
      },
      {
        name: 'NodeJS',
        time: '35h',
        free: true
      }
    ]

    const elmCourses = items.map((item, index) =>
      <Course key={index} name={item.name} time={item.time} free={item.free} >{item.desc}</Course>
      );
    return (
      <div className="row">
        {elmCourses}
        
      </div>
      );
  }
}

export default App;
