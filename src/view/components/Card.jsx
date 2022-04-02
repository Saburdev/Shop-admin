import React from "react";

export const Card = ({product}) => {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{product.price}</button>
        </div>
      </div>
    </div>
  );
};
