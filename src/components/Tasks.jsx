import Input from './Input.jsx';
import Model from './Model.jsx';
import { useRef, useState } from 'react';
export default function Tasks({ onAddTask, tasks, onDeleteTask }) {
    const [enteredTask, setEnteredteask] = useState('');
    const taskRef = useRef();
    const modelRef = useRef();
    function handleChange(event) {
        setEnteredteask(event.target.value);
    }
    function handleClick() {
        if (taskRef.current.value.trim() === '') {
            modelRef.current.open();
            return;
        }
        onAddTask(enteredTask);
        setEnteredteask('');
    }
    let projectTasks = { tasks };
    return (
        <>
            <Model ref={modelRef}>
                <h2 className="uppercase text-red-700 my-4 font-bold ">Error!</h2>
                <p className="text-stone-600 px-3 mx-3">
                    Something wents wrong on the input data please check the input data and try again
                </p>
            </Model>
            <section>

                <h2 className="text-2xl text-stone-700 mb-4 font-bold">Tasks</h2>
                <div className='flex justify-between mb-4'>
                    <input ref={taskRef} type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} value={enteredTask} />
                    <button className='bg-stone-50 text-stone-900 rounded-md ' onClick={handleClick}>Add</button>
                </div>
                {tasks.length === 0 && <p className="text-stone-800">This project does not have any tasks yet.</p>}
                {tasks.length > 0 &&
                    <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id} className='flex gap-4 my-2 justify-between border-b p-2 border-stone-300'>
                                    <span className='text-stone-600 mb-2 flex items-center w-full justify-between' >{task.text}</span>
                                    <button className='text-stone-700 hover:text-red-600 px-6' onClick={() => onDeleteTask(task.id)}>Clear</button>
                                </li>
                            );


                        })}
                    </ul>}
            </section>
        </>

    );
}

