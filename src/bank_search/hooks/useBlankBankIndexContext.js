  
import { useContext } from "react";
import { BlankBankContext } from "../providers/BlankBankProvider";

export const useBlankBankIndexContext = () => {
  const blankBankContext = useContext(BlankBankContext);
  
  return {
      state: blankBankContext[0],
      dispatch: blankBankContext[1]
  }
};
