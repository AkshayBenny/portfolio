import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [theme])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className='relative w-fit h-fit flex border rounded-full border-slate-200 dark:border-slate-800' onClick={renderThemeChanger}>
      <input
        type='checkbox'
        id='toggle-switch'
        className='cursor-pointer rounded-full h-6 w-12 appearance-none  bg-white dark:bg-slate-800  transition duration-200'
      />
      <div
        className={`absolute cursor-pointer w-7 h-7 rounded-full transition duration-150 bg-none top-[-2px] dark:translate-x-0 dark:text-yellow-300 translate-x-5 text-black left-0 flex items-center justify-center`}
      >
        <SunIcon className='w-4 h-4 hidden dark:flex' />
        <MoonIcon className='w-4 h-4 dark:hidden ' />
      </div>
      {/*  */}
    </div>
  )
}

export default ThemeToggleButton
