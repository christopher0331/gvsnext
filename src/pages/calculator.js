import React, { useState, useEffect } from 'react';
import styles from '../components/Calculator.module.scss';

const FenceCalculator = () => {
    const [fenceLength, setFenceLength] = useState('');
    const [picketWidth, setPicketWidth] = useState('');
    const [picketWidthUnit, setPicketWidthUnit] = useState('in');
    const [picketSpacing, setPicketSpacing] = useState('');
    const [picketSpacingUnit, setPicketSpacingUnit] = useState('in');
    const [railsPerSection, setRailsPerSection] = useState('');
    const [fenceHeight, setFenceHeight] = useState(6);
    const [postLength, setPostLength] = useState('');
    const [postShape, setPostShape] = useState('Cuboid');
    const [postWidth, setPostWidth] = useState('');
    const [activeTab, setActiveTab] = useState('pickets');
    const [fenceType, setFenceType] = useState('standard');

    const [totalPickets, setTotalPickets] = useState(0);
    const [totalRails, setTotalRails] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalConcreteBags, setTotalConcreteBags] = useState(0);
    const [totalTopRails, setTotalTopRails] = useState(0);
    const [totalPostCaps, setTotalPostCaps] = useState(0);
    const [totalTrimPieces, setTotalTrimPieces] = useState(0);

    const convertToInches = (value, unit) => {
        return unit === 'ft' ? parseFloat(value) * 12 : parseFloat(value);
    };

    useEffect(() => {
        const calculateStandardFence = () => {

            const sections = Math.ceil(fenceLength / 8);
            const posts = sections + 1;
            const topRails = Math.ceil(fenceLength / 8);
            const postCaps = posts;
            const trimPieces = Math.ceil(fenceLength / 8);
            setTotalTopRails(topRails);
            setTotalPostCaps(postCaps);
            setTotalTrimPieces(trimPieces);

            // Calculate pickets and rails for premium fence
            const rails = Math.ceil(sections * railsPerSection * 1.1);
            const pickets = Math.ceil((fenceLength * 12) / (convertToInches(picketWidth, picketWidthUnit) - 0.5) * 1.1);
            setTotalRails(rails);
            setTotalPickets(pickets);
            setTotalPosts(posts);
        };

        const calculateHorizontalFence = () => {
            const heightInInches = fenceHeight * 12;
            const boardsPerSection = Math.ceil(heightInInches / 5.5);
            const sectionLength = fenceHeight === 5 ? 5 : 6;
            const sections = Math.ceil(fenceLength / sectionLength);
            const multiplier = fenceHeight === 5 ? 1.15 : 1.25;
            const totalBoards = Math.ceil(boardsPerSection * sections * multiplier);
            setTotalPickets(totalBoards);

            const rails = Math.ceil(sections * railsPerSection * 1.1);
            setTotalRails(rails);
        };

        const calculatePremiumFence = () => {
            const sections = Math.ceil(fenceLength / 8);
            const posts = sections + 1;
            const topRails = Math.ceil(fenceLength / 8);
            const postCaps = posts;
            const trimPieces = Math.ceil(fenceLength / 8);
            setTotalTopRails(topRails);
            setTotalPostCaps(postCaps);
            setTotalTrimPieces(trimPieces);

            // Calculate pickets and rails for premium fence
            const rails = Math.ceil(sections * railsPerSection * 1.1);
            const pickets = Math.ceil((fenceLength * 12) / (convertToInches(picketWidth, picketWidthUnit) - 0.5) * 1.1);
            setTotalRails(rails);
            setTotalPickets(pickets);
        };

        const calculateConcreteBags = () => {
            const concretePerPost = 100; // lbs
            const bagWeight = 60; // lbs per bag
            const totalConcreteWeight = totalPosts * concretePerPost;
            const bags = Math.ceil(totalConcreteWeight / bagWeight);
            setTotalConcreteBags(bags);
        };

        if (fenceType === 'standard') {
            calculateStandardFence();
        } else if (fenceType === 'horizontal') {
            calculateHorizontalFence();
        } else if (fenceType === 'premium') {
            calculatePremiumFence();
        }

        calculateConcreteBags();
    }, [fenceLength, picketWidth, picketWidthUnit, picketSpacing, picketSpacingUnit, railsPerSection, postLength, postShape, postWidth, fenceType, totalPosts, fenceHeight]);

    const handleReset = () => {
        setFenceLength('');
        setPicketWidth('');
        setPicketWidthUnit('in');
        setPicketSpacing('');
        setPicketSpacingUnit('in');
        setRailsPerSection('');
        setFenceHeight(6);
        setPostLength('');
        setPostShape('Cuboid');
        setPostWidth('');
        setFenceType('standard');
    };

    const handleTabClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    return (
        <div className={styles.fenceCalculator}>
            <header>
                <h1>Fence Calculator</h1>
                <p>Calculate fencing materials with ease.</p>
                <button className={styles.learnMore}>Learn More</button>
            </header>

            <form>
                <section>
                    <h2>Fence Details</h2>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={fenceLength}
                            onChange={(e) => setFenceLength(e.target.value)}
                            placeholder="Fence Length (e.g., 100ft)"
                        />
                        <select
                            value={fenceType}
                            onChange={(e) => setFenceType(e.target.value)}
                        >
                            <option value="standard">Standard Vertical</option>
                            <option value="horizontal">Horizontal</option>
                            <option value="premium">Premium</option>
                        </select>
                        {fenceType === 'horizontal' && (
                            <select
                                value={fenceHeight}
                                onChange={(e) => setFenceHeight(parseInt(e.target.value))}
                            >
                                <option value={6}>Standard (6&apos; between posts)</option>
                                <option value={5}>Boulder (5&apos; between posts)</option>
                            </select>
                        )}
                    </div>
                    <div className={styles.result}>
                        <p>Total Pickets/Boards: {totalPickets}</p>
                        <p>Total Rails: {totalRails}</p>
                        <p>Total Posts: {totalPosts}</p>
                        <p>Total Concrete Bags: {totalConcreteBags}</p>
                        {fenceType === 'premium' && (
                            <>
                                <p>Total Post Caps: {totalPostCaps}</p>
                                <p>Total Trim Pieces: {totalTrimPieces}</p>
                            </>
                        )}
                    </div>
                </section>

                <nav>
                    <button
                        className={`${styles.pickets} ${activeTab === 'pickets' ? styles.activeTab : ''}`}
                        onClick={(e) => handleTabClick(e, 'pickets')}
                    >
                        Pickets
                    </button>
                    <button
                        className={`${styles.rails} ${activeTab === 'rails' ? styles.activeTab : ''}`}
                        onClick={(e) => handleTabClick(e, 'rails')}
                    >
                        Rails
                    </button>
                    <button
                        className={`${styles.posts} ${activeTab === 'posts' ? styles.activeTab : ''}`}
                        onClick={(e) => handleTabClick(e, 'posts')}
                    >
                        Posts
                    </button>
                    <button
                        className={`${styles.concrete} ${activeTab === 'concrete' ? styles.activeTab : ''}`}
                        onClick={(e) => handleTabClick(e, 'concrete')}
                    >
                        Concrete
                    </button>
                </nav>

                {activeTab === 'pickets' && (
                    <section>
                        <h2>Number of Pickets Needed</h2>
                        <div className={styles.inputGroup}>
                            <input
                                type="number"
                                value={picketWidth}
                                onChange={(e) => setPicketWidth(e.target.value)}
                                placeholder="Picket Width"
                            />
                            <select
                                value={picketWidthUnit}
                                onChange={(e) => setPicketWidthUnit(e.target.value)}
                            >
                                <option value="in">in</option>
                                <option value="ft">ft</option>
                            </select>
                            <input
                                type="number"
                                value={picketSpacing}
                                onChange={(e) => setPicketSpacing(e.target.value)}
                                placeholder="Picket Spacing"
                            />
                            <select
                                value={picketSpacingUnit}
                                onChange={(e) => setPicketSpacingUnit(e.target.value)}
                            >
                                <option value="in">in</option>
                                <option value="ft">ft</option>
                            </select>
                        </div>
                    </section>
                )}

                {activeTab === 'rails' && (
                    <section>
                        <h2>Number of Rails Needed</h2>
                        <div className={styles.inputGroup}>
                            <select
                                value={railsPerSection}
                                onChange={(e) => setRailsPerSection(e.target.value)}
                            >
                                <option value="">Rails per Section</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </section>
                )}

                {activeTab === 'posts' && (
                    <section>
                        <h2>Number and Length of Posts</h2>
                        <div className={styles.inputGroup}>
                            <input
                                type="number"
                                value={postLength}
                                onChange={(e) => setPostLength(e.target.value)}
                                placeholder="Post Length (e.g., 8ft)"
                            />
                        </div>
                    </section>
                )}

                {activeTab === 'concrete' && (
                    <section>
                        <h2>Concrete for Post Footing</h2>
                        <div className={styles.inputGroup}>
                            <select
                                value={postShape}
                                onChange={(e) => setPostShape(e.target.value)}
                            >
                                <option value="Cuboid">Cuboid</option>
                                <option value="Cylinder">Cylinder</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="number"
                                value={postWidth}
                                onChange={(e) => setPostWidth(e.target.value)}
                                placeholder="Post Width (e.g., 6in)"
                            />
                        </div>
                    </section>
                )}

                <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleReset} className={styles.reset}>
                        Reset Calculator
                    </button>
                </div>
            </form>

            <footer>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.iconFacebook}></a>
                    <a href="#" className={styles.iconTwitter}></a>
                    <a href="#" className={styles.iconInstagram}></a>
                </div>
                <p>&copy; 2023 FencePro. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FenceCalculator;