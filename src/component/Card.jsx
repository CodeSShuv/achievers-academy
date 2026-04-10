import "./css/card.css";

export const Card = ({imgSrc, destinationName, destinationDescription}) => {
  return (
    <>
      {console.log(imgSrc)}
      <div className="card custom-card">
        <img src={imgSrc} className="card-img-top" alt={destinationName}/>
        <div className="card-body">
          <h3 className="card-heading">{destinationName}</h3>
          <p className="card-text">{destinationDescription}</p>
        </div>
      </div>
    </>
  );
}
