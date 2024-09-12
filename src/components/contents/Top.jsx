import React from 'react';

const Top = () => {
    const title = 'これはTOPコンポーネント';

  return (
    <div>
        <div className="page-top-img">
          <img src="facet/img/sea-ocean.jpg" alt="" />
        </div>
        <div className="page-center">
          <img src="facet/img/fuji-mountain.avif" alt="" />
        </div>
    </div>
  );
}

export default Top;