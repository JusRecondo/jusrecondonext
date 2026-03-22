import styles from './Main.module.scss';
import React from 'react';

interface Props {
  children: React.ReactNode;
  customClassName?: string;
}

const Main = ({ children, customClassName }: Props) => {
    return (
      <main 
        className={`${styles.main} ${customClassName ? customClassName : ''}`}
      >
          { children }
      </main>
    )
  }
  
export default Main;
