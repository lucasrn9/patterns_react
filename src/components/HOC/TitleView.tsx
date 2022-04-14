import React from "react";

interface TitleViewProps {
    isOpen: boolean;
    toggle: ()=> void;
}

const TitleView = ({isOpen,toggle}:TitleViewProps)=> <h1 onClick={toggle}>{isOpen?"open":"closed"}</h1>

export default TitleView;