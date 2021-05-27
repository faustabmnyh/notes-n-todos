import { Link } from "react-router-dom";
import "./Home.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Home = () => {
  return (
    <div className="home">
      {/* <img src="/images/feature.png" alt="notes" className="home__decoration" /> */}
      {/* <img src="/images/feature2.png" alt="notes" className="home__decoration2" /> */}
      <div className="home__container">
        <div>
          <h1 className="home__title">Mistergun Note and ToDo</h1>
          <p className="home__subTitle">
            Set your <span>target</span> and <span>write</span> your diary using
            this app.{" "}
          </p>
        </div>
        <div className="home__go">
          <ul className="home__links">
            <li className="home__item">
              <Link to="/notes" className="home__link">
                <button className="home__btn">
                  Go To Notes <ChevronRightIcon />
                </button>
              </Link>
            </li>
            <li className="home__item">
              <Link to="/todo" className="home__link">
                <button className="home__btn">
                  Go To ToDo List <ChevronRightIcon />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
