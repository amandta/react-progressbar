import React, { useEffect, useState } from "react";
import { BaseProgressProps } from "../Base";
import "./Linear.style.css";

export interface LinearContainerProps extends BaseProgressProps {
    appearance: "straight" | "dotted";
    dots?: number;
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
    roundness?: {
        topLeft: number;
        bottomLeft: number;
        topRight: number;
        bottomRight: number;
    } | number;
    float?: "left" | "right";
    animations?: ("progress" | "stripes")[];
    pointer?: {
        style: "tooltip" | "string" | "icon";
        source?: string;
        width: number;
        height: number;
    };
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
        const [progress, setProgress] = useState("0%");

        useEffect(() => {
            setProgress(value);
        }, [value]);

        switch (this.container.appearance) {
            case "dotted":
                return (
                    <div
                        className="linear-dotted-progress"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            columnGap: 6,
                            height: this.container.height,
                            width: this.container.width,
                            ...this.utils.roundness(this.container.roundness)
                        }}
                    >
                        {
                            [...Array(this.container.dots)] //Repeat component this.container.dots number of times
                                .map((_, index): React.ReactNode => (
                                    <div
                                        className="linear-dotted-progress-container"
                                        style={{
                                            flex: 1,
                                            overflow: "hidden",
                                            height: "100%",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "fixed",
                                            ...this.utils.roundness(this.container.roundness),
                                            ...this.utils.color(this.container.colors),
                                        }}
                                    >
                                        <div
                                            className={`linear-dotted-progress-bar ${this.bar.animations?.includes("progress") && "animated-bar"}`}
                                            style={{
                                                flex: 1,
                                                height: "100%",
                                                width: `calc((${progress} * ${this.container.dots}) - (100% * ${index}))`, //(progress * bars) - (100% * current)
                                                backgroundRepeat: "no-repeat",
                                                backgroundAttachment: "fixed",
                                                ...this.utils.roundness(this.bar.roundness),
                                                ...this.utils.color(this.bar.colors)
                                            }}
                                        />
                                    </div>
                                ))
                        }
                    </div>
                );
            case "straight":
                return (
                    <div
                        className="linear-progress-container"
                        style={{
                            overflow: "hidden",
                            height: this.container.height,
                            width: this.container.width,
                            ...this.utils.roundness(this.container.roundness),
                            ...this.utils.color(this.container.colors)
                        }}
                    >
                        <div
                            className={`linear-progress-bar ${this.bar.animations?.includes("progress") && "animated-bar"}`}
                            style={{
                                height: "100%",
                                width: progress,
                                float: this.bar.float || "left",
                                ...this.utils.roundness(this.bar.roundness),
                                ...this.utils.color(this.bar.colors)
                            }}
                        />
                    </div>
                );
        };
    };
};