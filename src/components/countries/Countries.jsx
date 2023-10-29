import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../countrie/Countrie";
import VisitCountre from "../visitCountre/VisitCountre";
import { addToLs } from "../../hook/localStorage";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisit = (counries) => {
    setVisit([...visit, counries]);
    addToLs(counries.cca3);
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5 my-10">
        {visit.map((countrie, id) => (
          <VisitCountre key={id} countrie={countrie}></VisitCountre>
        ))}
      </div>

      <div className=" grid grid-cols-4 gap-5 my-20">
        {countries.map((countrie, id) => (
          <Countrie
            countrie={countrie}
            handleVisit={handleVisit}
            key={id}
          ></Countrie>
        ))}
      </div>
    </div>
  );
};

export default Countries;
