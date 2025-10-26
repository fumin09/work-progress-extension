import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const start = new Date();
      start.setHours(9, 0, 0);
      const end = new Date();
      end.setHours(18, 0, 0);

      const total = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();
      const percent = Math.min(Math.max((elapsed / total) * 100, 0), 100);
      setProgress(percent);
    };

    updateProgress();
    const timer = setInterval(updateProgress, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "200px" }}>
      <div style={{ fontSize: "12px", marginBottom: "4px" }}>
        勤務進捗 {progress.toFixed(1)}%
      </div>
      <div
        style={{
          width: "100%",
          height: "8px",
          background: "#ddd",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4caf50",
            borderRadius: "4px",
            transition: "width 0.5s ease",
          }}
        ></div>
      </div>
    </div>
  );
};
