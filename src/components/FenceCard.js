import Image from 'next/image';
import styles from './FenceCard.module.css'; // Import the CSS module
import Link from 'next/link';

const FenceCard = ({ title, imageSrc, description, link }) => {
    return (
        < a href={link} className={styles.card} >
            <h3>{title}</h3>
            <div className={styles.imageContainer}> {/* Ensure this div has a defined height and width */}
                <Image src={imageSrc} alt={title} layout="fill" objectFit='cover' />
            </div>
            <p>{description}</p>
        </a >
    );
};

const FenceCards = () => {
    const fences = [
        {
            title: 'Wood Fences',
            imageSrc: '/wood-fence.jpeg', // Replace with your image path
            description: 'Wood fences are a timeless choice, offering a natural and traditional aesthetic. They are highly customizable in terms of size, shape, and color.',
            link: '#',
        },
        {
            title: 'Vinyl Fences',
            imageSrc: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project3/FullSize/IMG_1572.JPG?tr=w-700,h-700', // Replace with your image path
            description: 'Vinyl fencing is a low-maintenance and durable option. It comes in various styles and does not fade or rot like wood.',
            link: '#',
        },
        {
            title: 'Composite Fences',
            imageSrc: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project11/FullSize/project11Picture4.webp?tr=w-700,h-700', // Replace with your image path
            description: 'Aluminum fencing provides a durable and elegant solution, often used for decorative purposes or around pools.',
            link: '#',
        },
        {
            title: 'Custom Fences',
            imageSrc: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project14/FullSize/project1Picture1.webp?tr=w-700,h-700', // Replace with your image path
            description: 'Steel fences are known for their strength and durability, offering high security with a sophisticated look.',
            link: '#',
        },
        {
            title: "Corrugated Metal Fences",
            imageSrc: '/metal-fence.jpeg', // Replace with your image path
            description: 'Composite fencing is made from a blend of wood fibers and plastic polymers, offering the look of wood with enhanced durability.',
            link: '#',
        },
        {
            title: 'Chain Link Fences',
            imageSrc: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project4/FullSize/IMG_1877.JPG?tr=w-700,h-700', // Replace with your image path
            description: 'Chain link fences are a cost-effective and practical choice for securing a property without obstructing views.',
            link: '#',
        },
    ];

    return (
        <div>

            <div className={styles.fenceCardsContainer}>
                {fences.map((fence, index) => (
                    <FenceCard key={index} {...fence} />
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <Link href="/wood-fences" passHref>
                    <button className={styles.button}>View Wood Types</button>
                </Link>
                <Link href="/vinyl-fences" passHref>
                    <button className={styles.button}>View Vinyl Types</button>
                </Link>
                <Link href="/chainlink-fences" passHref>
                    <button className={styles.button}>View Metal Types</button>
                </Link>
            </div>
        </div>
    );
};

export default FenceCards;
