"use client";

import * as Slider from '@radix-ui/react-slider';
import { useState } from "react";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function getFee(sales: number) {
  if (sales <= 20) return { fixed: 1.0, percent: 4.0 };
  if (sales <= 50) return { fixed: 0.9, percent: 3.5 };
  if (sales <= 150) return { fixed: 0.75, percent: 3.0 };
  if (sales <= 300) return { fixed: 0.6, percent: 2.5 };
  return { fixed: 0.5, percent: 2.0 };
}

export default function CalculatePrice() {
  const [salesNumber, setSalesNumber] = useState(350);
  const [pricePerSale, setPricePerSale] = useState(5);
  const [isAnnual, setIsAnnual] = useState(true);

  const { fixed, percent } = getFee(salesNumber);

const monthlyRawTotal = pricePerSale * salesNumber;
const rawTotal = isAnnual ? monthlyRawTotal * 12 : monthlyRawTotal;

  // Nexvips
  const nexvipsFee = fixed + pricePerSale * (percent / 100);
  const nexvipsEarningsPerSale = pricePerSale - nexvipsFee;
const monthlyNexvipsTotal = nexvipsEarningsPerSale * salesNumber;
const nexvipsTotal = Math.max(isAnnual ? monthlyNexvipsTotal * 12 : monthlyNexvipsTotal, 0);

  // Concorrente: dynamic fee based on isAnnual
  const concorrenteFixed = 1.6;
  const concorrentePercent = 5.0;
  const concorrenteFee = concorrenteFixed + pricePerSale * (concorrentePercent / 100);
  const concorrenteEarningsPerSale = pricePerSale - concorrenteFee;
const monthlyConcorrenteTotal = concorrenteEarningsPerSale * salesNumber;
const concorrenteTotal = Math.max(isAnnual ? monthlyConcorrenteTotal * 12 : monthlyConcorrenteTotal, 0);

  return (
    <div className="w-[100%] lg:w-[75vw] bg-[#020E0F] max-w-[1200px] rounded-4xl border-2 glow-natural shadow-cyan-400 border-cyan-300 text-white h-[100%] grid content-center items-center justify-center justify-items-center grid-rows-8 grid-cols-10 sm:grid-cols-10 sm:grid-rows-5">
      <div className="sm:hidden block row-start-1 row-end-9 rounded-4xl col-start-1 col-end-11 border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

      {/* Toggle */}
      <div className=" relative sm:relative flex text-xl col-start-1 col-end-11 font-medium justify-center items-center row-start-1 row-end-1 sm:row-start-1 sm:row-end-1 mb-4 sm:col-start-5 sm:col-end-8">
        <span className="mr-2">Mensal</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full 
              peer dark:bg-[#373B3E]
              peer-checked:bg-[#373B3E]
              peer-checked:after:bg-[#E12885]
              peer-checked:after:translate-x-full 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:rounded-full after:h-5 after:w-5 
              after:transition-all">
          </div>                
        </label>
        <span className="ml-2">Anual</span>
      </div>

      {/* Sliders */}
      <div className="flex flex-col pl-5 pr-5 lg:pl-10 lg:pr-10 justify-around row-start-6 row-end-8 col-start-1 col-end-11 sm:row-start-2 sm:row-end-5 sm:col-start-1 sm:col-end-8 h-[100%] w-[100%]">
        <label className="text-xl ">Número de Vendas</label>
        <div className="flex items-center">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={[salesNumber]}
            max={500}
            step={1}
            onValueChange={([val]) => val !== undefined && setSalesNumber(val)}
          >
            <Slider.Track className="bg-[#373B3E] relative grow rounded-full h-3">
              <Slider.Range className="absolute bg-cyan-300 glow-natural shadow-cyan-400 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-7 h-7 bg-cyan-300 glow-natural shadow-cyan-400 rounded-full shadow-md hover:bg-[#E12885] transition-colors" />
          </Slider.Root>
          <span className="ml-5 text-2xl sm:text-3xl text-cyan-300 text-center min-w-[90px] sm:min-w-[137.5px] p-2 border-2 rounded-4xl border-[#137A7F]">{salesNumber}+</span>
        </div>

        <label className="text-xl">Preço por Venda</label>
        <div className="flex items-center">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={[pricePerSale]}
            max={150}
            min={3}
            step={1}
            onValueChange={([val]) => val !== undefined && setPricePerSale(val)}
          >
            <Slider.Track className="bg-[#373B3E] relative grow rounded-full h-3">
              <Slider.Range className="absolute bg-cyan-300 glow-natural shadow-cyan-400 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-7 h-7 bg-cyan-300 glow-natural shadow-cyan-400 rounded-full shadow-md hover:bg-[#E12885] transition-colors" />
          </Slider.Root>
          <span className="ml-5 text-2xl sm:text-3xl text-cyan-300 text-center min-w-[90px] sm:min-w-[137.5px] p-2 border-2 rounded-4xl border-[#137A7F]">R${pricePerSale}</span>
        </div>
      </div>

      {/* Results */}
      <div className="relative rounded-4xl overflow-hidden bg-none sm:bg-gradient-to-b from-[#042425] to-[#041B1C] border-l-0 sm:border-l-2 border-y-0 border-[#137A7F] h-[100%] w-[100%] row-start-2 row-end-6 col-start-1 col-end-11 sm:row-start-1 sm:row-end-8 sm:col-start-8 sm:col-end-11">
        <div className="h-[100%] relative w-[100%] grid grid-cols-1 grid-rows-5 justify-baseline text-center justify-items-center items-center content-around">
          <div className="hidden sm:block absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold row-start-1">Receita Bruta</h2>
          
            <div className='h-full w-full row-start-2 row-end-6 flex flex-col align-top items-center justify-start  gap-8 justify-items-start'>

            <h2 className="text-3xl w-[92.5%] text-white font-bold row-start-2 relative after:content-[''] after:block after:h-[2px] after:bg-[#137A7F] after:absolute after:left-0 after:right-0 after:top-full after:mt-2">
                {formatCurrency(rawTotal)}
            </h2>            
            
            <div className='flex sm:flex-col w-full h-[45%] justify-around items-center'> 


            <div className="row-start-3 row-end-3 sm:row-start-3 sm:row-end-3 text-center z-10 flex flex-col sm:flex-row w-1/2 sm:w-full sm:justify-around items-center">
                <div className='w-[150px]'>
                    <h3 className="text-2xl font-bold text-[#86CECB]">Nexvips</h3>
                    <p className="text-lg text-[#86CECB]">(R${fixed.toFixed(2)} + {percent}%)</p>  
                </div>
                <h3 className="text-2xl font-bold flex items-center justify-center">{formatCurrency(nexvipsTotal)}</h3>
            </div>

            <div className="row-start-3 row-end-3 sm:row-start-4 sm:row-end-4 z-10 flex flex-col sm:flex-row w-1/2 sm:w-full sm:justify-around items-center">
                <div className='w-[150px]'>
                <h3 className="text-2xl font-bold text-[#E12885]">Concorrente</h3>
                <p className="text-lg text-[#E12885]">(R${concorrenteFixed.toFixed(2)} + {concorrentePercent}%)</p>
                </div>
                <h3 className="text-2xl font-bold flex items-center justify-center">{formatCurrency(concorrenteTotal)}</h3>
            </div>

                          
            </div>

            <div className="row-start-5 z-10 w-[95%]">
                <h3 className="relative text-2xl text-[#E12885] font-bold before:content-[''] before:block before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[#137A7F] before:-translate-y-3">
                    Perda: <span className='text-white'>{formatCurrency(nexvipsTotal - concorrenteTotal)}</span>
                </h3>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
