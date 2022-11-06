import { useContext } from 'react'
import RouterContext from './router-context'

export default function useRouter() {
  const { path } = useContext(RouterContext)

  return { path }
}
