interface ButtonProps {
    isOpen: boolean;
    toggle: ()=> void;
}

const Button = ({isOpen,toggle}:ButtonProps)=> <button onClick={toggle}>{isOpen?"open": "closed"}</button>

export default Button;