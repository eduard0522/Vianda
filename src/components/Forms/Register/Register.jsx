import { useContext } from 'react'
import LayoutForms from '../Layout'
import RegistrationForm from './RegisterForm'
import ModalContext from '../../Context/Modals/ModalContext'
import { ConfirmModal } from '../../Modals/ConfirmModal'

const Register = () => {
  const { registrationForm, changeStateRegistrationForm } =
    useContext(ModalContext)
  return (
    <>    
      <LayoutForms
        form='register'
      >
        <RegistrationForm />
      </LayoutForms>

      <ConfirmModal 
          modal={registrationForm} 
          setModal={changeStateRegistrationForm} 
          text="Felicidades, usuario registrado con éxito."
          textButton="Pedir"
          link="/"
        />
      </>
  )
}

export default Register
