const Infos = (props) => {
  return (
    <div>
      <div className="infos">
        <div className="image">
          <img className="image--size" src={props.image} />
        </div>
        <div className="description">
          <p>{props.country}</p>
          <h1>{props.location}</h1>
          <p>
            <strong>{props.date}</strong>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Infos;
