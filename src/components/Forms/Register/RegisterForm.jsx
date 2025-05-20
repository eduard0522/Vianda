import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'

import InputForm from '../Login/InputForm'
import { RegisterRequest } from '../../../axios/Auth'
import ModalContext from '../../Context/Modals/ModalContext'

const RegistrationForm = () => {
  const navigate = useNavigate()
  const { changeStateRegistrationForm , } = useContext(ModalContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    setError('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.phone
    ) {
      setError('Todos los campos son requeridos')
      return false
    }
    return true
  }
const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!validate()) return
    setLoading(true)
    try {
      const response = await RegisterRequest(formData, setLoading, setError)
      if (response) {
        changeStateRegistrationForm()
      } else{
        setError('Creadenciales invalidos')
      }
    } catch (e) {
      console.debug(e)
      setError('Ocurrió un error al iniciar sesión')
    } finally{
      setLoading(false)
    }
  }
  return (
    <article className='py-8 px-12 rounded-md backdrop-blur-sm bg-[#ffffff] shadow-md   flex flex-col gap-4'>
      <h1 className='flex text-5xl font-bold'>
        <span className='bg-Primary-600 rounded-sm px-1 text-center flex items-center justify-center  text-white'>
          {' '}
          V{' '}
        </span>{' '}
        ianda
      </h1>
      <h2 className='text-xl font-bold text-Primary-600'>
        {' '}
        Bienvenido a vianda{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <InputForm
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='name'
            value={formData.name}
            placeholder='Nombre'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='phone'
            value={formData.phone}
            placeholder='Teléfono'
            handleChange={handleChange}
          />
          <InputForm
            type='password'
            name='password'
            value={formData.password}
            placeholder='Contraseña'
            handleChange={handleChange}
          />
          <button
            className='w-full rounded-md bg-Primary-600 py-2 px-4 text-white font-bold hover:bg-Primary-800'
            type='submit'
            disabled={loading}
          >
            {' '}
            Crear cuenta{' '}
          </button>

          <h3 className='font-semibold'>
            {' '}
            ¿ Ya tienes una cuenta ?{' '}
            <Link to="/login">
              <span className='text-Primary-600 font-bold underline hover:text-Primary-800 cursor-pointer'>
                {' '}
                Inicia Sesión{' '}
              </span>
            </Link>
          </h3>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>
      </form>
    </article>
  )
}

export default RegistrationForm
