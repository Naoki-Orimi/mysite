import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import './top.scss';

const Top = () => {
  const topImgRelativePath = "facet/img/sea-ocean.jpg";
  // TODO： useStateとuseEffectを使用して、画像スライドアニメーションを作成したい
  const imagePathList = [
    'facet/img/sea-ocean.jpg',
    'facet/img/fuji-mountain.avif',
    'facet/img/cafe.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePathList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3秒ごとに画像を切り替える
    return () => clearInterval(interval);
  }, [imagePathList.length]);

  return (
    <div>
      {/* 上部画像部分 */}
      <motion.div className="top-img">
        <img src={topImgRelativePath} alt="ocean" />
        <motion.p
          className='top-img-text'
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -30 }}   // フェードインして右からスライド
          transition={{ duration: 2 }}   // アニメーションの速さを指定
        >
          Urakata Enginner
        </motion.p>
      </motion.div>
      <motion.div className="top-contents">
        <div>show any contents</div>
      </motion.div>
    </div>
  );
}

export default Top;