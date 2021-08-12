import React from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Document() {
  const document = useSelector((state) => state.contribution.document);

  return (
    <div>
      <div className={style.photo__header}>
        <div className={style.photo__logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 1000 1000"
          >
            <path
              id="_1"
              data-name="1"
              fillRule="evenodd"
              d="M704.745,862.994H295.793a90.866,90.866,0,0,1-90.876-90.857V227.016a90.866,90.866,0,0,1,90.876-90.856H568.428c30.409-.48,42.515.649,45.439,0.649V136.16L795.623,317.867v454.27A90.866,90.866,0,0,1,704.745,862.994ZM613.867,181.588v90.851a45.433,45.433,0,0,0,45.439,45.428h90.878ZM750.184,363.294H659.306a90.865,90.865,0,0,1-90.878-90.855s-1.059-36.459-.645-90.851H295.793a45.431,45.431,0,0,0-45.439,45.428V772.137a45.435,45.435,0,0,0,45.439,45.429H704.745a45.435,45.435,0,0,0,45.439-45.429V363.294Zm-113.6,317.989H363.951a22.715,22.715,0,1,1,0-45.429H636.586A22.715,22.715,0,1,1,636.586,681.283Zm0-136.282H363.951a22.712,22.712,0,1,1,0-45.424H636.586A22.712,22.712,0,1,1,636.586,545Z"
            />
          </svg>
        </div>
        <div className={style.photo__title}>Документы</div>
      </div>

      <div>
        {!Array.isArray(document) ? (
          <div>{document}</div>
        ) : (
          document.map((item) => {
            return <img src={item.path_to_file} alt="" />;
          })
        )}
      </div>
    </div>
  );
}

export default Document;
