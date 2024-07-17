import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=7890b835b335a96b9ab7c775d6055db4&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        );
        const response2 = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=7890b835b335a96b9ab7c775d6055db4&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
        );
        setMovies([...response.data.results, ...response2.data.results]);
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 7 >= movies.length) {
        return prevIndex;
      }
      return prevIndex + 7;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 7 < 0) {
        return 0;
      }
      return prevIndex - 7;
    });
  };

  const handlePlay = () => {
    const video = document.getElementById("myVideo");
    if (video) {
      video.play();
    }
  };

  return (
    <>
      <div className="videop">
        <video autoPlay muted loop id="myVideo">
          <source src="" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <h1 className="video-title">Başlık</h1>
          <p className="video-description">
            Bu videoyu izleyerek, ilgili konu hakkında kısa bilgiler
            edinebilirsiniz.
          </p>
          <button className="video-play-button" onClick={handlePlay}>
            Oynat
          </button>
          <button className="video-info-button">Daha Fazla Bilgi</button>
        </div>
      </div>
      <div className="Home">
        <header className="nav-item">
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <label className="logo">
              <a href="#">
                <h1>FOXFLİX</h1>
              </a>
            </label>
            <ul className="main-nav">
              <li>
                <a className="active" href="#">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#">Diziler</a>
              </li>
              <li>
                <a href="#">Filmler</a>
              </li>
              <li>
                <a href="#">Yeni ve Popüler</a>
              </li>
              <li>
                <a href="#">Listem</a>
              </li>
            </ul>
          </nav>
          <nav className="sub-nav">
            <a href="#" className="icon">
              <IoSearch />
            </a>
            <a href="#" className="icon">
              <IoNotificationsSharp />
            </a>
            <a href="#" className="icon">
              Çocuk
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/40" alt="" />
            </a>
            <a href="#" className="icon">
              <FaCaretDown />
            </a>
          </nav>
        </header>
        <div className="container">
          <div className="mt-5 text-center">
            <h1></h1>
          </div>
          <div className="mt-3 text-center">
            <p>Popüler Filmler</p>
          </div>
          <div className="movie-slider">
            <button className="slider-button" onClick={handlePrev}>
              Geri
            </button>
            <div className="movie-cards">
              {movies.slice(currentIndex, currentIndex + 8).map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-title">
                    <p>{movie.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-button" onClick={handleNext}>
              İleri
            </button>
          </div>
        </div>
        <footer>
          <p>&copy; 2024 FOXFLİX. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
