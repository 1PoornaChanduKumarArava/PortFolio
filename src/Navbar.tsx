import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { modefunc } from "./ActionCreators"

const Navbar = () => {
    const [mode,setMode]=useState<boolean>(true)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const store=useSelector((store:any)=>store.mode)

    const handleMode = () =>{
       if (store===true){
        document.body.classList.remove('bg-black')
        document.getElementById('navbar')?.classList.add('bg-white')
        const white = document.getElementsByClassName('white')
        for (let i of white){
          i.classList.remove('text-white')
        }
        for ( let j of document.getElementsByClassName('intern')){
          j.classList.remove('bg-light-black')
        }
      }else{
        document.body.classList.add('bg-black')
        document.getElementById('navbar')?.classList.remove('bg-white')
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
    dispatch(modefunc(mode));
    handleMode();
  },[store,mode])



    const navheads = useRef<Array<HTMLElement | null>>([])
    const handleNavHeads = (e:any) =>{
      for (let i of navheads.current){
        i!.classList.remove('bold', 'underline')
      }
      e.classList.add('bold','underline')
    }

  return (
    
      <div id="navbar" className="bg-white p-2 d-flex space-between justify-center w-100 m-0">
        <div className="w-40 wi-40 d-flex">
            <li className="fs-24 fw-700 pointer white"  onClick={()=>{navigate('/'); handleNavHeads(navheads.current[0]);}}>Poorna Chandu Kumar Arava &nbsp;</li>
            <li className="text-black fs-24 fw-700 white"  onClick={()=>{setMode(!mode);handleMode();}}> {mode ? <i className="fa-regular fa-moon text-black white"></i> : <i className="fa-solid fa-sun text-black text-white"></i>}</li>
        </div>
        <div className="d-flex space-around w-60 wi-60">
            <li ref={(e)=>navheads.current[0]=e} className='fs-18 pointer white bold underline' onClick={(e)=>{handleNavHeads(e.target);navigate('/');}}>Home</li>
            <li ref={(e)=>navheads.current[1]=e} className='fs-18 pointer white' onClick={(e)=>{handleNavHeads(e.target);navigate('/experience');}}>Experience</li>
            <li ref={(e)=>navheads.current[2]=e} className='fs-18 pointer white' onClick={(e)=>{handleNavHeads(e.target);navigate('/education');}}>Education</li>
            <li ref={(e)=>navheads.current[3]=e} className='fs-18 pointer white' onClick={(e)=>{handleNavHeads(e.target);navigate('/projects');}}>Projects</li>
            <li ref={(e)=>navheads.current[4]=e} className='fs-18 pointer white' onClick={(e)=>{handleNavHeads(e.target);navigate('/certifications');}}>Certifications</li>    
            <li ref={(e)=>navheads.current[5]=e} className='fs-18 pointer white' onClick={(e)=>{handleNavHeads(e.target);navigate('/awards');}}>Awards</li>     
        </div>
      </div>
    
  )
}

export default Navbar
