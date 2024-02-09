'use client'
import { useState } from "react";

const ApiExecContainer: React.FC<{
    onRun: () => any;
    children?: React.ReactNode;
  }> = ({ children, onRun }) => {
    const [result, setResult] = useState<string>();
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <div style={{ flexShrink: 0, padding: 8 }}>
          <button
            type="button"
            onClick={() => {
              setResult(onRun?.());
            }}
          >
            Run
          </button>
          <span style={{ marginLeft: 16 }}>
            {result && (
              <>
                <span style={{ color: "#aaa" }}>result: </span> {result}
              </>
            )}
          </span>
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    );
  };
  export default ApiExecContainer