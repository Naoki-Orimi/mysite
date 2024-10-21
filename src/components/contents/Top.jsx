import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './top.scss';

const Top = () => {
  // TODO： useStateとuseEffectを使用して、画像スライドアニメーションを作成したい
  const imagePathList = [
    'facet/img/sea-ocean.jpg',
    'facet/img/fuji-mountain.avif',
    'facet/img/cafe.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [topImgRelativePath, setTopImgRelativePath] = useState(imagePathList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePathList.length - 1 ? 0 : prevIndex + 1
      );
      // console.log("hoge");
    }, 5000); // 5秒ごとに画像を切り替える
    return () => clearInterval(interval);
  }, [imagePathList.length]);

  useEffect(() => {
    setTopImgRelativePath(imagePathList[currentImageIndex]);
  }, [currentImageIndex, imagePathList]);

  return (
    <div>
      {/* 上部画像部分 */}
      <motion.div className="top-img">
        <motion.img
          key={topImgRelativePath} // keyを追加してアニメーションを再適用
          src={topImgRelativePath}
          alt="superBanner"
          initial={{ opacity: 0 }} // フェードアウトの初期状態
          animate={{ opacity: 1 }} // フェードイン
          exit={{ opacity: 0 }} // フェードアウト
          transition={{ duration: 3 }} // アニメーションの速さを設定
        />
        <motion.p
          className='top-img-text'
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -30 }}   // フェードインして右からスライド
          transition={{ duration: 2 }}   // アニメーションの速さを指定
        >
          Urakata Enginner
        </motion.p>
      </motion.div>
      <div className="top-contents px-10 py-5">
        <div>show any contents. comming soon</div>
      </div>
    </div>
  );
}

export default Top;