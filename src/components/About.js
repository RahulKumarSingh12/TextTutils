import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:"white"
    // });

    // const [btntext,setBtnText]=useState("Enable Dark Mode");

    // const togglestyyle=()=>{
    //     if(myStyle.color==='black'){
            
    //         setMyStyle({ 
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         });

    //         setBtnText("Enable light Mode");

    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid black',
    //         })

    //         setBtnText("Enable Dark Mode");
    //     }
    // }


    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',

    }



 

    return (
        <div className="container" >
            <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                
                        <button style={myStyle}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong> Analyze Your Text </strong> 
                        </button>
              
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                 
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>     Free To Use   </strong> 
                        </button>
                    
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
    
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong> Browser Compatible </strong>  
                        </button>
        
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button  onClick={togglestyyle} type='button' className='btn btn-primary'> {btntext} </button>
            </div> */}
        </div>
    )
}
