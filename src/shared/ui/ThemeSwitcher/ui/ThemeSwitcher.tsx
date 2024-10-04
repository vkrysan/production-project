import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps
   

) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {} , [className])} 
      onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon width={40} height={40}/> : <LightIcon width={40} height={40}/>}
    </Button>
  )
}

