import React from 'react' //rfce

function Alert(props) {

    const captilaize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (

  <div style={{height:'50px'}}>
  {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong> { captilaize(props.alert.type) } </strong> : {props.alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"></button>
</div>}
</div>

  )
}

export default Alert
