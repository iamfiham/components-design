import React, { useLayoutEffect, useRef, useState } from "react";
import firebase from "./assets/firebase.svg";
import kubernetes from "./assets/kubernetes.svg";
import notion from "./assets/notion.svg";
import webpack from "./assets/webpack.svg";
import visualstudio from "./assets/visualstudio.svg";
import safari from "./assets/safari.svg";

function IconsCollection() {
  const container = useRef(null);
  const [icons, setIcons] = useState([
    firebase,
    kubernetes,
    notion,
    webpack,
    visualstudio,
    safari,
  ]);

  const positionGenerator = () => {
    const x = Math.floor(Math.random() * 64 - 32);
    const y = Math.floor(Math.random() * 64 - 32);
    return { x, y };
  };

  useLayoutEffect(() => {
    if (container.current) {
      Array.from(container.current.children).forEach((icon) => {
        const { x, y } = positionGenerator();
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 bg-white p-8" ref={container}>
      {icons.map((icon) => (
        <img src={icon} alt="" className="aspect-square w-16 drop-shadow-md" />
      ))}
    </div>
  );
}

export default IconsCollection;
