import dividerDesktop from './assets/pattern-divider-desktop.svg'
import DividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import { useRef } from 'react'
function App() {
  let w=window.document.body.offsetWidth
  const container=useRef()

  async function getAdvice() {
    await fetch('https://api.adviceslip.com/advice').then(res=>res.json()).then(res=>res.slip).then(res=>container.current.textContent=res.advice).catch(err=>console.error('there was a problem dude',err))
    }

    getAdvice()

   
  return (
    <>
      <div className="bg-Dark-Blue w-screen h-screen flex justify-center items-center "> 
        <div className="bg-Dark-Grayish-Blue max-sm:w-80 sm:max-w-[500px] rounded-2xl max-sm:p-5 sm:p-10  flex items-center flex-col relative">
          <h3 className='text-xs text-Neon-Green space-x-2 tracking-[3px] uppercase font-semibold'>
            advice #117
          </h3>
          <p ref={container} className='text-3x text-3xl text-center text-Light-Cyan  font-semibold mt-5'>
            made by me

          </p>
          <img className='my-6 ' src={w>375 ? dividerDesktop : DividerMobile} alt="" />
          
          <button className='absolute top-11/12 rounded-full bg-Neon-Green p-4 shaow-ring-active shadow-Neon-Green '>
                <img onClick={getAdvice} src={dice} alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
