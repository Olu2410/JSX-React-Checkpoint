
import data from '../src/Products.json'
import Product from './Product';  
import './App.css'

function Description() {
    const products = data.productinfo;
  return (
    <div className='desc'>{products.map(item => <Product key={item.name} {...item}/>)}</div>
  )
}

export default Description