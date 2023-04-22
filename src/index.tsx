import React, { useState } from "react";
import { createRoot } from "react-dom/client"
import Linear from "./components/ProgressBar/Linear";

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
        colors: ["to right", "darkred", "darkgreen"],
        height: 5,
        width: "100%",
        roundness: 15,
    },
    bar: {
        colors: ["to right", "green", "yellow"],
        roundness: 0,
        animated: true,
    }
});

const App = () => {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <Progress.Render value={progress + "%"} />
            <br />
            <DottedProgress.Render value={progress + "%"} />
            <br />
            <button onClick={() => setProgress(progress + 5)}>
                increase
            </button>
            <button onClick={() => setProgress(progress - 5)}>
                decrease
            </button>
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);