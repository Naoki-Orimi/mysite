import React, { useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import './top.scss';

const Top = () => {

  return (
    <div>
      {/* 上部画像部分 */}
      <motion.div className="top-top-img">
        <img src="facet/img/sea-ocean.jpg" alt="Ocean" style={{ width: '100%' }} />
        <div className='top-top-img-text'>Urakata Enginner</div>
      </motion.div>
      <motion.div className="top-contents">
        
      </motion.div>
    </div>
  );
}

export default Top;