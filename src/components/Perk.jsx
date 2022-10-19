import React from "react";

const Perk = ({ icon, title, desc }) => {
  return (
    <div className="perk | grid">
      <img src={icon} alt="" />
      <h3 className="perk__title | fs-700 text-primary-400">{title}</h3>
      <p className="perk__desc">{desc}</p>
    </div>
  );
};

export default Perk;
