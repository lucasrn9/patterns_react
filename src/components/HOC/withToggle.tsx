import React, { useState } from "react";

interface ComponentProps {
    isOpen: boolean;
    toggle: ()=> void;
}

const withToggle = (Component:React.ComponentType<ComponentProps>)=> {
    return (
        () => {
        const [isOpen,setIsOpen] = useState(false)
        const toggleIsOpen = ()=> {
            setIsOpen((prevState)=>!prevState)
        }
            return <Component isOpen={isOpen} toggle={toggleIsOpen} />
        }
    )
}

export default withToggle;