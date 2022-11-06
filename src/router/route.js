import { useContext } from 'react'
import RouterContext from './router-context'

export default function Route({ href, children }) {
  const { path } = useContext(RouterContext)

  return <>{href === path ? children : ''}</>
}
