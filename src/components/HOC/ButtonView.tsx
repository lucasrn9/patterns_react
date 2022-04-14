import React from "react";

interface ButtonViewProps {
    isOpen: boolean;
    toggle: ()=> void;
}

const ButtonView = ({isOpen,toggle}:ButtonViewProps)=> {
    return <button onClick={toggle}>{isOpen?"Open":"Closed"}</button>
}

export default ButtonView;