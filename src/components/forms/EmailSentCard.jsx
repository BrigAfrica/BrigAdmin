import tv from "./../../assets/illustrations/tv.svg"
const EmailSentCard = () => {
  return (
    <div className=" w-124 shadow-xl rounded-md px-12 py-14 z-9999 bg-white text-center">



        <div className = " flex justify-center pl-6">
            <img src={tv} 
                alt="tv" 
                loading = "lazy" 
                className = "w-44"
            />
        </div>

        <h3 className = "leading-9 font-extrabold text-real-black text-2xl">We&apos;ve sent a reset link to your email!</h3>
        <p className = " text-real-black leading-6 font-normal text-sm my-6">If you haven&apos;t  received it after a few minutes please, check your spam folder or resend the email.

        </p>
     
        <div className= "flex gap-2 justify-center items-center">
            <p className = "text-base text-real-black leading-4 font-medium"
            > 
            Haven&apos;t received the email?
            </p>
            <p  className = "text-light-green-100 font-extrabold text-base">Resend Link</p>
        </div> 
    </div>
  )
}

export default EmailSentCard