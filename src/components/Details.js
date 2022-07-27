import Mdata from "./Mdata.json";

import React from "react";

export default function Details(props) {
  let paramsId = props.match.params.id;

  const xx = Mdata.find((e) => {
    return e.id === Number(paramsId);
  });
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#eee",
        padding: "2rem",
        width: "400px"
      }}
    >
      <h3> it coming from Mdata.json file but in home from api </h3>

      <h3>
        <img src={xx.image} alt="" />
      </h3>
      <h3> {xx.title}</h3>
      <h2>Price - {xx.price}</h2>
      <h2>id - {xx.id}</h2>
      <h2>Stock- {xx.rating.count}</h2>

      <p>Product Name - {xx.description}</p>
    </div>
  );
}
