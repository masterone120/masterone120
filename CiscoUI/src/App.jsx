import {useState} from "react";
import './App.css'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Home from './Home.jsx'

function App() {

    return (
        <div className='grid-container'>
            <Header />
            <Sidebar />
            <Home />
        </div>
    )
}

export default App