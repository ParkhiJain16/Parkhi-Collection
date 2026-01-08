import { useNavigate } from "react-router-dom";
import './Home.css'
const categories = [
  {
    name: "Sarees",
    slug: "sarees",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjynicwTqM6AYa2ezXmcSVGcdd6_daOysYGA&s",
    description: "Classic designs with rich fabrics"
  },
  {
    name: "Suits",
    slug: "suits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAKLZdcVbLJSXEbDc30SqQsCORGoNWl1cMg&s",
    description: "Comfort blended with elegance"
  },
  {
    name: "Lehengas",
    slug: "lehengas",
    image: "https://www.shoppingworldyt.com/cdn/shop/files/Bridal-Glory_in_Every_Thread_The_Ultimate_Lehenga_Choli_for_Your_Big_DayDrape_yourself_in_time_5.jpg?v=1756822715",
    description: "Graceful outfits for special occasions"
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">
        
        <p>
          <b>
            Parkhi Collection – where tradition meets elegance.
            Explore sarees, suits, and lehengas designed for every special moment.
          </b>
        </p>

        {/* <button onClick={() => navigate("/product/:category")}>
          Explore Collection
        </button> */}
      </section>

      {/* Categories */}
      <section className="categories">
        <h2> Explore Our Collections</h2>

        <div className="category-box">
          {categories.map((cat) => (
            <div key={cat.slug} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          
            <button
              className="card-btn"
              onClick={() => navigate(`/product/${cat.slug}`)}
            >
              View All
            </button>
          </div>
          
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
