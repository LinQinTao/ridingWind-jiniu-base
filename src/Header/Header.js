
import React from 'react';
import styles from './Header.css';

const leftImg = require('../images/back.png');
const rightImg = require('../images/question.png');
/*
  leftObj = {
    style: {},
    dom,
    hide,
    clickFunc: () => {},
  },
  centerObj: {
    style: {},
    title,
    dom,
    hide,
    clickFunc: () => {},
  },
  rightObj: {
    style: {},
    dom,
    hide,
    clickFunc: () => {},
  },
*/
const Header = (props) => {
  const {
    style = {},
    className,
    leftObj = {},
    centerObj = {},
    rightObj = {},
  } = props;
  console.log(className, 'className');
  return (
    <header className={`${styles.headerBox} ${className}`} style={style}>
      <div className={styles.header}>
        {
          leftObj.hide ? null : (
            <div
              className={`${styles.headerLeft} ${leftObj.className}`}
              style={leftObj.style}
              onClick={leftObj.clickFunc}
            >
              {leftObj.dom || <img src={leftImg} alt="" />}
            </div>
          )
        }
        
        {
          centerObj.hide ? null : (
            <div
              className={`${styles.headerCenter} ${centerObj.className}`}
              style={centerObj.style}
              onClick={centerObj.clickFunc}
            >
              {centerObj.title || centerObj.dom}
            </div>
          )
        }

        {
          rightObj.hide ? null : (
            <div
              className={`${styles.headerRight} ${rightObj.className}`}
              style={rightObj.style}
              onClick={rightObj.clickFunc}
            >
              {rightObj.dom || <img src={rightImg} alt="" />}
            </div>
          )
        }
        
      </div>
    </header>
  );
};
export default Header;
