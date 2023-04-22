import React from "react";
import { createRoot } from "react-dom/client"
import Linear from "./components/ProgressBar/Linear";

const App = () => {
    const Progress = new Linear({
        container: {
            appearance: "straight",
            colors: "gray",
            height: 5,
            width: "100%",
            roundness: 15,
        },
        bar: {
            colors: ["to right", "green", "yellow"],
            roundness: 0,
            animated: false,
        }
    });

    const DottedProgress = new Linear({
        container: {
            appearance: "dotted",
            dots: 3,
            colors: "gray",
            height: 5,
            width: "100%",
            roundness: 15,
        },
        bar: {
            colors: ["to right", "green", "yellow"],
            roundness: 0,
            animated: false,
        }
    });

    return (
        <>
            <Progress.Render value={"15%"} />
            <br />
            <DottedProgress.Render value={"100%"} />
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);