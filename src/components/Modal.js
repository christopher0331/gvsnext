import React from 'react';
import styles from './AboutUs.module.scss';

const Modal = (props) => {
    if(props.modal === 'Visit')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                1. Visit
            </div>
            <div className={styles.modalDescription}>
                The owner, most likely, will show up at an agreed upon time to inpect the 
                project and collect information that will help determine the estimate.
            </div>
        </div>
    )
    if(props.modal === 'Estimate')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                2. Estimate
            </div>
            <div className={styles.modalDescription}>
                An estimate will be drawn up with a layout and detailed line items for 
                each charge. This estimate may or may not include permit costs. For most 
                projects the permit costs are included. For special projects, more 
                informationn and collaboration might be required with HOA and local governments.
            </div>
        </div>
    )
    if(props.modal === 'Permits')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                3. Permits
            </div>
            <div className={styles.modalDescription}>
                Once we determine all the required permits and licensing we send in the proper 
                applications and report back to you with updated timelines.
            </div>
        </div>
    )
    if(props.modal === 'Removal')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                4. Removal
            </div>
            <div className={styles.modalDescription}>
                For most small to medium sized jobs, we get the old fence removed within a day. 
                We handle all dump costs and services, ensuring you have no clean up to worry about.
                All of the dirt will be removed along with any debree or wood from the previous fence.
            </div>
        </div>
    )
    if(props.modal === 'PostHoles')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                5. Post Holes
            </div>
            <div className={styles.modalDescription}>
                Usually on the same day as the removal process we get the post holes dug and 
                posts set for the build team to come in and finsh the job. We throw all the dirt 
                into bags and despose of them, leaving your new fence looking beautiful 
                without mounds of dirt near the posts.
            </div>
        </div>
    )
    if(props.modal === 'Construct')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                6. Construct Fence 
            </div>
            <div className={styles.modalDescription}>
                After the post are set, the material gets dispersed around the perimeter of the fence
                and our build team starts putting up the material on the posts, the project is almost 
                complete!
            </div>
        </div>
    )
    if(props.modal === 'CleanUp')
    return(
        <div className={styles.modalBox}>
            <div className={styles.modalTitle}>
                7. Clean Up
            </div>
            <div className={styles.modalDescription}>
                The team throws all of the bags of dirt from the holes in the dump trailer along with
                old fencing. The streets get power washed, and any dirt, rocks or misplaced landscape 
                get cleaned up, leaving our worksite cleaner than we found it and with a brand new fence!
            </div>
        </div>
    )

}

export default Modal;