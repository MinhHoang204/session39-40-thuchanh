import {useState} from 'react'
import TaskList from './components/TaskList';
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
export interface State {
  tasks: Task[];
}
export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    if (taskName.trim() === '') {
      setError('Tên công việc không được phép để trống.');
      return;
    }

    if (tasks.some(task => task.name === taskName)) {
      setError('Tên công việc không được phép trùng.');
      return;
    }

    const newTask: TaskType = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setError('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (id: number) => {
    const newName = prompt('Nhập tên công việc mới:');
    if (newName && newName.trim() !== '') {
      setTasks(tasks.map(task => (task.id === id ? { ...task, name: newName } : task)));
    }
  };

  const deleteTask = (id: number) => {
    if (window.confirm('Bạn chắc chắn muốn xóa công việc này?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };
  return (
    <div className="app">
      <h1>Quản lý công việc</h1>
      <div className="input-task">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nhập tên công việc"
        />
        <button onClick={addTask}>Thêm</button>
      </div>
      {error && <p className="error">{error}</p>}
      <TaskList tasks={tasks} onToggle={toggleTask} onEdit={editTask} onDelete={deleteTask}></TaskList>
    </div>  
  )
}
