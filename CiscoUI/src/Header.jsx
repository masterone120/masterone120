import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJistify} from "react-icons/bs";

function Header() {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJistify className='icon' />
            </div>
            <div className='header-left'>
                <BsSearch className='icon' />
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div>

        </header>
    )
}

export default Header