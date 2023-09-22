import AuthBackdrop from "../../components/admin/AuthBackdrop"
import EmailSentCard from '../../components/forms/EmailSentCard'

const EmailSent = () => {
  return (
    <div>
            <AuthBackdrop/>
            <div className ="m-auto 
                absolute 
                top-[40%]
                left-1/2 
                -translate-x-1/2"
            >
                <EmailSentCard/>
            </div>

    </div>
  )
}

export default EmailSent