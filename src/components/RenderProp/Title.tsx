
interface TitleProps {
    isOpen: boolean;
    toggle: ()=> void;
}

const Title = ({isOpen,toggle}:TitleProps)=> <h1 onClick={toggle}>{isOpen?"open":"closed"}</h1>


export default Title;