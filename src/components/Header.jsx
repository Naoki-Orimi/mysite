import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          initial={{ opacity: 1 }} // 初期状態でボタンは見える
          exit={{ opacity: 0 }} // 要素が消える時の透明度を0にしてフェードアウトさせているが、そもそもボタン押下時にHeaderを非表示にしているため意味ない
        >
          <div className='header-contactus'>Contact Us</div>
          <button
            className='header-menu'
            onClick={handleClickMenu}
          >
            Menu
          </button>
					{/* メニューモーダル */}
					{isopen && (
						<motion.div
							className='header-menu-list'
							initial={{ opacity: 0, y: -100 }} // 初期状態（上からフェードイン）
							animate={{ opacity: 1, y: 0 }}   // フェードインして中央にスライド
							exit={{ opacity: 0, y: 100 }}     // フェードアウトして下にスライド
							transition={{ duration: 0.5 }}    // アニメーションの速さを指定
						>
							{/* <ul style={{ listStyle: 'none', padding: 50 }}> */}
							<ul>
								{menuList.map((menuItem, index) => (
									<li key={index} style={{ marginBottom: '10px', fontSize: '20px' }}>
										{menuItem}
									</li>
								))}
									<li>
										<button 
											onClick={handleClickMenu}
										>
											Back
										</button>
									</li>
							</ul>
						</motion.div>
					)}
        </motion.div>

    </div>
  );
}

export default Header;