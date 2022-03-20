import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import Chat from './Chatting';
import { AiOutlineMessage,AiOutlineCloseCircle} from "react-icons/ai";


function ConstructionService() {
    const history = useHistory();
    const LetsBuild =()=>{
      history.push("/letsbuild");
         }

     function openForm() 
           {
    document.getElementById("myForm").style.display = "block";
           }
        
    function closeForm() 
           {
     document.getElementById("myForm").style.display = "none";
           }
  
    const styles = {
      contentDiv: {
          borderRadius:"85px",
          background:"#00134d", 
          color: "white", 
          padding: "16px 20px",
          border: "0px", 
          cursor: "pointer",
          opacity:"0.8", 
          position:"fixed",
          bottom:"23px",
          right:"28px", 
          width:"72px",
        
      },

      Content: {
        display: 'none', position: 'fixed', bottom: '0', right: '15px', border: '3px solid #f1f1f1',
        zIndex:'1'
      },
      Form:{
        maxwidth:'200px', padding:'0px', background: 'white', height:'350px'
      },
      btn: {
        background:'#2874f0', color:'white', padding:'10px 20px',
        border:'none', cursor:'pointer',  width:'100%', marginbottom:'30px'

      },
      Editor:
      {
       font: '400 0.812rem Lato,sans-serif',
       maxWidth:'95%',
       width:'95%',
       minHeight: '4rem',
      // maxHeight:'9.375rem',
       resize:'none',
       outline: 'none',
       border: '1px 0px 0x 1px solid blue',

       boxSizing:'border-box',
       overflow: 'hidden',
       //boxShadow: '5px 5px blue',
       //padding: '0 5.5rem 0 0',
       margin: '0rem 1rem 1rem .5rem',
      },


    };
  
    return (
        <div>
             <hr />
      <div className="container">
        <h1>Hire the best construction<br/> service</h1>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-4 col-xs-12 ">
              <div className="p-2 shadow">
              <h3><i className="fa fa-home mr-3"></i>1000+</h3>
            <p className="text-center">Homes</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12">
          <div className="p-2 shadow">
              <h3><i className="fa fa-check-square mr-3"></i>100+</h3>
            <p className="text-center">Quality Checks</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12">
          <div className="p-2 shadow">
              <h3><i className="fa fa-inr mr-3"></i>100%</h3>
            <p className="text-center">Safe Money Transaction</p>
              </div>
          </div>
        </div>

        <div>

     <button style={styles.contentDiv} onClick={ openForm }>
       <span style={{fontSize:'25px'}}><AiOutlineMessage /></span></button>

     <div style={ styles.Content } id="myForm" >

       <form style={styles.Form}>

         <h4>Hi there 👋 Need help ? <span onClick={ closeForm } style={{fontSize:'35px',color:'blue',float:'right'}}><AiOutlineCloseCircle /></span>
        </h4>

          {/* <label for="msg"><b>Message</b></label>  */}
          <textarea placeholder="Type here and press enter.." style={ styles.Editor} >
          </textarea>

        {/* <textarea placeholder="Type message.." style={{border:'none'}} name="msg" ></textarea> */}

        <button type="submit"  style={ styles.btn} >Send</button>

        {/* <button type="button" className="btn cancel" onClick={ closeForm }>
         close</button> */}
         {/* <span style={{fontSize:'20px'}}><AiOutlineClose /></span> */}
        </form>
       
       </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button  onClick={LetsBuild}>Let`s Build</Button>
        </div>
      </div>
        </div>
    )
}

export default ConstructionService;
