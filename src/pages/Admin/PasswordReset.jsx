import AuthBackdrop from '../../components/admin/AuthBackdrop'
import ResetForm from '../../components/forms/ResetFormCard'

const PasswordReset = () => {
  return (
    <div>
            <AuthBackdrop/>
            <div className ="m-auto 
                absolute 
                top-[30%]
                left-1/2 
                -translate-x-1/2"
            >
                <ResetForm/>
            </div>

    </div>
  )
}

export default PasswordReset