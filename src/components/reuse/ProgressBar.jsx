 

const ProgressBar = ({
    bgColor,
    height,
    percentage,
    barWidthInpx,

}) => {
    const calcWidth = Math.floor((percentage/100) * barWidthInpx)
 
  return (
    <div className= {`${height ? height : 'h-2'} 
                        ${barWidthInpx? `w-[${barWidthInpx}px]` : 'w-full'}
                        bg-[#e9e7fd]
                        rounded-xl
                       m-5
                       
        `}>

            <div className= {`h-full
                                rounded-md
                                text-right
                                `} style={ {width:`${calcWidth}px`,
                                             backgroundColor:`${bgColor ? bgColor : 'green'}`}}>

    
            </div>

    </div>
  )
}

export default ProgressBar