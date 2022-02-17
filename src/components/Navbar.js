import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../asset/image/logo.png'

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			
			<Link to="/" className="nav-logo">
				<img  src={logo}/>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Loads
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Dispatches
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Address Book
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Documents
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
