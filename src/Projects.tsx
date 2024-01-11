import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'

const Projects = () => {
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
          <h1 className='white bolder'>Projects</h1>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Pick a Movie Website</h2>  
            <p className='fs-18 p-1 white'>Using React, Redux, TypeScript, HTML, CSS, Bootstrap and JS</p> 
            <p className='fs-18 p-1 white'>Dec 2023</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Online Shopping Cart Website</h2>  
            <p className='fs-18 p-1 white'>Using React, Redux, TypeScript, HTML, CSS, Bootstrap and JS</p> 
            <p className='fs-18 p-1 white'>Dec 2023</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Weather Website</h2>  
            <p className='fs-18 p-1 white'>Using React, TypeScript, HTML, CSS, Bootstrap and JS</p> 
            <p className='fs-18 p-1 white'>Dec 2023</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Smart Shopping using Radio Frequency Identification</h2>  
            <p className='fs-18 p-1 white'>Using Node MCU, I2C Converter, RFID Scanner, Recifiers and LCD Display.</p> 
            <p className='fs-18 p-1 white'>Jan 2023 - June 2023</p>         
          </div>
        </div>
      </div>         
    </>
  )
}

export default Projects
