import React from "react";

export default function Toggles({ checkHandler, checked }) {
  return (
    <div className="toggle_wrapper">
      <button
        className={
          checked === "web" ? "btn btn-warning selected" : "btn btn-default"
        }
        data-section="web"
        onClick={e => {
          checkHandler(e);
        }}
      >
        web
      </button>
      <button
        data-section="dataweb"
        className={
          checked === "dataweb" ? "btn btn-warning selected" : "btn btn-default"
        }
        onClick={e => checkHandler(e)}
      >
        data on the web
      </button>
      <button
        data-section="data"
        className={
          checked === "data" ? "btn btn-warning selected" : "btn btn-default"
        }
        onClick={e => checkHandler(e)}
      >
        data
      </button>
    </div>
  );
}
