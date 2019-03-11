import React from 'react';

const NewsLetter = () => (
    <section className="section-newsletter">
        <div className="container container-narrow text-center">
            <h2>Join our mailing list</h2>
            <p className="text-large">Sign up to receive inspiration, product updates, and special offers from our team.</p>
            <div className="form">
                <form name="emailForm" className="subscribe-form">
                    <input type="email" className="form-input form-input-large subscribe-form-input" placeholder="Email Address" />
                    <input type="submit" value="Subscribe" className="button button-large" />
                </form>
                <div className="form-error">Please enter a valid email</div>
                <div className="form-done">
                    <p>Thank you! Your submission has been received!</p>
                </div>
                <div className="form-fail">
                    <p>Oops! Something went wrong while submitting the form.</p>
                </div>
            </div>
            <div className="text-small">
                We’ll never share your details. View our <a href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>
    </section>
)

export default NewsLetter;