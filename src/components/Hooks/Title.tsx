import useToggle from "./useToggle"

const Title = ()=>{
    const [isOpen,toggle] = useToggle(false)
    return <h1 onClick={toggle}>{isOpen?"open":"closed"}</h1>
}

export default Title;