import style from "./Banner.module.scss";

export default function Baner() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className={style.baner + " carousel slide"}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/01.jpg"
              className={style.img + " d-block w-100"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="02.jpg"
              className={style.img + " d-block w-100"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="03.jpg"
              className={style.img + " d-block w-100"}
              alt="..."
            />
          </div>
        </div>
        <button
          className={style.botaoPrev + " carousel-control-prev"}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className={style.icone + " carousel-control-prev-icon"}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={style.botaoNext + " carousel-control-next"}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className={style.icone + " carousel-control-next-icon"}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
