import React, { createContext, useState } from "react";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {
  const [packageData, setPackageData] = useState(null);

  return (
    <PackageContext.Provider value={{ packageData, setPackageData }}>
      {children}
    </PackageContext.Provider>
  );
};

export default PackageContextProvider;
