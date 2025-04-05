import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './FenceShapeShowcase.module.css'

const fenceShapes = [
    {
        name: 'Convex',
        description: 'Arching outward, convex fences create a gentle curve that adds visual interest and a welcoming feel to your property.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/d78f7b95-4814-4835-c316-8d45c8491d00/public'
    },
    {
        name: 'Concave',
        description: 'Curving inward, concave fences offer a unique aesthetic that can make your yard feel more spacious and open.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/8ff879bb-5e62-4194-fcd6-dfb03b97b100/public'
    },
    {
        name: 'Lattice',
        description: 'Featuring an open, crisscross pattern, lattice fences provide partial privacy while allowing light and air to flow through.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/25e050d6-db6c-45db-93e5-fc61669ba900/public'
    }
]

export default function FenceShapeShowcase() {
    const [activeShape, setActiveShape] = useState(fenceShapes[0])

    return (
        <section className={styles.showcase}>
            <h2 className={styles.title}>Explore Fence Shapes</h2>
            <p className={styles.subtitle}>Discover how different fence shapes can enhance your outdoor space</p>
            
            <div className={styles.content}>
                <div className={styles.shapeSelector}>
                    {fenceShapes.map((shape) => (
                        <button
                            key={shape.name}
                            className={`${styles.shapeButton} ${activeShape.name === shape.name ? styles.active : ''}`}
                            onClick={() => setActiveShape(shape)}
                        >
                            {shape.name}
                        </button>
                    ))}
                </div>
                
                <div className={styles.shapeInfo}>
                    <div className={styles.imageWrapper}>
                        {fenceShapes.map((shape) => (
                            <motion.div
                                key={shape.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeShape.name === shape.name ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                            >
                                <Image
                                    src={shape.image}
                                    alt={shape.name}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        className={styles.description}
                        key={activeShape.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{activeShape.name}</h3>
                        <p>{activeShape.description}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}