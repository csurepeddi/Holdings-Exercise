import "./styles.css";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { holdings } from "./data/holdings";
import HoldingTable from "./components/HoldingTable";

export default function App() {
  const [prices, setPrices] = useState([]);
  const [selected, setSelected] = useState("View All");

  useEffect(() => {
    let pricesList = holdings.map((holding) => {
      const { id, price, yield: yield1 } = holding;
      return {
        id,
        price,
        yield: yield1
      };
    });

    setPrices(pricesList);
  }, []);

  const filterHoldings = () => {};

  const sortHoldings = (label) => {
    const sortedPrices = prices.sort((a, b) => a.price - b.price);
    setPrices(sortedPrices);
    setSelectedButton(label);
  };

  const setSelectedButton = (label) => {
    setSelected(label);
  };

  return (
    <div className="App">
      <div className="Nav-bar">
        <Button
          isSelected={"View All" === selected}
          label="View All"
          onClick={(label) => setSelectedButton(label)}
        />
        <Button
          isSelected={"Sort" === selected}
          label="Sort"
          onClick={sortHoldings}
        />
        <Button
          isSelected={"Filter" === selected}
          label="Filter"
          onClick={filterHoldings}
        />
      </div>
      <div>
        <HoldingTable holdings={prices} />
      </div>
    </div>
  );
}
