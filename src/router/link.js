import { useContext } from 'react'
import RouterContext from './router-context'

export default function Link({ children, ...attrs }) {
  const { setPath } = useContext(RouterContext)

  function onClick(e) {
    e.preventDefault()

    const href = e.currentTarget.getAttribute('href')
    setPath(href)
    window.history.pushState(null, null, href)
  }

  return (
    <a {...attrs} onClick={onClick}>
      {children}
    </a>
  )
}
