import Button from './Button.jsx';
import Tasks from './Tasks.jsx';
export default function SelectedProject({ project, onDelete, onAdd, tasks, onDeleteTask }) {
    const formattedDate = new Date(project.projectDueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    let selectedTasks = tasks.filter((task) => task.projectId === project.id);
    return (
        <div className='w-[35rem] mt-12 mx-12'>
            <header className='pb-4 mb-4 border-b-2 border-stone-300'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.projectTitle}</h1>
                    <Button onClick={onDelete}>Delete</Button>
                </div>
                <p className='mb-4 text-stone-400'>DATE : {formattedDate}</p>
                <p className='text-stone-600 whitespace-pre-wrap'>DESCRIPTION: {project.projectDescription}</p>
            </header>
            <div>
                <Tasks onAddTask={onAdd} tasks={selectedTasks} onDeleteTask={onDeleteTask} />
            </div>
        </div>
    );
}