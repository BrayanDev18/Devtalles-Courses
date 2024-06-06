import { useEffect, useState } from "react"

export const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    name: 'brayan',
    email: 'brayan@gmail.com'
  })

  const handleChange = ({ target }) => {
    const { name, value } = target

    setFormValues({
      ...formValues,
      [name]: value
    })

  }

  useEffect(() => {
    console.log('se llamó');
    return {
      
    }
  }, [])

  return (
    <form className="max-w-md mx-auto border-2 rounded-md p-3 border-emerald-700">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          value={formValues.email}
          onChange={handleChange}
          name="userName"
          id="userName"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="userName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          value={formValues.name}
          onChange={handleChange}
          name="userEmail"
          id="userEmail"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="userEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User</label>
      </div>
    </form>
  )
}