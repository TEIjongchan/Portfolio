import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PortalContainer({ children, className }) {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    const element = document.createElement("div");
    element.className = className;
    document.body.appendChild(element);
    setPortalElement(element);

    return () => {
      element.remove();
    };
  }, [className]);

  return portalElement ? createPortal(children, portalElement) : null;
}
