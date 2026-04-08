import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrrencyInfo'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  // defining all useState cases

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // now first declaring the swap button
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount || '')
    setAmount(convertedAmount || '')
  }

  // making the converting function
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className='w-full h-screen flex flex-wrap py-8 justify-center items-center bg-cover'
      style={{
        backgroundImage: 'url("https://st2.depositphotos.com/3223379/11622/i/450/depositphotos_116225094-stock-photo-international-currencies-and-gears.jpg")',
      }}
    >
      <div
      className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-lg bg-white/30'>
          <form 
          onSubmit={(e)=>{
            e.preventDefault()
            convert()}}>

                {/* making of from */}
                <div className='w-full mb-1'>
                  <InputBox
                    label='From'
                    amount={amount}
                    onAmountChange={(amount) => {setAmount(amount)}}
                    onCurrencyChange={(currency) => {setFrom(currency)}}
                    currencyOptions={options}
                    selectedCurrency={from}
                  />
                </div>

                {/* before the second input box lemme give swap button in middle */}

                <div className='relative w-full h-1'>
                  <button type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-e-transparent rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}> 
                    SWAP
                  </button>
                </div>

                {/* second input box */}

                <div className='w-full mt-1 mb-4'>
                  <InputBox 
                  label='To'
                  amount={convertedAmount}
                  onAmountChange={(amount) => {setAmount(amount)}}
                  onCurrencyChange={(currency) => {setTo(currency)}}
                  currencyOptions={options}
                  selectedCurrency={to}
                  amountDisable
                  />
                </div>

                {/* making of converting button */}

                <div>
                  <button
                  type='submit'
                  className='w-full bg-blue-600 text-white px-4 py-3 rounded-xl cursor-pointer'>
                    Convert The Amount {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default App
