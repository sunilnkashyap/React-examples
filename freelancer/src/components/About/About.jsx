import React from 'react';


export function About(props) {

    const { shrotDescriptions, downloadLink } = props;


  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">

                {
                  shrotDescriptions.map((singleDescription) => {
                    return (
                      <div className="col-lg-4 ms-auto me-auto"><p className="lead">{singleDescription}</p></div>
                    )
                  })
                }

                {/* <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div> */}
                {/* <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div> */}
            </div>
            <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-light" href={downloadLink}>
                    <i className="fas fa-download me-2"></i>
                    Download Resume!
                </a>
            </div>
        </div>
    </section>
  );
}



// DATA pass

/**
 * 
 * Props --
 * State -- 
 * 
 * 
 */