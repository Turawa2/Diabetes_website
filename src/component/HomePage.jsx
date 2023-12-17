import React from 'react'

function HomePage() {
  return (
   <>
    <section class="hero" id="hero">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <center>
                                <div class="carousel-item active">
                                    <img style={{width: "80%"}} src="/1.jpg" class="img-fluid" alt=""/>
                                </div>
                                </center>

                                <div class="carousel-item">
                                    <img src="/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg" class="img-fluid" alt=""/>
                                </div>

                                <div class="carousel-item">
                                    <img src="/doctor-s-hand-holding-stethoscope-closeup.jpg" class="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div class="heroText d-flex flex-column justify-content-center">

                            <h1 class="mt-auto mb-2">
                                Better
                                <div class="animated-info">
                                    <span class="animated-item">health</span>
                                    <span class="animated-item">days</span>
                                    <span class="animated-item">lives</span>
                                </div>
                            </h1>

                            <p class="mb-4">
                            Haleee Care Clinic stands as a beacon of support for individuals navigating the challenges of diabetes. Through its specialized care, comprehensive approach,
                             and commitment to community well-being, the clinic strives to make a positive impact on the lives of those affected by diabetes.                                </p>

                            <div class="heroLinks d-flex flex-wrap align-items-center">
                                <a class="custom-link me-4" href="#about" data-hover="Learn More">Learn More</a>

                                <p class="contact-phone mb-0"><i class="bi-phone"></i> +234 7037 4355 36</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
   </>
  )
}

export default HomePage
