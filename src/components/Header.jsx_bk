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
		<div>
			<motion.div
				className='header'
				initial={{ opacity: 1 }}
			>
				<div className='header-contactus'>Contact Us</div>
				<button
					className='header-menu'
					onClick={handleClickMenu}
				>
					Menu
				</button>
				{/* メニューモーダル AnimatePresenceで、motion.divのexitアニメーションを適用させる*/}
				<AnimatePresence>
					{isopen && (
						<motion.div
							className='header-menu-contents'
							initial={{ opacity: 0, y: 0 }}   // 初期状態（ふわっと現れるように）
							animate={{ opacity: 1, y: 0 }}   // フェードインして中央にスライド
							transition={{ duration: 0.5 }}   // アニメーションの速さを指定
							exit={{ opacity: 0, y: 100 }}    // Animateフェードアウトして下にスライド
						>
							<ul>
								{menuList.map((menuItem, index) => (
									<li key={index} style={{ marginBottom: '10px', fontSize: '20px' }}>
										{menuItem}
									</li>
								))}
								<li>
									<motion.button
										className='header-menu-contents-back'
										onClick={handleClickMenu}
									>
										Back
									</motion.button>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default Header;