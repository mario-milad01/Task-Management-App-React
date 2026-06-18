import {forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";
import Button from './Button.jsx';
export default function Model({children,ref}) {
    const dialogRef=useRef();
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialogRef.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialogRef} className=" backdrop:bg-stone-900/90 mx-auto  border-2 border-red-800 text-center">
            {children}
            <form action="" method="dialog">
                <Button>Close</Button>
            </form>
        </dialog>
    ,document.getElementById('modal-root'));
};

