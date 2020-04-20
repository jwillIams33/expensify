import React from "react";
import { TotalBalance } from "../data/TotalBalance";

export default function GrandBalance() {
  return (
    <>
      <h2>Grand Balance: {TotalBalance}</h2>
      <h3>Account 1: $4000 </h3>
      <h3>Account 2: $5000</h3>
      <h3>Account 3: $6000</h3>
    </>
  );
}
