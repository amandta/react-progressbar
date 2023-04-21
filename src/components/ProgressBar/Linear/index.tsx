import React from "react";
import { BaseProgressProps } from "../Base";

export interface LinearProps extends BaseProgressProps {
    label?: string;
    apperance: "straight" | "dotted";
    roundness?: number;
    lineHeight: number;
};

const LinearProgress = (props: LinearProps) => {
    const {
        apperance,
        colors,
        backgroundColor,
        lineHeight,
        label,
        roundness
    } = props;

    return (
        <></>
    );
};

export default LinearProgress;