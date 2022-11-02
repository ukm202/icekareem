import "./Home.css";
import Mango from "../../Images/mango.jpeg";

const Home = () => {

    return (  
        <div className="home">
            <h1>Featured Ice Kareems</h1>
            <hr />
            <div className="home_content">
                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.

                    </p>
                </div>

                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.

                    </p>
                </div>

                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.

                    </p>
                </div>

                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.

                    </p>
                </div>

                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.
                    </p>
                </div>

                <div className="home_item">
                    <img src={Mango} alt="icecream" />
                    <br />
                    <h4>Mango icecream</h4>
                    <p className="price">25 AED</p>
                    <p className="description">
                        Natural mango flavour obtained from the mangoes grown in local farms of Fujairah.

                    </p>
                </div>

            </div>
        </div>
    );
}
 
export default Home;