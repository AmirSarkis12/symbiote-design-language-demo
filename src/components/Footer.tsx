import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Footer() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="container-fluid footer-container">
    <footer>
        <div className="container">
            <div className="col-xs-6 col-md-3">
                <p>Company</p>
                <ul>
                    <li><a href="###">About</a></li>
                    <li><a href="###">Mission</a></li>
                    <li><a href="###">Services</a></li>
                    <li><a href="###">Our Partners</a></li>
                    <li><a href="###">Get in touch</a></li>
                </ul>
            </div>
            <div className="col-xs-6 col-md-3">
                <p>Products</p>
                <ul>
                    <li><a href="###">About</a></li>
                    <li><a href="###">Mission</a></li>
                    <li><a href="###">Services</a></li>
                    <li><a href="###">Our Partners</a></li>
                    <li><a href="###">Get in touch</a></li>
                </ul>
            </div>
            <div className="col-xs-6 col-md-3">
                <p>Accounts</p>
                <ul>
                    <li><a href="###">About</a></li>
                    <li><a href="###">Mission</a></li>
                    <li><a href="###">Services</a></li>
                    <li><a href="###">Our Partners</a></li>
                    <li><a href="###">Get in touch</a></li>
                </ul>
            </div>
            <div className="col-xs-6 col-md-3">
                <p>Social</p>
                <div className="social-link">
                    <a href="###" target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                </div>
                <div className="social-link">
                    <a href="###" target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                </div>
                <div className="social-link">
                    <a href="###" target="_blank"><i className="lab la-instagram inverted"></i><p>Instagram</p></a>
                </div>
                <div className="social-link">
                    <a href="###" target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright">
        <p>Copyright &#169; <a href="www.symbiote.com.au" target="_blank">Symbiote</a> Pty Ltd {new Date().getFullYear().toString()}</p>
    </div>
</div>`;
    return (
        <div>
            <h1>Footer</h1>
            <p>The Footer component shows links that are not in the Main Navigation. Users can access less significant sub-pages, legal content, contact information and links to your social media. It also provides supplementary information such as copyright, ABN details, contact information etc.</p>

            <h3>When to use this component</h3>
            <p>This component should be used whenever the Main Navigation component is used. It should serve as a consistant element accross your website.</p>

            <h3>When not to use this component</h3>
            <p>Do not use more than one Footer on a page and ensure that it is the list item in your document to ensure it is correctly read as the last item by screen readers.</p>

            <h3>Snippet</h3>
            <div className="container-fluid footer-container">
                <footer>
                    <div className="container">
                        <div className="col-xs-6 col-md-3">
                            <p>Company</p>
                            <ul>
                                <li><a href="###">About</a></li>
                                <li><a href="###">Mission</a></li>
                                <li><a href="###">Services</a></li>
                                <li><a href="###">Our Partners</a></li>
                                <li><a href="###">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Products</p>
                            <ul>
                                <li><a href="###">About</a></li>
                                <li><a href="###">Mission</a></li>
                                <li><a href="###">Services</a></li>
                                <li><a href="###">Our Partners</a></li>
                                <li><a href="###">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Accounts</p>
                            <ul>
                                <li><a href="###">About</a></li>
                                <li><a href="###">Mission</a></li>
                                <li><a href="###">Services</a></li>
                                <li><a href="###">Our Partners</a></li>
                                <li><a href="###">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Social</p>
                            <div className="social-link">
                                <a href="###" target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                            </div>
                            <div className="social-link">
                                <a href="###" target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                            </div>
                            <div className="social-link">
                                <a href="###" target="_blank"><i className="lab la-instagram inverted"></i><p>Instagram</p></a>
                            </div>
                            <div className="social-link">
                                <a href="###" target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className="copyright">
                    <p>Copyright &#169; <a href="https://www.symbiote.com.au" target="_blank" rel="noopener noreferrer">Symbiote</a> Pty Ltd {new Date().getFullYear().toString()}</p>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>

    )
}

export default Footer