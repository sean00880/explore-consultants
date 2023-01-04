import React from 'react';
import Brand from '../slider/Brand';

const ClientOne = ({ addClass }) => {
    return (
        <>
            <section className={`clients-section ${addClass}`}>
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <ul className="clients-carousel">
                            <Brand />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientOne;