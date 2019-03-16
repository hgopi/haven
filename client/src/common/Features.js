import React from 'react';

const Features = () => (
    <section className="section-features">
        <div className="container">
            <div className="features-grid layout-grid">
                <div className="feature-item item-1">
                    <div className="feature-image-wrapper">
                        <img src="/images/icon-shipping-box.svg" alt="" className="feature-image" />
                    </div>
                    <h5>Priority Shipping</h5>
                    <div>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</div>
                </div>
                <div className="feature-item item-2">
                    <div className="feature-image-wrapper">
                        <img src="/images/icon-dolly.svg" alt="" className="feature-image" />
                    </div>
                    <h5>Fuss Free Returns</h5>
                    <div>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</div>
                </div>
                <div className="feature-item item-3">
                    <div className="feature-image-wrapper">
                        <img src="/images/icon-dresser.svg" alt="" className="feature-image" />
                    </div>
                    <h5>In-home Setup Service</h5>
                    <div>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</div>
                </div>
            </div>
        </div>
    </section>
);

export default Features;