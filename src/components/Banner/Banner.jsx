import ImageBanner from '../../assets/banner3.jpg'
function Banner(){
    return(
    
            <div className='w-full h-[25rem] relative '>
                <img 
                src= {ImageBanner}
                className='h-full w-full'
                />
                <div className='absolute top-20 right-0 left-0 mx-auto w-[20rem]'>
                    <div className='gap-4 flex flex-col '>
                    <div className='font-semibold text-5xl text-white '> 
                        Crypto Tracker
                    </div>
                    <div className='font-semibold text-sm text-white text-center'>
                        Get all info regarding cryptocurrencies
                    </div>
                    </div>
                </div>
            </div>
            // <div className='w-full h-[25rem] relative'>
            //         <img src={ImageBanner} 
            //         className='h-full w-full'
            //         />
            //     <div className='absolute top-20 right-0 left-0 mx-auto w-[20rem] '>
            //         <div className='gap-4 flex flex-col'>
            //             <div className='font-semibold text-5xl text-white '>
            //                 Crypto Traker
            //             </div>
            //             <div className='font-semibold text-2xl text-white text-center'>
            //                 Get all info regarding cryptocurrencies
            //             </div>
            //         </div>

            //     </div>
            // </div>
        
    )
}
export default Banner