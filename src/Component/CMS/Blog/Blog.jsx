import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [loading,setLoading]=useState(true)

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
          <h2>Blog</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Blog</li>
          </ol>
        </div>
      </div>
    </section>{/* End Breadcrumbs */}
    {/* ======= Blog Section ======= */}
    <section id="blog" className="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 entries">
            <article className="entry" data-aos="fade-up">
              <div className="entry-img">
                <img src="assets/img/blog-4.jpg" alt className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  {/* <a href="blog-single.html">Read More</a> */}
                  <Link to={'/blog-single'}>Read More</Link>
                </div>
              </div>
            </article>{/* End blog entry */}
            <article className="entry" data-aos="fade-up">
              <div className="entry-img">
                <img src="assets/img/blog-2.jpg" alt className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                  Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                </p>
                <div className="read-more">
                <Link to={'/blog-single'}>Read More</Link>
                </div>
              </div>
            </article>{/* End blog entry */}
            <article className="entry" data-aos="fade-up">
              <div className="entry-img">
                <img src="assets/img/blog-5.jpg" alt className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                  Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                </p>
                <div className="read-more">
                <Link to={'/blog-single'}>Read More</Link>
                </div>
              </div>
            </article>{/* End blog entry */}
            <article className="entry" data-aos="fade-up">
              <div className="entry-img">
                <img src="assets/img/blog-4.jpg" alt className="img-fluid" />
              </div>
              <h2 className="entry-title">
                <a href="blog-single.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>
              <div className="entry-content">
                <p>
                  Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                  Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                </p>
                <div className="read-more">
                <Link to={'/blog-single'}>Read More</Link>
                </div>
              </div>
            </article>{/* End blog entry */}
            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li className="disabled"><i className="icofont-rounded-left" /></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="icofont-rounded-right" /></a></li>
              </ul>
            </div>
          </div>{/* End blog entries list */}
          <div className="col-lg-4">
            <div className="sidebar" data-aos="fade-left">
              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action>
                  <input type="text" />
                  <button type="submit"><i className="icofont-search" /></button>
                </form>
              </div>{/* End sidebar search formn*/}
              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>
              </div>{/* End sidebar categories*/}
              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-posts-1.jpg" alt />
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-posts-2.jpg" alt />
                  <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-posts-3.jpg" alt />
                  <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-posts-4.jpg" alt />
                  <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-posts-5.jpg" alt />
                  <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>{/* End sidebar recent posts*/}
              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>{/* End sidebar tags*/}
            </div>{/* End sidebar */}
          </div>{/* End blog sidebar */}
        </div>
      </div>
    </section>{/* End Blog Section */}
  </main>{/* End #main */}

  <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
</div>

    </>
  )
}

export default Blog
