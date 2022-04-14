import { useState } from "react"

const useToggle = (initialIsOpenValue:boolean)=>{
    const [isOpen,setIsOpen] = useState(initialIsOpenValue)
    const toggleIsOpen = ()=>{
        setIsOpen(prevState=>!prevState)
    }
    return [isOpen,toggleIsOpen] as const
}

export default useToggle;