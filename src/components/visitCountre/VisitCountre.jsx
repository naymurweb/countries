
const VisitCountre = ({countrie}) => {
    const { flags,name } = countrie;


    return (
        <div className="card  bg-base-100 shadow-xl flex-row p-5">
        <figure className="px-10 pt-10">
          <img src={flags.png} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name.common}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">remove</button>
          </div>
        </div>
      </div>
    );
};

export default VisitCountre;