import "./Home.css";
import Mango from "../../Images/mango.jpeg";

const Home = () => {
    const items = [
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        },
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        },
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        },
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        },
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        },
        {
            url:Mango,
            name: "Mango icecream",
            price:25,
            desc:"Natural mango flavour obtained from the mangoes grown in local farms of Fujairah."
        }
        
    ]

    return (  
        <div className="home">
            <h1>Featured Ice Kareems</h1>
            <hr />
            <div className="home_content">
                {items.map((item, idx)=>{
                        return(
                            <div key={idx} className="home_item">
                                <img src={item.url} alt="icecream" />
                                <br />
                                <h4>{item.name} </h4>
                                <p className="price"><sup style={{fontSize:"x-small"}}>AED</sup>{item.price}<sup style={{fontSize:"x-small"}}>00</sup></p>
                                <p className="description">
                                    {item.desc}
                                </p>
                                <button>Add to Cart</button>
                            </div>

                            )

                    })
                }
               
            </div>
        </div>
    );
}
 
export default Home;