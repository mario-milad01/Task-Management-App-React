import SideBar from './components/Aside.jsx';
import NewProject from './components/newProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';
import { useState } from 'react';
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  // const [selectedProject,setSelectedProject]=useState();

  function handleAddingNewProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  function handleCloseAddingProjects() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      };
    });
  }

  function handleShowProjectDetails(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleAddTask(text) {
  
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !==taskId )
      }
    })
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject onDelete={handleDeleteProject} project={selectedProject} onAdd={handleAddTask} tasks={projectsState.tasks} onDeleteTask={handleDeleteTask} />;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddingNewProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddingProject={handleAddProject} onCloseAddingForm={handleCloseAddingProjects} />;
  }
  return (
    <main className='h-screen flex'>
      <SideBar onStartAddProject={handleAddingNewProject} projects={projectsState.projects} onSelect={handleShowProjectDetails} />
      {content}

    </main>
  );
}

export default App;
