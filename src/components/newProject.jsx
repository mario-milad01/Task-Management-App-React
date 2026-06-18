import Input from "./Input.jsx";
import {useRef} from 'react';
import Model from "./Model.jsx";
import Button from './Button.jsx';
export default function NewProject({onAddingProject,onCloseAddingForm}) {
    const modelRef=useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    let isValid;
    let content;
    function handleSave(){
        const enteredTitle=titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if(enteredTitle.trim()===''||enteredDescription.trim()==='' || enteredDueDate.trim()===''){
            modelRef.current.open();
            return;
        }
        onAddingProject({
            projectTitle:enteredTitle,
            projectDescription:enteredDescription,
            projectDueDate:enteredDueDate
        });
    }
    
    return (
        <>
        <Model ref={modelRef}>
            <h2 className="uppercase text-red-700 my-4 font-bold ">Error!</h2>
            <p className="text-stone-600 px-3 mx-3">
                Something wents wrong on the input data please check the input data and try again
            </p>
        </Model>
        <div className="w-[35rem] mt-16 h-1/2 mx-auto py-8">
            
            <div className="mx-auto">
                <Input ref={titleRef} label="Title" type="text" isTextArea={false}/>
                <Input ref={descriptionRef} label="description"  isTextArea={true}/>
                <Input ref={dueDateRef} label="Due Date" type="date" isTextArea={false}/>
               
            </div>
            <menu className="flex gap-4 mt-4 items-center justify-end">
                <li><button className=" hover:text-stone-950 rounded-md px-5 py-1 text-stone-600 " onClick={onCloseAddingForm}>Cancel</button></li>
                <li><button className="hover:bg-stone-950 hover:text-stone-50 rounded-md px-5 py-1 text-stone-300 bg-stone-800" onClick={handleSave}>Save</button></li>
            </menu>
        </div>
        </>
        

    );
}