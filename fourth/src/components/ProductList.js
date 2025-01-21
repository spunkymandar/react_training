const ProductList=()=>{
    
    // const users=[
    //     {id:1,name:'john'},
    //     {id:2,name:'derek'}
    // ]

    // const userNames=users.map(user=>user.name)
    // console.log(userNames)

    const productGroup=[
        {id:'p1',title:'mobile',price:15000},
        {id:'p2',title:'headphone',price:1500},
        {id:'p3',title:'cover',price:150},
       
    ]
    console.log(productGroup)
    
    // const productTitles=[];
    // for(let i=0;i<productGroup.length;i++){
    //     productTitles.push(
    //     <li>
    //         <h2> {productGroup[i].title}</h2>
    //         <p>{productGroup[i].price}</p>
           
    //     </li>)
    // }

    const productTitles=productGroup.map(product=>(
            <li>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
            </li>
        )
    )





    console.log(productTitles)
    
    
    return(
        <>
            <p>The available products:</p>
            
            <ol>
                {productTitles}
            </ol>

        </>
    )
}
export default ProductList