import { useEffect, useState } from 'react'
import { SGID_BACKEND_URL } from '../config/constants'

const useAuth = () => {

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`/myapi/api/userinfo`, {
      credentials: 'include',
    })
      .then(async (r) => await r.json())
      .then((data) => {
        setIsLoading(false)
        setUser(data)
      })
      .catch(() => {
        setIsLoading(false)
        setUser(null)
      })
  }, [])

  return {
    isLoading,
    user,
  }
}

export default useAuth;