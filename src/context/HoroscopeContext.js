import { createContext, useState } from "react";
//import our horoscope data
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

//Refactor - create a custom wrapper component
//This is better convention
const HoroscopeProvider = (props) => {
  //create state variables
  //pass the values to out provider
  const [currentSign, setCurrentSign] = useState("Leo");

  //key into the horoscopesObj using the current sign, so we have access to the info in our data folder

  //pass this variable instead of currentSign
  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
