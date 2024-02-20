import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { modefunc } from "./ActionCreators"
import { useNavigate } from "react-router"


const Footer = () => {

    const store=useSelector((store:any)=>store.mode)
    const dispatch=useDispatch()
  
    const handleMode = () =>{
         if (store===true){
          document.body.classList.remove('bg-black')
          document.getElementById('footer')?.classList.add('bg-white')
          const white = document.getElementsByClassName('white')
          for (let i of white){
            i.classList.remove('text-white')
          }
          for ( let j of document.getElementsByClassName('intern')){
            j.classList.remove('bg-light-black')
          }
        }else{
          document.body.classList.add('bg-black')
          document.getElementById('footer')?.classList.remove('bg-white')
          const white = document.getElementsByClassName('white')
          for (let i of white){
            i.classList.add('text-white')
          }
          for ( let j of document.getElementsByClassName('intern')){
            j.classList.add('bg-light-black')
          }
        
  
      }
    }
  
    useEffect(()=>{
      if (store===false){
        dispatch(modefunc(false));
        handleMode();      
    }else{
      dispatch(modefunc(true))  
      handleMode();
    }
    },[store])

  return (
    <>
        <div className="bg-white" id="footer" style={{height:'10vh',position:'static',marginTop:'12px',bottom:0, width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <i className="fa-regular fa-copyright fa-lg white"></i> &nbsp; 
            <b className="white">2024 </b> &nbsp;
            <li className="white text-underline">Poorna Chandu Kumar Arava</li>
        </div>
    </>
  )
}

export default Footer
