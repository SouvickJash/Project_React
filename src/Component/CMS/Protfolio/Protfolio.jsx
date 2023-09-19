import React, { useState } from 'react'

const Protfolio = () => {
  const[loading,setLoading]=useState(true)
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return (
      <>
    <div class="loader">
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    class="h-12 w-12 flex-shrink-0 spin"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
  </svg>
</div>

      </>
    );
  }
  return (
    <>
  
<div>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Portolio</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Portolio</li>
          </ol>
        </div>
      </div>
    </section>{/* End Breadcrumbs */}
    {/* ======= Portfolio Section ======= */}
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up">
          {/* image */}

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-10.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-10.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-11.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-11.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-12.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-12.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-13.jpg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-13.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-14.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-14.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-15.jpg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-15.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.png" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.png" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.png" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.png" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.png" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Portfolio Section */}
  </main>{/* End #main */}

  <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
</div>


    </>
  )
}

export default Protfolio

