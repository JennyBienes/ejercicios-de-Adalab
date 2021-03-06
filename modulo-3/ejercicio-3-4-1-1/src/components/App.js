import '../stylesheets/main.scss';

const App = () => {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map(task => {
    return <li key={tasks}>
      <strong className="tasks__name">{task}</strong>
      </li>
   });
  };
  
  return (
    <div className="App">
      <h1>"Mi lista de tareas"</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
