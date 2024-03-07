import React from 'react';

export default function CallToActionSection() {

    return (
        <div style={{display: 'flex', backgroundColor: 'black', height: '100%', alignItems: 'center',justifyContent: 'center', flexWrap: 'wrap', padding: '2em 5em', marginTop: '2em'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', marginRight: '5.7em'}}>
                <h2 style={{fontSize: '1.9em', fontWeight: '900'}}>
                    Speak to a Fence Expert Now!
                </h2>
                <p style={{fontSize: '1.3em', fontWeight: '500'}}>
                    Our dedicated staff is always ready to assist with any inquiries or guidance you 
                    require to begin your fencing endeavor. Feel free to contact us via our online 
                    form or give us a call to obtain the information you seek!
                </p>
            </div>
            <button style={{backgroundColor: 'darkgreen', padding: '1.5em 1.5em', fontSize: '1.5em', borderRadius: '10px', border: '2px solid white'}}>
                Contact Us Today
            </button>

        </div>
    )

}