import React from "react"
import "./Understanding_JSX.css"
import Student_Class from "./ClassComponent"

// Simple JSX Element
let el = <h3>Understanding JSX</h3>
let el2 = <h4>Using JSX Element</h4>

// JSX with atrribute
let el3 = <h4 className="bg">JSX Element with Green Background</h4>

// JSX with title attribute
let el4 = <h4 title="JSX Element with Title Attribute">JSX Element with Title Attribute</h4>

// JSX with href attribute
let el5 = <a href="http://www.geekysid.com" target="_blank">JSX Element with href and target Attribute</a>

//JSX for class component
let el6 = <Student_Class name="Siddhant" />

// JSX with expressions as value
const name = "Siddhant"
let el7 = <p>Hello {name}</p>

// using arrow function as expression in JSX
const show = (name) => {return name;}
let el8 = <b>Name: {show("Siddhant")}</b>

//
const student = {name: "Siddhant", marks: "100"};
let el9 = <b>Name: {student.name}<br />Marks: {student.marks}</b>

// using js expression as attribute in JSX
const link = "http://www.geekysid.com"
let el10 = <a href={link}>My site</a>


export default el10
