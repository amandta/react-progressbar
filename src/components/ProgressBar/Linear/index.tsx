import React from "react";
import { BaseProgressProps } from "../Base";

export interface LinearProps extends BaseProgressProps {
    label?: string;
    apperance: "straight" | "dotted";
    roundness?: {
        topLeft: number;
        bottomLeft: number;
        topRight: number;
        bottomRight: number;
    } | number;
    lineHeight: number;
};

const LinearProgress = (props: LinearProps) => {
    const {
        apperance,
        colors,
        backgroundColor,
        value,
        lineHeight: height,
        label,
        roundness
    } = props;

    const handleColor = (colors: string[] | string) => {
        return (
            Array.isArray(colors) ?
                { backgroundImage: `linear-gradient(${colors.join(", ")})` }
                :
                { backgroundColor: colors }
        );
    };

    const handleRoundness = () => {
        return (
            typeof roundness === "object" ?
                {
                    borderTopLeftRadius: roundness.topLeft,
                    borderBottomLeftRadius: roundness.bottomLeft,
                    borderTopRightRadius: roundness.topRight,
                    borderBottomRightRadius: roundness.bottomRight,
                }
                :
                { borderRadius: roundness }
        );
    };

    return (
        <div className="progress-container" style={{ height, ...handleRoundness(), ...handleColor(backgroundColor) }}>
            <div className="progress-bar" style={{ width: `${value}%`, height, ...handleColor(colors) }} />
        </div>
    );
};

export default LinearProgress;