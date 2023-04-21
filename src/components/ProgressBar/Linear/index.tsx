import React from "react";
import { BaseProgressProps } from "../Base";

export interface LinearContainerProps extends BaseProgressProps {
    apperance: "straight" | "dotted";
    roundness?: {
        topLeft: number;
        bottomLeft: number;
        topRight: number;
        bottomRight: number;
    } | number;
    height: number | string;
    width: number | string;
};

export interface LinearBarProps extends BaseProgressProps {
    label?: string;
    roundness?: {
        topLeft: number;
        bottomLeft: number;
        topRight: number;
        bottomRight: number;
    } | number;
    value: string;
};

const handleColor = (colors: string[] | string) => {
    return (
        Array.isArray(colors) ?
            { backgroundImage: `linear-gradient(${colors.join(", ")})` }
            :
            { backgroundColor: colors }
    );
};

const handleRoundness = (roundness?: { topLeft: number; bottomLeft: number; topRight: number; bottomRight: number; } | number) => {
    if (!roundness) { return {} };

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

const Container = (props: LinearContainerProps & { children: React.ReactNode }) => {
    const {
        apperance,
        colors,
        height,
        width,
        roundness,
        children
    } = props;

    return (
        <div className="progress-container" style={{ height, width, ...handleRoundness(roundness), ...handleColor(colors) }}>
            {children}
        </div>
    );
};

const Bar = (props: LinearBarProps) => {
    const {
        colors,
        value: width,
        roundness,
        label
    } = props;

    return (
        <div className="progress-container" style={{ height: "100%", width, ...handleRoundness(roundness), ...handleColor(colors) }} />
    )
};

const Linear = {
    Container,
    Bar
};

export default Linear;