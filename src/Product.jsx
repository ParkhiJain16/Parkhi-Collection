import {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Product.css'

const categoryMap = {
    saree: "sarees",
    sarees: "sarees",
    sari: "sarees",
  
    suit: "suits",
    suits: "suits",
  
    lehenga: "lehengas",
    lehengas: "lehengas",
    lehnga: "lehengas"
  };
  
const Product_data = {
    sarees: [
        {
            name: "Blue Silk Saree",
            price: 1960,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjynicwTqM6AYa2ezXmcSVGcdd6_daOysYGA&s"
        },
        {
            name: "Red Banarasi Saree",
            price: 1000,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0YVSlv1p1w0gGb2dXTc5gR-Ei67Fyy94zQ&s"
        },
        {
            name: "Sequin Work Party Wear Saree",
            price: 1000,
            stock: true,
            image: "https://assets2.andaazfashion.com/media/catalog/product/b/l/black-georgette-saree-for-party-wear-with-sequins-work-sarv163478-1.jpg"
        },
        {
            name: "Soft Cotton Handloom Saree",
            price: 1100,
            stock: true,
            image: "https://craftzone.in/backend/uploads/products/SKU0000000736/21fdb810a2dc0dd4a6d20af28f3fdfc6.webp"
        },
        {
            name: "Linen Saree with Digital Print",
            price: 1700,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iy754iupSCl_8tWMNoEvDR1aJfbZevK8Lw&s"
        },
        {
            name: "Chiffon Casual Wear Saree",
            price: 1400,
            stock: true,
            image: "https://assets0.mirraw.com/images/12787280/image_zoom.jpeg?1724419221"
        },
        {
            name: "Georgette Office Wear Saree",
            price: 2300,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuQtsx76VKaMgbfJ-2hmO1GPfBv4e5ugAfA&s"
        },
        {
            name: "Lightweight Printed Crepe Saree",
            price: 1500,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwkpZpswAuw8N5CqRIsszwWf-CUs6gvxYOQ&s"
        },
        {
            name: "Floral Printed Contemporary Saree",
            price: 1500,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcPpUQwXSfJmLZM0Uu04L5HgeQArDhv4Fyw&s"
        },
        {
            name: "Minimalist Satin Designer Saree",
            price: 2000,
            stock: true,
            image: "https://www.wholesaletextile.in/product-img/Ynf-Tirumala-silk-Satin-Pleate-1655702628.jpeg"
        },
        {
            name: "Metallic Shimmer Evening Saree",
            price: 2300,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxTmA4z2rwIb4K6fWKrWi-fWMehYHxZaGiQ&s"
        },
        {
            name: "Pearl Embellished Cocktail Saree",
            price: 3000,
            stock: true,
            image: "https://assets0.mirraw.com/images/12275172/image_zoom.jpeg?1708560541"
        },
        {
            name: "Net Saree with Designer Blouse",
            price: 2500,
            stock: true,
            image: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/2/6285sr01-2791.jpg"
        },
        {
            name: "Indo-Western Draped Saree",
            price: 2000,
            stock: false,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsFEGpmrnsV0vpt-5xgIbDxAkbuXoFiQKMA&s"
        },
        {
            name: "Traditional Red Bridal Silk Saree",
            price: 10000,
            stock: true,
            image: "https://yuvti.co.in/cdn/shop/products/ABS6372.jpg?v=1675942925&width=2048"
        },
        {
            name: "Temple Motif South Silk Saree",
            price: 4000,
            stock: true,
            image: "https://m.media-amazon.com/images/I/51GAvx3p6YL._AC_UY1100_.jpg"
        }
    ],
    suits:[
        {
            name: "Cotton Anarkali Suit",
            price: 1300,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAKLZdcVbLJSXEbDc30SqQsCORGoNWl1cMg&s"
        },
        {
            name: "Palazzo Suit Set",
            price: 1200,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcScnTp3aG0ypTcU3_pTu67Dp9bJNAwkVhuHCwfJIsTAtf2ciuu1Ulj_-_kf9fhzZSD9ftixjLXoOI85OKJK63mfwDyeKNdIMiUiNaK8c"
        },
        {
            name: "Indo-Western Suit",
            price: 8000,
            stock: true,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIOGblvg4-LbrBr-k9scBGHZEXkeLXG39MNbTu4X3D4_BmLTmEOETo126v0Au3B3wz3OPlsYThmrie-f06-sN2RX_PnRL3feIXSnVZiwQqzhq3x-3UmQEL"
        },
        {
            name: "Straight Cut Suit",
            price: 1900,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTf74D5x97_xxNb6RK6g7_FK5ijlCn_umoriXJhF5wh8QKBYxw1Ws4nZkPkGCglibHShdYgYEkiClYm7_Ijgl78POt-8ezJDVP_nyIqMzE"
        },
        {
            name: "Kaftan Suit",
            price: 3000,
            stock: true,
            image: "https://www.lakhinacouture.com/cdn/shop/files/IMG_1723_f6a2dc1d-5e2c-4c19-a0fc-6b524378f706.jpg?v=1696404257&width=1512"
        },
        {
            name: "High Slit Suit Design",
            price: 2200,
            stock: true,
            image: "https://www.inddus.in/cdn/shop/products/black-floral-embroidered-net-keyhole-neck-high-slit-a-line-kurta-trousers-318683.jpg?v=1752666195"
        },
        {
            name: "Ombre Suit Design",
            price: 1800,
            stock: true,
            image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/g/r/grey-with-blue-anarkali-suit-1-lstv01647.jpg"
        },
        {
            name: "Embroidered Suit Set",
            price: 2000,
            stock: true,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiOsqInMer8sAaQmslF7hqXV_Dgft_Mv9Dp1pD6E3eS32I1V9gCm7Yi48qG6yAvaOW_aKVsA1xU-IG193dvX45ZwFQHACDdbnG31nnhAU_"
        },
        {
            name: "Sharara Style Suit",
            price: 1550,
            stock: true,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFF1ps7IrUOF3qtCP-9RZ5wAUKcJmoFTgn7ekj1Rywe6kOhSrDRYf3VfljqMQsutHVOmPSF2FLolOwBDTIYMhM4iu4twJ0GF8AryiB1gcRcV9e_MbOI6ZW"
        },
        {
            name: "Sleeveless Suit",
            price: 1700,
            stock: true,
            image: "https://www.aachho.com/cdn/shop/files/35_52702896-9d3a-46ac-9bfd-37357785aee2_1080x.jpg?v=1689769840"
        }
    ],
    lehengas:[
        {
            name: "Royal Red Bridal Lehenga",
            price: 49000,
            stock: true,
            image: "https://www.shoppingworldyt.com/cdn/shop/files/Bridal-Glory_in_Every_Thread_The_Ultimate_Lehenga_Choli_for_Your_Big_DayDrape_yourself_in_time_5.jpg?v=1756822715"
        },
        {
            name: "Zari Embroidered Wedding Lehenga",
            price: 36927,
            stock: true,
            image: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/3/3369lg01-138.jpg"
        },
        {
            name: "Heritage Silk Bridal Lehenga",
            price: 9000,
            stock: true,
            image: "https://delhisuits.com/wp-content/uploads/2024/11/1000596479.webp"
        },
        {
            name: "Pastel Floral Designer Lehenga",
            price: 11000,
            stock: true,
            image: "https://empress-clothing.com/cdn/shop/products/az1037.jpg?v=1635577981"
        },
        {
            name: "Mirror Work Party Wear Lehenga",
            price: 20000,
            stock: true,
            image: "https://cdn.exoticindia.com/images/products/original/textiles-12-2024/gak571-beetlegreen.jpg"
        },
        {
            name: "Indo-Western Fusion Lehenga",
            price: 6000,
            stock: true,
            image: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-mustard-swarovski-rawsilk-designer-readymadelehenga-gcrm0031924_mustard_1_9_large.jpg?v=1722925286"
        },
        {
            name: "Cape Style Designer Lehenga",
            price: 8000,
            stock: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFzvsZodFizTj-tOr4PTWDc8XaGLkwxZxng&s"
        },
        {
            name: "Banarasi Silk Festive Lehenga",
            price: 10500,
            stock: true,
            image: "https://www.royalexport.in/product-img/2025-indian-designer-bridal-le-1745554530.jpg"
        },
        {
            name: "Velvet Embroidered Evening Lehenga",
            price: 7500,
            stock: true,
            image: "https://www.lavanyathelabel.com/cdn/shop/files/LBL101KS588_1.jpg?v=1755064779"
        },
        {
            name: "Sequin Work Reception Lehenga",
            price: 6700,
            stock: true,
            image: "https://gunjfashion.com/cdn/shop/files/fabulous-mauve-poly-chiffon-sequins-reception-wear-lehenga-choli_1.jpg?v=1718887254"
        },
        {
            name: "Lightweight Festive Lehenga Choli",
            price: 7000,
            stock: true,
            image: "https://gunjfashion.com/cdn/shop/files/CreamLehengaCholi_TissueFabricwithMoti_SequinsEmbroidery_1.jpg?v=1743583567"
        }

    ]
};
function Product({cart,setCart}){
    const {category} = useParams();
    {cart && Object.keys(cart).length > 0 && (
        <button onClick={() => setCart({})}>Clear Cart</button>
      )}  
    const normalizedCategory = categoryMap[category.toLowerCase()];
    const data = Product_data[normalizedCategory];
    if (!data) {
        return (
          <div className="invalid-item">
            <h2>Invalid Product Category!</h2>
          </div>
        );
      }
    const addToCart = (name) => {
        setCart(prev => ({
          ...prev,
          [name]: (prev[name] || 0) + 1
        }));
      };

    const IncreaseQnt =(name)=>{
        setCart(prev=>({
            ...prev,
            [name]:prev[name]+1
        }));
    };

    const DecreaseQnt=(name)=>{
        setCart(prev=>{
           const updated = {...prev};
           if(updated[name]===1){
                delete updated[name];
           }else{
                updated[name] -=1;
           }
           return updated;
        })
    }
    return(
        <>
            <h2>{normalizedCategory.toUpperCase()}</h2>
            {Object.keys(cart).length > 0 && (
            <button
                onClick={() => setCart({})}
                style={{
                marginBottom: "20px",
                padding: "8px 16px",
                backgroundColor: "#7b2c2c",
                color: "white",
                border: "none",
                cursor: "pointer"
                }}
            >
                Clear Cart
            </button>
            )}
            <div className="products-grid">
                {data.map((p, i) => (
                    <div key={i} className="product-card">
                    <img src={p.image} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p className="price">₹{p.price}</p>

                    {!cart[p.name] ? (
                        <button onClick={() => addToCart(p.name)}>Add to Cart</button>
                    ) : (
                        <div className="qty-box">
                        <button onClick={() => DecreaseQnt(p.name)}>-</button>
                        <span>{cart[p.name]}</span>
                        <button onClick={() => IncreaseQnt(p.name)}>+</button>
                        </div>
                    )}
                    </div>
                ))}
                </div>
        </>
    )
}

export default Product;