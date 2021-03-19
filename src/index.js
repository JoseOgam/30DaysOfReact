import React from 'react';
import ReactDOM from 'react-dom';


const welcome = 'welcome to 30 days of React'
const title = 'Getting started React'
const subtitle = 'react is JavaScript Library'
const author = 'Joseph Otieno'
const date = 'Mar 19, 2021'
const yearBorn = 1994
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>Developer: { author }</p>
      <h6>Age: { age } years</h6>
      <small>Date : {date}</small>
    </div>
  </header>
)

// JSX element, main
const tech = ['JavaScript', 'HTML', 'CSS']
const techFormatted = tech.map((tech)=> <li>{tech}</li>)
const main = (
  <main>
    <div className='main-wrapper'>
      <p>prerequisite to get started with react.js</p>
    <ul>
      {techFormatted}
    </ul>
    </div>
  </main>
)

// JSX element, footer

const footer = (
  <footer>
    <div className='footer-wrapper'>
        <p>Copyright 2020</p>
  </div>
  </footer>
)

const app = (
  <div>
     { header }
     { main }
     {footer}
 </div>
  
  )

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)