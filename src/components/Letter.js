import React from 'react'
import "./Mainpara.css"

function Letter(props) {
    let style
    if(props.check ===1)
        style = "maindiv correct"
    else if(props.check === -1)
        style = "maindiv wrong"
    else
        style = 'maindiv'
  return (
    <div className={style} style={{display: 'flex', width: '20px', height:'2rem'}}>{ props.letter}</div>
  )
}

export default Letter
