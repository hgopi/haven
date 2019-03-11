import React from 'react';

const HowItWorks = () => {

    return (
        <section className="section-howitworks">
            <div className="container">
                <h2 className="section-title text-center">How it works</h2>
                <div className="benefits-grid layout-grid">
                    <div className="benefit-process process-1">
                        <div className="image-container">
                            <img src="/images/square-small-1.jpg" alt="" />
                            <div className="process-circle">
                                1.
                            </div>
                        </div>
                        <div className="process-text">
                            <h5>Purchase safely</h5>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                    <div className="benefit-process process-2">
                        <div className="image-container">
                            <img src="/images/square-small-2.jpeg" alt="" />
                            <div className="process-circle">
                                2.
                            </div>
                        </div>
                        <div className="process-text">
                            <h5>Ships from warehouse</h5>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                    <div className="benefit-process process-3">
                        <div className="image-container">
                            <img src="/images/square-small-3.jpeg" alt="" />
                            <div className="process-circle">
                                3.
                            </div>
                        </div>
                        <div className="process-text">
                            <h5>Style your room</h5>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default HowItWorks;