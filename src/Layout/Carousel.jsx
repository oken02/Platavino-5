import React from "react";

const Carousel = ({ children: vinos = [] }) => {
  const buttonActiveProps = {};
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style="width: 700px; height: 400px; margin: 80px auto"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          {vinos.map((vino, i) => {
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={`i`}
              className={i === 0 ? "active" : ""}
              // aria-label={`Slide ${i + 1}`}
            ></button>;
          })}
          {/* <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button> */}
        </div>

        <div class="carousel-inner" style="height: 100%">


          {
            vinos.map
          }

          <div class="carousel-item">

            <div class="card mb-3" style="width: 100%; height: 100%">
              <div class="row g-0" style="height: 100%">
                <div class="col-md-8">
                  <div class="card-body vinoDesc">
                    <h3 class="card-title">Card title</h3>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img
                    src="https://www.radioacktiva.com/wp-content/uploads/2020/05/Goku-e1589474104135-720x300.png"
                    class="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
