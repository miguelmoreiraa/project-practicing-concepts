import "./global.css";

import styles from "./App.module.css";

import toDoLogo from "./assets/rocket.svg";
import clipboard from "./assets/clipboard.svg";

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
        <div>
          <div className={styles.wrapperNewTask}>
            <textarea name="newTask" placeholder="Adicione uma nova tarefa" />
            <button onClick={() => console.log("Clicou")}>Criar +</button>
          </div>
        </div>
      </header>
      <br />
      <br />
      <div className={styles.teste}>
        <div className={styles.tasksContainer}>
          <div className={styles.taskCreated}>
            Tarefas criadas: <span>0</span>
          </div>
          <div className={styles.taskCompleted}>
            Concluídas: <span>0</span>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <img src={clipboard} />
          </div>
          <div>
            <div>Você ainda não tem tarefas cadastradas</div>
            <div>Crie tarefas e organize seus itens a fazer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
