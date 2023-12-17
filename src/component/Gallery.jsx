import React from 'react'

function Gallery() {
  return (
    <>
      <section class="gallery">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-6 ps-0">
                        <img src="/3.jpg" class="img-fluid galleryImage" alt="get a vaccine" title="get a vaccine for yourself"/>
                    </div>

                    <div class="col-lg-6 col-6 pe-0">
                        <img src="/4.jpg" class="img-fluid galleryImage" alt="wear a mask" title="wear a mask to protect yourself"/>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Gallery
