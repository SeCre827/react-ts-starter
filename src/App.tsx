import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {

  const [number, setNumber] = useState<number | string>();

  const changeNumber = () => {
    setNumber('10');
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
