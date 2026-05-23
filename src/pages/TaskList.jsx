import { useEffect, useState } from 'react';

function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ошибка сети');
                }
                return response.json();
            })
            .then((data) => {
                setTasks(data);
                setloading(false);
            })
            .catch(() => {
                setError('Ошибка загрузки данных');
                setloading(false);
            });
    }, []);

    if (loading) {
        return <p>Загрузка...........</p>;
    }

   if (error) {
        return <p>{error}</p>;
    } 
    
    return (
        <ul>
            {tasks.map((task) => (
                <li key={TaskList.id}>
                    {task.title} - {task.completed ? '✔' : '✘'}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;