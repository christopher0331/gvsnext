import Image from 'next/image';
import styles from './FenceCard.module.css'; // Import the CSS module
import Link from 'next/link';
import woodFence from '../../public/wood-fence.jpeg';
import vinylFence from '../../public/vinyl-fence.jpeg';
import aluminumFence from '../../public/aluminum-fence.jpeg';
import metalFence from '../../public/metal-fence.jpeg';
import steelFence from '../../public/steel-fence.jpeg';

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
            imageSrc: woodFence, // Replace with your image path
            description: 'Wood fences are a timeless choice, offering a natural and traditional aesthetic. They are highly customizable in terms of size, shape, and color.',
            link: '#',
        },
        {
            title: 'Vinyl Fences',
            imageSrc: vinylFence, // Replace with your image path
            description: 'Vinyl fencing is a low-maintenance and durable option. It comes in various styles and does not fade or rot like wood.',
            link: '#',
        },
        {
            title: 'Aluminum Fences',
            imageSrc: aluminumFence, // Replace with your image path
            description: 'Aluminum fencing provides a durable and elegant solution, often used for decorative purposes or around pools.',
            link: '#',
        },
        {
            title: 'Steel Fences',
            imageSrc: steelFence, // Replace with your image path
            description: 'Steel fences are known for their strength and durability, offering high security with a sophisticated look.',
            link: '#',
        },
        {
            title: "Metal Fences",
            imageSrc: metalFence, // Replace with your image path
            description: 'Composite fencing is made from a blend of wood fibers and plastic polymers, offering the look of wood with enhanced durability.',
            link: '#',
        },
        {
            title: 'Chain Link Fences',
            imageSrc: metalFence, // Replace with your image path
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
                <Link href="/fence-types" passHref>
                    <button className={styles.button}>View All Fence Types</button>
                </Link>
            </div>
        </div>
    );
};

export default FenceCards;
