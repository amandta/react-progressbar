import React from "react";
import { createRoot } from "react-dom/client"
import Linear from "./components/ProgressBar/Linear";

const App = () => {
    const Progress = new Linear({
        container: {
            appearance: "straight",
            colors: "black",
            height: 15,
            width: "100%",
            roundness: 15
        },
        bar: {
            colors: ["to right", "green", "yellow"],
            roundness: 15
        }
    });

    return (
        <>
            <Progress.Render value={"15%"} />
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);