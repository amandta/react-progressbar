import React from "react";
import { BaseProgressProps } from "../Base";

interface ShapeProps extends BaseProgressProps {
    icon?: ImageData; // img or svg
    width: number;
    height: number;
};

const ShapeProgress = (props: ShapeProps) => {
    const { 
        colors, 
        backgroundColor, 
        progress, 
        icon, 
        width, 
        height 
    } = props;

    return (
        <>
        </>
    );
};

export default ShapeProgress;