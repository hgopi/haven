import React from 'react';

const Promotion = () => (
    <section className="section-promotion">
        <div className="container">
            <div className="promotion-grid">
                <div className="collage-image">
                    <img className="tall-image" alt="" src="/images/tall-1.jpg" width="384" />
                    <img className="square-image" alt="" src="/images/square-1.jpg" width="280" />
                </div>
                <div className="collage-text">
                    <h3>Beautify your space</h3>
                    <p className="text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <a href="/about" className="text-large">Learn more</a>
                </div>
            </div>
        </div>
    </section>
)

export default Promotion;