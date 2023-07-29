"use client"
function ProductDetails({params})  {
    console.log(params)
  return (
    <div>
      ProductDetails
      <h1>ID: {params.productdetail}</h1>
    
      </div>
  )
}

export default ProductDetails