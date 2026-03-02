import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({ children }) => {
  const username = "Tanmeet";
  return (
    <div>
<DataContext.Provider value={username}>{children}</DataContext.Provider>
    </div>
  )
}

export default UserContext
