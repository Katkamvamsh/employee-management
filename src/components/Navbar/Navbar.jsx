import { useState } from 'react'
import './Navbar.css'

function Navbar({ darkMode, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="site-header">
            <nav className="nav container" aria-label="Main navigation">
                <a className="brand" href="#home" onClick={closeMenu}>YN<span>.</span></a>
                <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                    <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle dark mode">
                        {darkMode ? 'Light' : 'Dark'} mode
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
