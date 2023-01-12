import React from 'react';
import Brand from '../slider/Brand';

const ClientTwo = ({addClass}) => {
    return (
        <>
            <section className={`clients-section ${addClass}`}>
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <ul className="clients-carousel">
                            <Brand />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientTwo;