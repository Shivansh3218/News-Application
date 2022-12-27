import React, { createContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [search, setSearch] = useState("bitcoin");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <SearchContext.Provider value={{ search, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
export { SearchContext, SearchProvider };
