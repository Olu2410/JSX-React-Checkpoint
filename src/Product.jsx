

const  Product = ({name, price, description, imageURL}) =>{
  return (
    <div className="prod">
      <img src={imageURL} style={{width: 'inherit'}}></img>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h1>{price}</h1>
    </div>
  )
}

export default Product