import React from 'react';
import Material from './Material' 
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Materials() {
  const materials = useSelector(state => state.contribution.material);

  return (
      <div className={style}>
      {!Array.isArray(materials) ? (
          <div>{materials}</div>
        ) : (
          materials.map(material => {
            return <Material material={material} />
          })
      )}
    </div>
  )

  // return (  
  //   <div className={style}>
  //     {materials.map(material => {
  //       return <Material material={material} />
  //     })}
  //   </div>
  // )
}

export default Materials;
