import { useState } from "react";

export const useIncrease = (defaultValue) => {
  const [amount, setAmount] = useState(defaultValue || 0);

  const add = () => {
    setAmount((am) => am + 1);
  };

  const minus = () => {
    if (amount <= 1) return;
    setAmount((am) => am - 1);
  };

  return {
    amount,
    add,
    minus,
  };
};
