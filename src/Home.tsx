import { useDispatch, useSelector } from "react-redux"
import { modefunc } from "./ActionCreators"
import { useEffect } from "react"

const Home = () => {
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
    <div className="account d-flex flex-column justify-center align-center">
      <img height={255} className='accnt-image' src="PhotoPoorna.jpg" alt="Profile Picture"/>
      <div className='justify text-center'>
        <h2 className='white text-capital fs-28 bolder'>Poorna Chandu Kumar Arava</h2>
        <div className='text-center'>
          <p className='bg-read-docs white text-justify fs-18 ml-10 mr-10 mt-2 lh-1'>Greetings, <b>I am Poorna Chandu Kumar Arava,</b> a Software Engineer at Talent Pace, Bangalore.
          I have <b>experience in ASP .NET CORE - Dapper, C#, Microsoft SQL Server, Python-OOPS, React-Redux, TypeScript, Material UI, JavaScript, HTML, CSS, and Bootstrap</b>. I led a Plant Management Project
          Also developed an Online Shopping Cart and Pick a Movie Website using React-Redux, and designed many static web pages using HTML, CSS, JavaScript, and Bootstrap. 
          Additionally, I have worked as a <b>Teaching Assistant</b> at NXTWAVE, where I assisted students with their queries related to HTML, CSS, and Bootstrap. I have strongly skilled in <b>ASP .NET CORE, C#, Microsoft Sql Server, Python-OOPS, React-Redux, TypeScript, Material UI, JavaScript, HTML, CSS and Boostrap.</b> My academic background includes a Bachelor's degree in Electronics and Communication Technology. My strengths include a Hard-working nature, Effective communication, Positive Attitude, and Good time management. Outside of work, I enjoy reading, photography, teaching, and playing badminton and chess.</p>
        </div>
        <div className='d-flex justify-center text-center'>
            <p onClick={()=>{window.location.href=`mailto:poornachandukumararava1@gmail.com`}} className='mt-2'>  <i className="fa-regular fs-28 fa-envelope text-black white"></i></p>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/poornachandukumararava/' target='_blank' className='mt-2'>  <i className="fa-brands fs-28 fa-linkedin text-black white"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://github.com/1PoornaChanduKumarArava' target='_blank' className='mt-2'>  <i className="fa-brands fs-28 fa-github text-black white"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://drive.google.com/file/d/1cxmG3FTK5_xDF4EumfytaFFO0n3IfVd_/view?usp=drive_link" target="_blank" className='mt-2 white'>  <i className="fa-regular fs-28 fa-file text-black white"></i> </a>
        </div>
      </div>   
    </div> 
    </>
  )
}

export default Home
