import useToggle from "./useToggle"

const Button = ()=>{
    const [isOpen,toggleIsOpen] = useToggle(false)
return <button onClick={toggleIsOpen}>{isOpen?"open":"closed"}</button>
}

export default Button;