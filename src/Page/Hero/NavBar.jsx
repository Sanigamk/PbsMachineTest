import { useState, useEffect } from "react";

export default function NavBar() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [checked]);

  return (
    <>
      <div className="nav-contents" style={{ opacity: checked ? 1 : 0 }}>
        <div className="nav-content">Home</div>
        <div className="nav-content">About</div>
        <div className="nav-content">Services</div>
        <div className="nav-content">Contact</div>
        <div className="nav-content">Blog</div>
      </div>
      <div
        className="nav-bg"
        style={{ transform: `scale(${checked ? 70 : 1})` }}
      ></div>
      <div className="nav">
        <label className="burger" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </>
  );
}
