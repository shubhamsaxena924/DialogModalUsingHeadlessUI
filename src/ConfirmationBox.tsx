import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import {ExclamationIcon, XIcon} from "@heroicons/react/outline";
import { Fragment } from "react";

interface Props {
    open: boolean;
    title: string;
    desc?: string;
    okText?: string;
    cancelText?: string;
    onClose: (open: false) => void;
}

const ConfirmationBox: React.FC<Props> = (props) => {
  return (
      <>
    <Transition.Root show={props.open} as={Fragment}>
        <Dialog open={props.open} onClose={props.onClose}>
        <Transition.Child 
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-70"
            entered="opacity-70"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-70"
            leaveTo="opacity-0"
        >
            <Dialog.Overlay className="fixed inset-0 z-10 transform bg-black"></Dialog.Overlay>
        </Transition.Child>
        
        <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            entered="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed z-20 flex flex-col items-center self-center p-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md duration top-1/2 left-1/2 w-96">
                <ExclamationIcon className="text-red-500 w-28" strokeWidth="2%" />
                <button>
                    <XIcon className="fixed w-4 text-gray-600 hover:text-black top-4 right-4" onClick={()=> props.onClose(false)}/>
                </button>
                <h3 className="m-4 text-3xl text-gray-500">{props.title}</h3>
                {props.desc && <p className="m-4 text-sm font-normal text-center text-gray-400">{props.desc}</p>}
                <div className="flex flex-row m-4 space-x-3">
                    <button className="inline-block px-5 py-2 text-white duration-300 bg-gray-300 rounded-sm w-28 hover:bg-gray-400" onClick={()=> props.onClose(false)}>{props.cancelText}</button>
                    <button className="inline-block px-5 py-2 text-white duration-300 bg-red-500 rounded-sm w-28 hover:bg-red-600" >{props.okText}</button>
                </div>
            </div>
            
        </Transition.Child>
        </Dialog>
    </Transition.Root> 
    </>   
  );
};

ConfirmationBox.defaultProps = {
    title: "Are you sure?",
    okText: "OK",
    cancelText: "Cancel",
};

export default React.memo(ConfirmationBox);