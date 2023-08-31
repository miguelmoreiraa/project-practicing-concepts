import "./global.css";

import styles from "./App.module.css";

import toDoLogo from "./assets/rocket.svg";

export function App() {
  return (
    <div className={styles.container}>
      <header className={styles.navBarToDo}>
        <div className={styles.wrapper}>
          <img src={toDoLogo} />

          <div className={styles.toDo}>
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
          </div>
        </div>
      </header>
      <div className={styles.wrapperNewTask}>
        <textarea name="newTask" placeholder="Adicione uma nova tarefa" />
        <button onClick={() => console.log("Clicou")}>Criar +</button>
      </div>
    </div>
  );
}
