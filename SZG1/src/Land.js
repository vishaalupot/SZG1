import './App.css'; // Ensure your CSS file is correctly imported
import React from 'react';
import design from './Assets/smart.png';
import define from './Assets/smart.png';
import build from './Assets/smart.png';
import support from './Assets/smart.png';
import dubai from './Assets/dubai.jpeg';
import abu from './Assets/abu.jpg';
import sharjah from './Assets/sharjah.jpg';

function Land() {
    return (
        <div className='h-[82vh] w-[100vw] bg-[#f7ede470] flex map'>
            <div className='w-[100vw] h-full flex items-center LandMain'>
            <h1>Guarantees The Most Cost-Effective Packages in the UAE</h1>
                <div className='grid grid-cols-3 gap-4'> {/* Added gap-4 for spacing */}
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front" 
                                style={{ 
                                    backgroundImage: `url(${dubai})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    backgroundRepeat: 'no-repeat' 
                                }}>
                                 <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey color with 50% opacity
                                    zIndex: 1
                                }} />
                                <div style={{
                                        position: 'relative', // Position relative to the card-front div
                                        zIndex: 2, // Higher z-index to be above the overlay
                                    }}>
                                    <p className='text-2xl font-semibold countryName'>Dubai</p>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className='cardFirst'>Starting From</div>
                                <div className='cardSecond'>10,999 AED</div>
                                <button className='button1'> Enquire Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front"
                                style={{ 
                                    backgroundImage: `url(${abu})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    backgroundRepeat: 'no-repeat'
                                }}>
                            <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey color with 50% opacity
                                    zIndex: 1
                                }} />
                                <div style={{
                                        position: 'relative', // Position relative to the card-front div
                                        zIndex: 2, // Higher z-index to be above the overlay
                                    }}>
                                    <p className='text-4xl font-semibold countryName'>Abu Dhabi</p>
                                </div>
                            </div>
                            <div className="card-back">
                            <div className='cardFirst'>Starting From</div>
                                <div className='cardSecond'>10,999 AED</div>
                                <button className='button1'> Enquire Now </button>                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front"
                                style={{ 
                                    backgroundImage: `url(${sharjah})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    backgroundRepeat: 'no-repeat' 
                                }}>
                                    <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey color with 50% opacity
                                    zIndex: 1
                                }} />
                                <div style={{
                                        position: 'relative', // Position relative to the card-front div
                                        zIndex: 2, // Higher z-index to be above the overlay
                                    }}>
                                    <p className='text-2xl font-semibold countryName'>Sharjah</p>
                                </div>
                            </div>
                            <div className="card-back">
                            <div className='cardFirst'>Starting From</div>
                                <div className='cardSecond'>10,999 AED</div>
                                <button className='button1'> Enquire Now </button>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Land;
