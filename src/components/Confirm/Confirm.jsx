import React, { createElement, useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import uuid from "react-uuid";

const id = uuid();
export const mountRootId = `confirm-box-${id}`;


export const Portal = ({ children }) => {
  const mount = document.getElementById(mountRootId);
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export const confirm = async (message, confirmLabel, cancelLabel) => {
  const mount = await document.getElementById(mountRootId);
  if (mount) {
    const rootMount = await document.createElement("div");
    rootMount.setAttribute("id", mountRootId);
    document.body.appendChild(rootMount);
  }

  return new Promise((resolve) => {
    const confirmBoxEl = createElement(Confirm, {
      message,
      confirmLabel,
      cancelLabel,
    });

    const PortalEl = createElement(Portal, null, confirmBoxEl);
    const rootElement = document.getElementById(mountRootId);
    console.log(rootElement);
    const root = createRoot(rootElement);
    console.log(rootElement);
    root.render(rootElement);


    // ReactDOM.render(PortalEl, );
  }) 
};

function Confirm({ message, resolver, confirmLabel, cancelLabel, classNames }) {
  const [isOpen, setIsOpen] = useState(true);

  const onConfirmPopup = () => {
    setIsOpen(false);
    resolver(true);
  };

  const onCancelPopup = () => {
    setIsOpen(false);
    resolver(false);
  };

  const onOverlay = () => {
    setIsOpen(false);
    resolver(false);
  };

  const render = () => {
    return (
      <div className={"confirm-box-content" + classNames}>
        <h6>{message}</h6>
        <div className="confirm-box-actions">
          <button onClick={onCancelPopup} className={classNames}>
            {confirmLabel}
          </button>
          <button onClick={onConfirmPopup} className={classNames}>
            {cancelLabel}
          </button>
        </div>
      </div>
    );
  };

  return isOpen ? (
    <div className="confirm-box">
      {render()}
      <div className="confirm-box-overlay" onClick={onOverlay} />
    </div>
  ) : null;
}

export default Confirm;
