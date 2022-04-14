import { useState } from "react";

interface ToggleRenderProps {
    render: (isOpen:boolean,toggle:()=>void)=> JSX.Element;
}

const ToggleRender = ({render}:ToggleRenderProps)=>{
    const [isOpen,setIsOpen] = useState(false)
    const isOpenToggler = ()=>{
    setIsOpen((prevState)=>!prevState)
    }
    return render(isOpen,isOpenToggler)
}

export default ToggleRender;