function Movie() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://avatars.mds.yandex.net/get-zen_doc/198398/pub_61c054a2527e3409c023a762_61c05869b442e660f42b2bb0/scale_1200"
          alt="Netflix Logo"
        />
        <h1>En Çok İzlenenler</h1>
      </header>

      <section className="slider">
        <h2>Öne Çıkanlar</h2>
        <div className="slider-track">
          <div className="slider-item">
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=a5321426851e7e635eeb8e799fd0e26d-1648716-images-thumbs&n=13"
                alt="Öne Çıkanlar"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="slider-cart">
        <h2>Büyük Franchiseler</h2>
        <div className="slider-track">
          <div className="cart-1">
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=1d72f46f3e021ee1100e239db8d25af5d89ff936-1129897-images-thumbs&n=13"
                alt="Franchise 1"
              />
            </a>
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=076382e3bdf06197b4c4dfc85da1cbed2b12ac4d-12270297-images-thumbs&n=13"
                alt="Franchise 2"
              />
            </a>
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=7d9aa510050fbfbda5f4b64ae3a7e7e0ad3d576f-7335673-images-thumbs&n=13"
                alt="Franchise 3"
              />
            </a>
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=0ef7c8b20c78123f1473547e40f3e722f70826c2-16470222-images-thumbs&n=13"
                alt="Franchise 4"
              />
            </a>
            <a href="#">
              <img
                src="https://avatars.mds.yandex.net/i?id=43a1cf882cf9aae6a872e6d0f3e14b9c47e3c869-1929514-images-thumbs&n=13"
                alt="Franchise 5"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;
