import Link from "next/link"
function ProductList()  {
  return (
    <div>
      ProductList
      <ul>
        <li>
          <Link href="/product/1">Food</Link>
         </li>
        <li> <Link href="/product/2">Drink</Link></li>
        <li> <Link href="/product/3">Snack</Link></li>
      </ul>
    
      </div>
  )
}

export default ProductList

