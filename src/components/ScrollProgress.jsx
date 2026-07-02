import { useEffect, useState } from "react";
import "../styles/components.css";

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const scroll =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setWidth(scroll * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="progress-bar" style={{ width: `${width}%` }}></div>;
}

export default ScrollProgress;
