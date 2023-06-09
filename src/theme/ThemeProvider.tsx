import React, { FC, useMemo, useState } from 'react'
import { Theme, ThemeContext, lOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const defaultTheme = localStorage.getItem(lOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
    const [theme,setTheme]=useState<Theme>(defaultTheme)



    const defaultProps = useMemo(()=>({
        theme:theme,
        setTheme:setTheme,
    }),[theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;
