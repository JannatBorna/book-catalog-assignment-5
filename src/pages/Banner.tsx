import { Link } from "react-router-dom";
import banner from '../assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Link to="/all-books">
              <img src={banner} alt=""  className="banner"/>
            </Link>
        </div>
    );
};

export default Banner;