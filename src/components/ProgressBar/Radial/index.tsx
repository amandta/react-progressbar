import React from "react";
import { BaseProgressProps } from "../Base";

interface RadialProps extends BaseProgressProps {
    icon?: ImageData;
    label?: string;
    sublabel?: string;
    apperance: "linear" | "circular" | "rectangle" | "filled";
    size?: number;
};

const RadialProgress = (props: RadialProps) => {
    const { 
        apperance, 
        colors, 
        backgroundColor, 
        value, 
        icon, 
        label, 
        sublabel, 
        size 
    } = props;

    return (
        <>
        </>
    );
};

export default RadialProgress;