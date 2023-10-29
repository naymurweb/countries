import PropTypes from "prop-types";

const Countrie = ({ countrie }) => {
    // console.log(countrie);
  const { flags,name } = countrie;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={flags.png} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">visit</button>
        </div>
      </div>
    </div>
  );
};

Countrie.PropTypes = {
  countrie: PropTypes.object.isRequired
};

export default Countrie;
