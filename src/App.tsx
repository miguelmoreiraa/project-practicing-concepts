import "./global.css";

import styles from "./App.module.css";

import toDoLogo from "./assets/rocket.svg";

function App() {
  return (
    <>
      <header className={styles.navBarToDo}>
        <div className={styles.wrapper}>
          <img src={toDoLogo} />

          <div className={styles.toDo}>
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
