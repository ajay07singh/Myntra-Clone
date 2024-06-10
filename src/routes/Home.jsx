import React from "react";
import DisplayItems from "../components/DisplayItems";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <DisplayItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
