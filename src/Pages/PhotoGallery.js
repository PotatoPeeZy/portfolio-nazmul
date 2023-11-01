import React from "react";
import photos from "../Data/GalleryPhotoUrl.json";
import "./PhotoGallery.css";
function PhotoGallery() {
  return (
    <div className="photo-gallery">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="12"
            aria-label="Slide 13"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo1}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Final Thesis and Project Presentation day at NUBTK</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo2}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Thesis Paper Submit day at NUBTH With mother</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo3}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Lunch at Wendys Food Court, Gollamari</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo4}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Dinner at Wendys food court.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo5}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>At Pasta Express, New Market</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo6}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Selfie at Home.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo7}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Selfie in front of my Desktop Setup</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo8}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>At Hadis Park, Khulna with Tuba Takowa.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo9}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Returning from Jashore with family in Rupsa Express.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo10}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Selfie at rooftop of the House.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo11}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Wedding Ceremony at Platinum Jubilee Officers Club.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo12}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>At Liberty Cinema Hall.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + photos.url.photo13}
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Posing in front of the Nagar Bhaban at Hadis Park, Khulna</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
