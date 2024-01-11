import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'

const Awards = () => {
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
          <h1 className='white bolder'>Awards</h1>

          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Talk Appreciation - Intershala Student Partner 22</h2>  
            <img height={395} width={555} src='Talk Appreciation.png'/>
            <p className='fs-18 p-1 white'>Dec 2023</p>         
          </div>

        </div>
      </div>       
    </>
  )
}

export default Awards
