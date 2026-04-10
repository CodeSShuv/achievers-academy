import "./css/card.css";

export const Card = ({imgSrc, name, description=null,style}) => {
  return (
    <>
      
      <div className="card custom-card" style={style?style:{}}>
        <img src={imgSrc} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h3 className="card-heading">{name}</h3>
         {description !== null && <p className="card-text">{description}</p>}
        </div>
      </div>
    </>
  );
}
