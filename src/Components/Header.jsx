import React from 'react'
import { Sun } from 'react-feather'
import { Moon } from 'react-feather'
function Header({showAboutSection, toggleTheme, theme}) {
    return (
        <Header>
            <div className='logo'>
                <h2>Quote</h2>
            </div>

            <div className='header-right-side'>
                <div onClick={toggleTheme} className='dark-mode-toggle'>
                    {theme === 'dark' ? <Sun /> : <Moon />}
                </div>
                <span onClick={showAboutSection} className='about'>About Words</span>
            </div>

        </Header>
    )
}
export default Header