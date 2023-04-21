import React from "react";
import { createRoot } from "react-dom/client"
import Progress from "./components/ProgressBar";

const App = () => {
    return (
        <>
            <Progress.Linear
                apperance="straight"
                backgroundColor={["to right", "black", "darkred"]}
                colors={["to right", "#e66465", "#9198e5"]}
                lineHeight={10}
                value={23}
                roundness={5}
            />
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);