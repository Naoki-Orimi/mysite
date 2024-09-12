import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { ToggleButton } from '@mui/material';
import './header.scss';

const Header = () => {
	// メニューの状態
	const [isopen, setIsOpen] = useState(false);
	const menuList = [
		'Profile',
		'Carrier',
		'Skills',
	];

	return (
		<div>
			<motion.div className='header'>
			<div className='header-contactus'>contact us</div>
			<div className='header-menu'>menus</div>		
			</motion.div>
		</div>
	);
}

export default Header;