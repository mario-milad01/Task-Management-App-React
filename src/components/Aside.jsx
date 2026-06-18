import { useState } from 'react';
import Button from './Button.jsx';
export default function SideBar({ onStartAddProject, projects, onSelect ,selectedId}) {

    return (
        <aside className="bg-stone-900 rounded-r-xl py-16 px-8 text-center w-1/3 h-full text-stone-50 md:w-72">
            <h2 className="text-white font-bold md:text-xl">YOUR PROJECTS</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="list-none my-14 ">
                {projects.map((project) => {
                    let cssClasses=" p-2  w-full text-left px-2 rounded-md my-1  hover:text-stone-200 hover:bg-stone-950";
                    if(project.id==={selectedId}){
                        cssClasses+=" bg-stone-800 text-stone-200"
                    }else{
                        cssClasses+=' text-stone-400 '
                    }
                    return (
                        <li key={project.id}  >
                            <button className={cssClasses}
                             onClick={()=>onSelect(project.id)}
                            >
                                {project.projectTitle}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>

    );
}