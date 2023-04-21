import React from "react";
import { createRoot } from "react-dom/client"
import Linear from "./components/ProgressBar/Linear";

const App = () => {
    return (
        <>
            <Linear.Container
                apperance="straight"
                colors={["to right", "black", "darkred"]}
                height={15}
                width={"100%"}
                roundness={15}
            >
                <Linear.Bar
                    value={"50%"}
                    colors={["to right", "blue", "red"]}
                    roundness={{
                        bottomLeft: 15,
                        topLeft: 15,
                        bottomRight: 0,
                        topRight: 0
                    }}
                />
            </Linear.Container>
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);