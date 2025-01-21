const ProductList=({products})=>{
    console.log(products)
    const productElements = [];
    for (let i = 0; i < products.length; i++) {
        productElements.push(<li>{products[i].title}</li>);
    }

    return (
        <>
            <p><b>Inside ProductList</b></p>
            <ol>
                {productElements}
            </ol>
        </>
    );
};
export default ProductList;
