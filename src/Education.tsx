import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'

const Education = () => {
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
          <h1 className='white bolder'>Education</h1>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Jawaharlal Nehru Technological University (Anantapur, India)</h2>  
            <p className='fs-18 p-1 white'>Bachelors Degree in Electronics and Communication Engineering, CGPA:9.13</p> 
            <p className='fs-18 p-1 white'>Aug 2019 - Jun 2023</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Narayana Junior Collge (Nellore, India)</h2>  
            <p className='fs-18 p-1 white'>Pre University Course, CGPA:8.17</p> 
            <p className='fs-18 p-1 white'>June 2017 - April 2019</p>         
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Veda Vyasa School (Nellore, India)</h2>  
            <p className='fs-18 p-1 white'>Secondary School, CGPA:9.3</p> 
            <p className='fs-18 p-1 white'>March 2017</p>         
          </div>
        </div>
    </div>      
    </>
  )
}

export default Education
