
import React from 'react';
import styles from './Header.css';

const leftImg = require('../images/back.png');
const rightImg = require('../images/question.png');
/*
  leftObj = {
    style = {},
    dom,
    func= () => {},
  },
  centerObj: {
    style = {},
    text,
    dom,
    func= () => {},
  },
  rightObj: {
    style = {},
    dom,
    func= () => {},
  },
*/
const Header = (props) => {
  const {
    style = {},
    leftObj = {},
    centerObj = {},
    rightObj = {},
  } = props;

  return (
    <header className={styles.headerBox} style={style}>
      <div className={styles.header}>
        <div
          className={styles.headerLeft}
          style={leftObj.style}
          onClick={leftObj.func}
        >
          {leftObj.dom || <img src={leftImg} alt="" />}
        </div>

        <div
          className={styles.headerCenter}
          style={centerObj.style}
          onClick={centerObj.func}
        >
          {centerObj.text || centerObj.dom}
        </div>

        <div
          className={styles.headerRight}
          style={rightObj.style}
          onClick={rightObj.func}
        >
          {rightObj.dom || <img src={rightImg} alt="" />}
        </div>
      </div>
    </header>
  );
};
export default Header;
