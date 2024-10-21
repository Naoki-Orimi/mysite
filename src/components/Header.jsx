import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
		if (!isopen) {
			console.log('メニュー開く');
			setIsOpen(true);
		} else {
			console.log('メニュー閉じる');
			setIsOpen(false);
		}
	};

	return (
	<nav>
		<div className='header flex justify-between items-center px-10 py-5' initial={{ opacity: 1 }}>
			<div className='
				sm:text-[10px] md:text-[30px]
				transform transition-transform hover:scale-110 duration-500
			'>
				Contact Us
			</div>
			<button 
				className='
					sm:text-[10px] md:text-[30px]
					transform transition-transform hover:scale-110 duration-500'
				onClick={handleClickMenu}
			>
				{isopen ? 'Close' : 'Menu'}
			</button>
		</div>
	
		{/* AnimatePresenceだとなぜかTailwindCSSが適応されない */}
		<AnimatePresence>
			{isopen && (
				<motion.div
					className='header-menu-contents sm:text-[10px] md:text-[30px]'
					initial={{ opacity: 0, y: 0 }}   // 初期状態（ふわっと現れるように）
					animate={{ opacity: 1, y: 0 }}   // フェードインして中央にスライド
					transition={{ duration: 0.5 }}   // アニメーションの速さを指定
					exit={{ opacity: 0, x: 100 }}    // Animateフェードアウトして下にスライド
				>
					<ul>
						{menuList.map((menuItem, index) => (
							<li key={index} className='mb-4 text-[20px]'>
								{menuItem}
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	</nav>
	);
}

export default Header;