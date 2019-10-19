const initialState = {
    isLoading: false,
    selectedCity: null,
    citiesList: [
        "MUMBAI",
        "COIMBATORE",
        "BANGALORE",
        "CHENNAI",
        "DELHI"
    ],
    banks: [],
    bank: {
        name: "",
        ifscCode: "",
        branchName: "",
        district: "",
        state: ""
    },
    favouriteList: {},
    filteredBanks: [],
    searchParam: '',
    cache: {},
    error: {
        present: false,
        info: {
            title: '',
            content: ''
        }
    }
}

export default initialState;