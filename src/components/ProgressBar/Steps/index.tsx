import React from "react";
import { BaseProgressProps } from "../Base";

interface StepsProps extends BaseProgressProps {
    steps: {
        unselected: ImageData | string;
        selected: ImageData | string;
    }[];
    outlined?: boolean;
    roundness?: number;
    lineHeight: number;
    size: number;
};

const StepsProgress = (props: StepsProps) => {
    const {
        colors,
        backgroundColor,
        progress,
        lineHeight,
        size,
        steps,
        outlined,
        roundness
    } = props;

    return (
        <>
        </>
    );
};

export default StepsProgress;