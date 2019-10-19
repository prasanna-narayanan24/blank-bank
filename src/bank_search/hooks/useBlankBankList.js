import { useBlankBankIndexContext } from "./useBlankBankIndexContext";

export const useBlankBankList = () => {
    const { state } = useBlankBankIndexContext();
    let allBanks = state.filteredBanks;
    let favouriteBanks = state.filteredBanks.filter(bank => state.favouriteList[bank.ifsc])

    return [allBanks, favouriteBanks];
}