import React from "react";

export default function SubMenu({ subcategories }) {
  return (
    <div className="submenu">
      <ul>
        {subcategories.map((subcategory, index) => (
          <li key={index}>{subcategory}</li>
        ))}
      </ul>
    </div>
  );
}
