import React from "react";
import BagSummary from "../components/BagSummary";
import BagItemsContainer from "../components/BagItemsContainer";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItemsContainer item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}

export default Bag;
