import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'

const Experience = () => {
  const store=useSelector((store:any)=>store.mode)
  console.log(store,"BOOLEAN")
  const dispatch=useDispatch()

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
    <div className='d-flex justify-center'>
        <div className='mt-2 text-left'>
          <h1 className='white bolder'>Experience</h1>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Software Engineer Intern</h2>  
            <p className='fs-18 p-1 white'>Talent Pace (Bangalore, India)</p> 
            <p className='fs-18 p-1 white'>Nov 2023 - Ongoing</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Teaching Assistant</h2>  
            <p className='fs-18 p-1 white'>CCBP NXT WAVE (India)</p> 
            <p className='fs-18 p-1 white'>Oct 2023 - Nov 2023</p>         
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Experience
