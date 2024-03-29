import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modefunc } from './ActionCreators'


const Certifications = () => {
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
      dispatch(modefunc(false)) 
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
          <h1 className='white bolder'>Certifications</h1>
          
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Data Science 101</h2>  
            <img height={395} width={555} src='DataSciencePoorna_page-0001.jpg'/>
                    
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Agile Methodology Virtual Experience Program</h2>  
            <img height={395} width={555} src='Agile.png'/>
                  
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Build Your Own Responsive Website </h2>  
            <img height={395} width={555} src='ResponsiveWebsitePoorna.png'/>
                    
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Build Your Own Static Website </h2>  
            <img height={395} width={555} src='Static Website Poorna.png'/>
                    
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>TCS iON Career Edge - Young Professional</h2>  
            <img height={395} width={555} src='TCS.png'/>
                    
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Cloud Computing</h2>  
            <img height={395} width={555} src='Cloud computing (1).jpg'/>
                    
          </div>
          <div className='intern bg-white p-2 br-2 mt-2 w-955'>
            <h2 className='bolder fs-22 p-1 white'>Goldman Sachs Virtual  Program</h2>  
            <img height={395} width={555} src='GoldmanSachs.png'/>
                     
          </div>
        </div>
      </div> 
    </>
  )
}

export default Certifications
