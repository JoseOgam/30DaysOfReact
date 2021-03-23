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

const Header = () => {
  return (
    <div>
      <header>
       <div className="Header-wrapper">
      <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>Developer: { author }</p>
      <h6>Age: { age } years</h6>
      <small>Date : {date}</small>
    </div>
  </header> 
   </div >
  )
}

// JSX element, main
const tech = ['JavaScript', 'HTML', 'CSS']
const techFormatted = tech.map((tech)=> <li key={tech}>{tech}</li>)
const Main = () => {
  return (
    <div>
      <main>
    <div className='main-wrapper'>
      <p>prerequisite to get started with react.js</p>
    <ul>
      {techFormatted}
    </ul>
    </div>
  </main>
    </div>
  )
}

// JSX element, footer

const Footer = () => {
  return (
    <div>
      <footer>
    <div className='footer-wrapper'>
        <p>Copyright 2020</p>
  </div>
  </footer>
    </div>
  )
}

const App = () => {
  return (
    <div>
     <  Header />
     <Main />
     <Footer/>
 </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App/>, rootElement)