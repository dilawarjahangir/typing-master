import { AiFillLinkedin } from "react-icons/ai"; 
import { BsGithub } from "react-icons/bs"; 
import React from 'react';
import Select from 'react-select';
import { useTheme } from '../Context/ThemeContext';
import { themeOptions } from '../Utils/theme';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const {theme, setTheme, defaultTheme} = useTheme();

    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }


  return (
    <div className='footer'>

      <div className="intructions">
        <div className="hint">
          press <kbd>TAB</kbd> to open commands
        </div>
      </div>

      <div className="actual-footer">
        <div className="links">
          <a href='https://github.com/dilawarjahangir' target="_blank">
         <BsGithub size={30} style={{marginRight:"5px"}}  />
          </a>
          <a href='https://www.linkedin.com/in/dilawar-jahangir-069468166/' target="_blank">
          <AiFillLinkedin size={30} />
          </a>
            
        </div>

        <div className="themes">  
          <Select
                options={themeOptions}
                onChange={handleThemeChange}
                menuPlacement='top'
                sty
                defaultValue={{value:defaultTheme, label: defaultTheme.label}}
                styles={{
                  
                  control:  styles => ({...styles, backgroundColor: theme.background}),
                  menu: styles => ({...styles, backgroundColor: theme.background}),
                  option: (styles, {isFocused}) => {
                      return {
                          ...styles,
                          backgroundColor: (isFocused)? theme.background : theme.textColor,
                          color: (isFocused)? theme.textColor : theme.typeBoxText,
                          cursor: 'pointer'
                      }
                  },
                  singleValue: styles => ({...styles, color: theme.title}),
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default Footer