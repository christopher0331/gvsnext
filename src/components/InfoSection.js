import Image from 'next/image';
import '../app/globals.css'; // Assuming this is where you have your global styles

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info-section-collage">
                <Image
                    src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/Untitled+design+(5).png"
                    alt="info-section-truck-image"
                    quality={100}
                    height={1000}
                    width={1000}
                    style={{ zIndex: 1550 }}
                />
            </div>

            <div className="info-section-container">
                <div className="container">
                    <h2 className="section-title">About Us</h2>
                    <p className="section-subtitle">Colorados Most Trusted Outdoor Living Contractor</p>
                    <p className="info-p-section">GreenView Solutions elevates your home with luxurious outdoor living experiences. Immerse yourself in elegance and comfort in your own backyard, where every moment becomes a special memory.</p>
                    
                    <div className="fencing-options">
                        
                        <button className="option">
                            <div className="icon-container">
                                <Image
                                    alt="residential fencing icon"
                                    src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/CommercialFenceLogo+(1).png"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <span>Commercial Fencing</span>
                        </button>

                        <button className="option">
                            <div className="icon-container">
                                <Image
                                    alt="commercial fencing icons"
                                    src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/ResidentialFenceIcon.png"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <span>Residential Fencing</span>
                        </button>


                    </div>

                    <p className="info-p-section">Take a look at our beautiful vinyl fence options, durable aluminum fencing, quality wood fence projects, and our variety of custom fence options. Youre sure to find the perfect fence!</p>
                    
                    <button className="button-class">
                        <a href="#learn-more" className="learn-more-button">Learn About GreenView Solutions</a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default InfoSection;
