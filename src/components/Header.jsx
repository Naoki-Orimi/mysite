import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import './header.scss';

const Header = () => {
	// メニューの状態
	const [isopen, setIsOpen] = useState(false);
	const menuList = [
		'Profile',
		'Carrier',
		'Skills',
	];

	// ハンバーガーメニューの追加
	const handleClickMenu = () => {
		console.log('menuボタンが押されました');
		if(isopen) {
			console.log('setIsOpen = false に設定します');
			setIsOpen(false);
		} else {
			console.log('setIsOpen = true に設定します');
			setIsOpen(true);
		}
	};

	return (
		<div>
			<motion.div className='header'>
			<div className='header-contactus'>contact us</div>
			{/* <input className='header-menu' type='button' value='menus' onClick={handleClickMenu} /> */}
			<input className='header-menu' value='menus' type='button' onClick={handleClickMenu} />
			</motion.div>
		</div>
	);
}

export default Header;