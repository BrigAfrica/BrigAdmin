import BrigLogo from "./../../assets/logo/logo.svg";
import BrigLogoAlt from "./../../assets/logo/logoalt.svg";
const AuthBackdrop = () => {
  return (

        <div className="w-full relative">
         <section id = "top" 
                className="
                    h-96 
                    w-screen
                    bg-loginBackdrop
                    bg-hero_size
                  bg-gray-100 
                    bg-left_center 
                    bg-no-repeat  
                    flex  
                    items-center
                    justify-center"
                >
            
            <div id="ImgBox" className=" mb-24">
              <img src={BrigLogo} alt="logo"     
                className="w-[101px] h-[66px]"/>
            </div>
        </section>

        <section id="bottom" className="h-124
            flex justify-center items-end mb-6">

            
            <div id="textBox" className="flex items-center gap-1">
                <p className="text-xs font-normal relative top-0.5">Powered by </p>
                <img src={BrigLogoAlt} alt="logo"     
                className="w-[43px] h-[25px]"/>
            </div>
        </section>
    </div>

  )
}   

export default AuthBackdrop