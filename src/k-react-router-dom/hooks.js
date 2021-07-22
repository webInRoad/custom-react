import React, { useContext } from 'react'
import Context from './Context'
export function useHistory() {
  return useCustomContext().history
}

export function useLocation() {
  return useCustomContext().location
}

export function useRouteMatch() {
  return useCustomContext().match
}

export function useParams() {
  const match = useCustomContext().match
  return match ? match.params : {};
}

function useCustomContext() {
  return useContext(Context)
}