import React from "react";
import { BaseProgressProps } from "../Base";

export interface LinearContainerProps extends BaseProgressProps {
    appearance: "straight" | "dotted";
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
};


export default class Linear {
    private container: LinearContainerProps;
    private bar: LinearBarProps;

    private utils = {
        color: (colors: string[] | string) => {
            return (
                Array.isArray(colors) ?
                    { backgroundImage: `linear-gradient(${colors.join(", ")})` }
                    :
                    { backgroundColor: colors }
            );
        },
        roundness: (roundness?: { topLeft: number; bottomLeft: number; topRight: number; bottomRight: number; } | number) => {
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
        }
    };

    constructor({ container, bar }: { container: LinearContainerProps, bar: LinearBarProps }) {
        this.container = container;
        this.bar = bar;
    };

    Render = ({ value }: { value: string }): JSX.Element => {
        return (
            <div
                className="progress-container"
                style={{
                    overflow: "hidden",
                    height: this.container.height,
                    width: this.container.width,
                    ...this.utils.roundness(this.container.roundness),
                    ...this.utils.color(this.container.colors)
                }}
            >
                <div
                    className="progress-container"
                    style={{
                        height: "100%",
                        width: value,
                        ...this.utils.roundness(this.bar.roundness),
                        ...this.utils.color(this.bar.colors)
                    }}
                />
            </div>
        )
    };
};