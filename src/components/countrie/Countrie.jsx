import { useState } from "react";

const Countrie = ({ countrie, handleVisit }) => {
  const { flags, name } = countrie;
  const [visit, setVisit] = useState(false);

  const handleVisitItem = () => {
    setVisit(!visit);
  };


  return (
    <div className={`card bg-base-100 shadow-xl ${visit && "bg-sky-200"}`}>
      <figure>
        <img src={flags.png} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            className={`btn btn-primary ${visit && "btn-secondary"}`}
            onClick={() => {
              handleVisit(countrie), handleVisitItem();
            }}
          >
            {visit ? "visited" : "visit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countrie;
