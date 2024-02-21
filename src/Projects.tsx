import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'

const Projects = () => {
  const store=useSelector((store:any)=>store.mode)
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
              <h2 className='bolder fs-22 p-1 white'>Plant Management</h2>  
              <p className='fs-18 p-1 white'>
                <li className='disc'>Backend: ASP.NET Core-Dapper</li>
                <li className='disc'> Database: Microsoft SQL Server.</li> 
                <li className='disc'>Frontend: React, Redux, TypeScript, MUI, HTML, CSS, Bootstrap and JS</li>
                <li className='disc'>Authentication: With unique random salts for enhanced password encryption.</li>
                <li className='disc'>Also, Utilized the IWebHost environment in ASP.NET Core for handling image uploads, Excel uploads with ExcelJS. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and enhanced system security using a custom random-generated captcha.</li>
              </p>
              <p className='fs-18 p-1 white'>Jan 2024 - Feb 2024</p>         
          </div>
          <a href='https://pick-a-movie-for-me.vercel.app/' target='_blank' style={{color:'black',textDecoration:'none',cursor:'pointer'}} >
            <div className='intern bg-white p-2 br-2 mt-2 w-955'>
              <h2 className='bolder fs-22 p-1 white'>Pick a Movie Website &nbsp; &nbsp; <i className="fa-solid fa-right-from-bracket fa-fade"></i> </h2>  
              <p className='fs-18 p-1 white'>Using React, Redux, TypeScript, HTML, CSS, Bootstrap and JS</p> 
              <p className='fs-18 p-1 white'>Dec 2023</p>         
            </div>
          </a>
          <a href='https://shoppingcart-woad-delta.vercel.app/' target='_blank' style={{color:'black',textDecoration:'none',cursor:'pointer'}} >
            <div className='intern bg-white p-2 br-2 mt-2 w-955'>
              <h2 className='bolder fs-22 p-1 white'>Online Shopping Cart Website &nbsp; &nbsp; <i className="fa-solid fa-right-from-bracket fa-fade"></i> </h2>  
              <p className='fs-18 p-1 white'>Using React, Redux, TypeScript, HTML, CSS, Bootstrap and JS</p> 
              <p className='fs-18 p-1 white'>Dec 2023</p>         
            </div>
          </a>
          <a href='https://weatherforecasting-nine.vercel.app/' target='_blank' style={{color:'black',textDecoration:'none',cursor:'pointer'}} >
            <div className='intern bg-white p-2 br-2 mt-2 w-955'>
              <h2 className='bolder fs-22 p-1 white'>Weather Website &nbsp; &nbsp; <i className="fa-solid fa-right-from-bracket fa-fade"></i> </h2>  
              <p className='fs-18 p-1 white'>Using React, TypeScript, HTML, CSS, Bootstrap and JS</p> 
              <p className='fs-18 p-1 white'>Nov 2023</p>         
            </div>
            </a>
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
