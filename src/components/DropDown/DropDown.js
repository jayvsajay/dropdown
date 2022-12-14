import React, { useEffect, useRef, useState } from "react";
import "../css/drop.css";
function DropDown({listvalues}) {
  const [state, setState] = useState("");
  const [isOpen, setOpen] = useState(false);
  const dropdownref = useRef();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownref.current.contains(event.target)) {
        setOpen(isOpen ? false : true);
      } else {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = (e) => {
    setState(e.currentTarget.textContent);
  };
  return (
    <div className="dropdown"  ref={dropdownref}>
     <button className="Btn">
     {state && !isOpen && <p className="selected">{state}</p>}
        {!state && !isOpen && <p className="defaultvalue">Select Item</p>}
        {isOpen && <p className="activevalue">Active document</p>}
                <i className={isOpen ? "fa fa-angle-up icons" : "fa fa-angle-down icons"}></i> 
      </button>
      {isOpen && (
        <div className="dropdown-content"  >
          {listvalues.map((list) => (
            <div
              className={`dropdownoption ${state === list && "selectedvalue"}`}
              onClick={handleClick}
              key={list}
            >
              {list}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;