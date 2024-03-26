import { useState, useEffect, React } from 'react';
import styles from '../components/AboutUs.module.scss';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SvgComponent from '@/components/SvgComponent';
import CallToActionSection from '@/components/CallToActionSection';
import Image from 'next/image';
import Head from 'next/head';

const CrewWithTruck = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.jpg";

const MeetTheTeam = (props) => {
    const [isTextExpanded, setTextExpanded] = useState({ paragraph1: false, paragraph2: false });

    const toggleTextDisplay = (paragraph) => {
        setTextExpanded(prevState => ({ ...prevState, [paragraph]: !prevState[paragraph] }));
    };


    useEffect(() => {
        window.scrollTo(0, 0)

        // Initialize GTM dataLayer
        window.dataLayer = window.dataLayer || [];

        // Define gtag function
        function gtag() {
            window.dataLayer.push(arguments);
        }

        // Load GTM script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
        script.async = true;
        document.body.appendChild(script);

        // Execute the GTM script
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'AW-11428060127');
        };

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, [])

    const paragraph1 = "When you have a fence built and installed by the team at GreenView Solutions, you can rest assured that it is done so with extreme care and superior skill. We are a proud member of the American Fence Association and Master Builders Association, which means our superior skills haven’t gone unnoticed. Additionally, we participate in the Better Business Bureau Reliability Program, guaranteeing our company exhibits a reputation for excellent customer care. We are 100% bonded and insured, ensuring you can trust that our work will meet your standards of excellence and deliver a visually-appealing, purposeful fence for your home or business."

    const paragraph2 = "Choosing your style of fencing is not an endeavor that you should take lightly. There is a lot to consider, including style, durability, area, and size. Because Denver and the surrounding communities have a vast assortment of plots and styles for residential neighborhoods and office complexes, GreenView Solutions offers a wide variety of fence styles to suit your needs perfectly. Not only do we utilize the best materials for all our fences, but we also employ a staff that uses proven techniques to ensure durability and elegance regardless of the scope of your project. We design and install wood fences, chain link fences, ornamental iron fences, specialty fences, and commercial fences, all with the grace and precision that can only be cultivated through nearly 50 years of hands-on experience."

    // Truncate text function
    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.slice(0, length) + '...';
    };

    // Team member profiles - This data would ideally come from an API or a database
    const teamMembers = [
        { id: 1, name: 'Brandon', role: 'Founder', image: '/metal-fence.jpeg', excerpt: 'Brandon spearheads our fencing company with a sharp eye for innovation and unwavering commitment to quality craftsmanship. His attention to detail and exceptional communication skills are at the core of his approach, ensuring that customer satisfaction is paramount. Brandon leads every project with a hyper-focus on exceeding customer expectations, setting the gold standard of fencing excellence.' },
        { id: 2, name: 'Chris', role: 'Co-Founder', image: '/CHeadS.png', excerpt: 'Chris, co-founding the company, excels in the realms of marketing, accounting, legal affairs, and web development. His comprehensive approach to the business side of fencing ensures that our company not only installs top-quality fences but also stands strong on a foundation of sound business strategies and innovative online presence.' },
        { id: 3, name: 'Meli', role: 'Office Manager', image: '/metal-fence.jpeg', excerpt: '"Meli, the backbone of our fencing company, ensures smooth operations and client satisfaction. Her exceptional organizational skills, attention to detail, thoroughness, and consistency make her incredibly reliable and dependable, guaranteeing precision and care in every business aspect."' },
        { id: 4, name: 'Nick', role: 'Lead Carpenter', image: '/metal-fence.jpeg', excerpt: 'Nick, our lead carpenter, wields his tools with precision and artistry, creating durable and beautifully designed fences. His obsession with quality and attention to detail is matched by his thoroughness and ability to work closely with customers, ensuring their expectations are always met. His workmanship is a testament to the high standards our company upholds.' },
        { id: 5, name: 'Reggie', role: 'Operations Manager', image: '/metal-fence.jpeg', excerpt: 'Reggie orchestrates our fencing projects with efficiency and expertise, ensuring that operations flow seamlessly from start to finish. His strategic planning and execution make him pivotal in delivering top-tier fencing solutions.' },
        { id: 6, name: 'Abby', role: 'HR', image: '/metal-fence.jpeg', excerpt: 'Abby, our HR manager, brings a refreshingly youthful perspective to our team dynamics, often outmaneuvering colleagues in negotiations with her disarmingly simple yet effective strategies. Her knack for maintaining high morale and a well-stocked break room, coupled with her mysteriously effective "cookie jar diplomacy," makes her an invaluable and endearing part of our company.' },

    ];


    return (
        <div>
            <Head>
                <title>GreenView Solutions About Us Page</title>
                <meta name="description" content="This page is the about us page that contains information about greenview solutions" />
                <link rel="canonical" href="https://greenviewsolutions.net/about" />

            </Head>

            <Header />

            <div className={styles.aboutUsContainer}>

                <div className={styles.teamSection}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <Image src={member.image} alt={member.name} layout='fill' objectFit='cover' />
                            </div>
                            <div className={styles.profileExcerpt}>
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                                <p>{member.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
            <div style={{margin: '50px 0px'}}>
            <CallToActionSection />
            </div>
            <></>
            <SvgComponent />
            <Footer />

        </div >

    )
}


export default MeetTheTeam;





