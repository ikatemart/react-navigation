import { useState, useEffect } from 'react'
import RouterContext from './router-context'

export default function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <RouterContext.Provider value={{ path, setPath }}>
      {children}
    </RouterContext.Provider>
  )
}
