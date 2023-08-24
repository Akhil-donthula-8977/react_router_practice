import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//this router,routes all are nothing but components only
import { BrowserRouter, Routes, Route } from "react-router-dom"

function About() {
    return <h2>about</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));

//hi.com/blog/blog-1 -->nested route
root.render(

    <App />


);
