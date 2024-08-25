import React from 'react'
// import AccountIcon from './AccountIcon'
// import CompareButton from './CompareButton'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            
              Typing Master
            
            <div style={{marginLeft:'-80px', marginTop: '15px'}}>
              {/* <CompareButton/> */}
            </div>
            
        </div>
        <div className="user-logo" style={{marginTop: '15px'}}>
            {/* <AccountIcon/> */}
        </div>
    </div>
  )
}

export default Header