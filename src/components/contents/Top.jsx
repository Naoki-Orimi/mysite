import React, { useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import './top.scss';

const Top = () => {
  const topImgRelativePath = "facet/img/sea-ocean.jpg";

  return (
    <div>
      {/* 上部画像部分 */}
      <motion.div className="top-img">
        <img src={topImgRelativePath} alt="ocean" />
        <p className='top-img-text'>Urakata Enginner</p>
      </motion.div>
      <motion.div className="top-contents">
        <div>コンテンツを表示します。</div>
      </motion.div>
    </div>
  );
}

export default Top;