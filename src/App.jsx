import './App.css'
import Cards from './components/card'

function App() {

  return (
    <>
    <div className="flex flex-col items-center pt-10">

        <div className="flex flex-row">
          <div className='font-[Mochiy_Pop_One] text-[36px] font-normal text-white'>Roasting</div>
          <div className='font-[Mochiy_Pop_One] text-[36px] font-normal text-[#e11d48]'>Wallet</div>
        </div>
        <div className="flex flex-row">
          <div className='font-[dm_sans] text-[24px] font-normal text-white'>by</div>
          <div className='font-[dm_sans] text-[24px] font-normal text-[#f59e0b]'>@felas</div>
        </div>
        <br />
        {/* Cards */}
        <Cards/>

    </div>
    </>
  )
}

export default App
