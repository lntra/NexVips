
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import AnimatedBars from "./_components/molecules/bars";
import StatsGrid from "./_components/molecules/circle";
import BlinkingArrowSection from "./_components/molecules/blinking";
import InfiniteChat from "./_components/molecules/infinitechat";
import CalculatePrice from "./_components/molecules/priceCalc";
import FAQSection from "./_components/molecules/questions";
import SvgTree from "./_components/molecules/svgtweakedline";
import HeaderMobile from "./_components/molecules/mobileheader";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  const points = [
    {
      angle: 123.5,
      radius: 52.5, 
      title: 'Configuração Rápida',
      description: 'Sem muita dificuldade em minutos seu bot estará pronto para atuação em seu grupo',
      size: 3,
      img: '/assets/lightining.svg'
    },
    {
      angle: 62.25,
      radius: 62.75, 
      title: 'Planos Garantidos',
      description: 'Gerencie os planos, suas durações e preços de maneira fácil.',
      size: 3,
      img: '/assets/Fire_light.svg'
    },
  ];

  return (
    <HydrateClient>
            <div className="absolute inset-0 min-h-[100vh] bg-[#020E0F] pointer-events-none overflow-x-clip -z-10">
              
              <div className="pointer-events-none absolute inset-0 z-50">
                <div className="absolute top-0 right-0 w-[100vw] sm:w-[80vw] h-[100vh] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,255),_rgba(0,0,0,0)_60%)] opacity-15 sm:opacity-[8%] mix-blend-screen"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw]">
                <div className="metal-border-wrapper w-full h-full rounded-full">
                  <div className="metal-border rounded-full"></div>
                  <div className="w-full h-full rounded-full bg-[#020E0F] z-[1] relative">
                    
                  </div>
                </div>
              </div>     
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw]">
                <div className="metal-border-wrapper w-full h-full rounded-full">
                  <div className="metal-border-vertical rounded-full"></div>
                  <div className="w-full h-full rounded-full bg-[#021011] z-[1] relative"></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#011617] opacity-100 w-[80vw] h-[80vw]">
                <div className="metal-border-wrapper w-full h-full rounded-full">
                  <div className="metal-border rounded-full"></div>
                  <div className="w-full h-full rounded-full bg-[#011617] z-[1] relative"></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#041C1D] opacity-100 w-[60vw] h-[60vw]">
                <div className="metal-border-wrapper w-full h-full rounded-full">
                  <div className="metal-border-vertical rounded-full"></div>
                  <div className="w-full h-full rounded-full bg-[#041C1D] z-[1] relative"></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#042627] opacity-100 w-[40vw] h-[40vw]">
                <div className="metal-border-wrapper w-full h-full rounded-full">
                  <div className="metal-border rounded-full"></div>
                  <div className="w-full h-full rounded-full bg-[#042627] z-[1] relative">
                      
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#073032] opacity-100 w-[15vw] h-[15vw]">
                  <div className="metal-border-wrapper w-full h-full rounded-full">
                    <div className="metal-border-vertical rounded-full"></div>
                    <div className="w-full h-full rounded-full bg-[#073032] z-[1] relative"></div>
                  </div>
              </div>

              <div className="absolute hidden lg:block top-[calc(50%+8.01vw)] left-1/2 -translate-x-1/2 w-0 h-[62.1svw] border-l-2 border-dashed border-[#E12885] pointer-events-none z-10"></div>

            </div>

            <section className="h-[100vh] lg:h-[100vh] overflow-x-hidden text-white relative grid grid-cols-12 gap-4 sm:gap-5 py-0 lg:py-5 grid-rows-7 sm:grid-rows-7 justify-between">

              {/* Header */}
              <header className="relative z-10 hidden col-start-2 col-end-12 lg:flex justify-between items-center mb-10 h-32 p-5 px-12 mx-0 lg:mx-24 overflow-hidden rounded-4xl bg-[#137A7F]/10 shadow-lg backdrop-blur-sm border border-white/20">
                {/* Gradient or shimmer overlay inside */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-50 pointer-events-none rounded-4xl mix-blend-overlay"></div>

                <div className='flex items-center relative z-10'>
                  <div className='rounded-full p-2 flex items-center gap-2'>
                    <img src="/assets/Group17.svg" alt="My Icon" className="w-10 h-10" />
                    <div className='text-3xl font-semibold text-[#86CECB]'>Nexvips</div>
                  </div>
                </div>

                <nav className='space-x-5 flex justify-between items-center text-white z-10'>
                  <a href="#" className='hover:text-[#E12885]'>Benefícios</a>
                  <a href="#" className='hover:text-[#E12885]'>Funcionamento</a>
                  <a href="#" className='hover:text-[#E12885]'>Preços</a>
                  <a href="#" className='hover:text-[#E12885]'>FAQs</a>
                </nav>

                <button className='bg-[#86CECB] font-bold text-black py-2 px-4 rounded-xl hover:bg-[#E12885] z-10'>
                  Comece Agora Mesmo
                </button>
              </header>

              <HeaderMobile></HeaderMobile>

              {/* Main Content */}
              <div className='col-start-1 col-end-13 sm:col-start-3 sm:col-end-11 row-start-2 row-end-4 justify-end justify-items-center align-bottom content-end text-center'>
                <h1 className='p-1 sm:p-0 text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl font-bold'>Gerenciando Grupos Vip<br />Com Qualidade</h1>
              </div>

              <div className='col-start-3 col-end-11 row-start-4 row-end-5 justify-end justify-items-center align-bottom content-center text-center'>
                <h2 className='text-xl font-semibold'>Nossos <span className="text-[#86CECB]">diferenciais</span></h2>
              </div>

              {/* Differential Cards */}
              <div className='hidden col-start-2 col-end-12 row-start-5 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-18 h-92'>
                  
                  <div className="relative float glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition  hover:shadow-cyan-400 col-start-1 col-end-2 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                    <div className="absolute inset-0 rounded-3xl  border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                      {/* Middle rows border (rows 2 and 3, columns 2 to 11) */}
                      <div className="w-full h-full z-0 col-start-2 col-end-12 row-start-2 row-end-4 absolute pointer-events-none rounded-3xl overflow-hidden">
                        {/* Top border */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#d9d9d9] to-transparent" />
                        {/* Left border */}
                        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#d9d9d9] to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                        <h3 className="font-medium text-xl text-center">Comunicação Eficiente</h3>
                      </div>

                      <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 content-end">
                          <div className="h-full col-start-1 col-end-7 row-start-1 row-end-5 ">
                            <InfiniteChat/>
                          </div>
                      </div>

                      <div className="relative z-10 row-start-4 col-start-2 col-end-12 flex items-center justify-start">
                        <p className="text-center">Mensagens Programadas</p>
                      </div>
                  </div>

                  <div className="relative float-fast glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 col-start-2 col-end-3 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                    <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                      {/* Content */}
                      <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                        <h3 className="font-medium text-xl text-center">Domine suas Métricas</h3>
                      </div>

                      <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 content-end">
                          <div className="h-full col-start-1 col-end-7 row-start-2 row-end-5 ">
                            <AnimatedBars/>
                          </div>
                      </div>

                      <div className="relative z-10 row-start-4 col-start-2 col-end-12 flex items-center justify-start">
                        <p className="text-center">Relatórios Diários</p>
                      </div>
                  </div>

                  <div className="relative float-slow glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 col-start-3 col-end-4 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                    <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                        <h3 className="font-medium text-xl text-center">Escale seu Negócio</h3>
                      </div>

                      <StatsGrid/>

                      <div className="relative z-10 row-start-4 col-start-2 col-end-12 flex items-center justify-start">
                        <p className="text-center">Taxas Flexíveis</p>
                      </div>
                  </div> 

                  <div className="relative float glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 col-start-4 col-end-5 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                    <div className="absolute inset-0 rounded-3xl  border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                      {/* Middle rows border (rows 2 and 3, columns 2 to 11) */}
                      <div className="w-full h-full z-0 col-start-2 col-end-12 row-start-2 row-end-4 absolute pointer-events-none rounded-3xl overflow-hidden">
                        {/* Top border */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-l from-[#d9d9d9] to-transparent" />
                        {/* Left border */}
                        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#d9d9d9] to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                        <h3 className="font-medium text-xl text-center">Dinheiro no Bolso</h3>
                      </div>

                      <BlinkingArrowSection/>

                      <div className="relative z-10 row-start-4 col-start-2 col-end-12 flex items-center justify-start">
                        <p className="text-center">Receba na mesma hora</p>
                      </div>
                  </div>
              </div>

            </section>

            <section className="grid grid-cols-12 auto-rows-auto gap-5 sm:hidden bg-[#020E0F] py-5 text-white">
                <div className='grid col-start-2 col-end-10 row-start-1 lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-18 h-72'>
                    <div className="relative  glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition  hover:shadow-cyan-400 col-start-1 col-end-2 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                      <div className="absolute inset-0 rounded-3xl  border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                        {/* Middle rows border (rows 2 and 3, columns 2 to 11) */}
                        <div className="w-full h-full z-0 col-start-2 col-end-12 row-start-2 row-end-4 absolute pointer-events-none rounded-3xl overflow-hidden">
                          {/* Top border */}
                          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#d9d9d9] to-transparent" />
                          {/* Left border */}
                          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#d9d9d9] to-transparent" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                          <h3 className="font-medium text-xl text-center">Comunicação Eficiente</h3>
                        </div>

                        <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 content-end">
                            <div className="h-full col-start-1 col-end-7 row-start-1 row-end-5 ">
                              <InfiniteChat/>
                            </div>
                        </div>

                        <div className="relative z-10 row-start-4 col-start-2 col-end-12 flex items-center justify-start">
                          <p className="text-center">Mensagens Programadas</p>
                        </div>
                    </div>
                </div>

                <div className='grid col-start-4 w-full col-end-12 row-start-2 lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-18 h-72'>
                  
                    <div className="relative w-full glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                      <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                          <h3 className="font-medium text-xl text-center">Domine suas Métricas</h3>
                        </div>

                        <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 content-end">
                            <div className="h-full col-start-1 col-end-7 row-start-2 row-end-5 ">
                              <AnimatedBars/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid col-start-2 w-full col-end-10 row-start-3 lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-18 h-72'>
                  
                    <div className="relative float-slow glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 col-start-1 col-end-4 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                      <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                          <h3 className="font-medium text-xl w-full text-center">Escale seu Negócio</h3>
                        </div>

                        <StatsGrid/>
                    </div> 
                </div>

                <div className='grid col-start-4 w-full col-end-12 row-start-4 lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-18 h-72'>
                  
                    <div className="relative w-full glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition hover:shadow-glow hover:shadow-cyan-400 grid grid-cols-12 grid-rows-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[#042425] to-[#041B1C]">
                      <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gradient-to-tl from-[rgb(3,88,84)] via-transparent to-transparent pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative z-10 col-start-2 col-end-12 flex items-center justify-start">
                          <h3 className="font-medium text-xl text-center">Domine suas Métricas</h3>
                        </div>

                        <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 content-end">
                            <div className="h-full col-start-1 col-end-7 row-start-2 row-end-5 ">
                              <AnimatedBars/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {points.map((point, index) => {
              const angleRad = (point.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * point.radius;
              const y = Math.sin(angleRad) * point.radius;

              return (
                <div
                  key={index}
                  className="absolute hidden lg:block left-1/2 top-1/2 z-50"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}vw, ${y}vw)`,
                  }}
                >
                  <div className="flex flex-col items-center max-w-[300px]">
                    <img
                      src={point.img}
                      className="rounded-full z-30 bg-[#020E0F] border-[0.2vw] border-[#86CECB] shadow-md"
                      style={{
                        width: `${point.size}vw`,
                        height: `${point.size}vw`,
                        transform: ``, 
                      }}
                    ></img>
                    <div
                      className="absolute left-1/2 top-[1.5vw] z-20"
                      style={{
                        width: `29vw`,
                        height: '2px',
                        transform: `rotate(${index == 0 ? "0" : "-180deg"})`,
                        transformOrigin: 'left',
                        borderTop: '2px dashed #E12885',
                      }}
                    ></div>
                    <div className="max-w-[400px] text-center">
                      <h2 className="text-[2.2vw] font-semibold text-white whitespace-nowrap">{point.title}</h2>
                      <p className="text-[1vw] text-white">{point.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <section className="relative bg-[#020E0F] overflow-visible -z-20">
              <div className="relative mb-[5vw] z-10 grid grid-cols-12 gap-5 py-5 grid-rows-8 justify-between text-white h-[142.5vh] overflow-visible">
                <div className="col-start-5 col-end-9 row-start-6 row-end-9 flex flex-col gap-2 items-center text-center relative z-30">
                  <img src="/assets/Star.svg" alt="My Icon" className="w-[3vw] h-[3vw] z-30 rounded-full bg-[#020E0F] border-[0.2vw] border-[#86CECB] shadow-md" />
                  <h2 className="text-2xl sm:text-[2.2vw] font-semibold">Facilitadores do Dia a Dia</h2>
                  <p className="text sm:text-[1vw]">
                    Acesso completo à dashboard, configuração de upsell e downsell, envio de notificações,
                    além de muitos outros recursos em constante evolução.
                  </p>
                  <button className="bg-[#86CECB] font-bold text-black py-2 px-4 rounded-xl hover:bg-[#E12885] z-10">
                    Se junte à nós
                  </button>

                  {/* Circle behind the text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,#106D75_0%,rgba(2,14,15,0.2)_70%,rgba(2,14,15,0.9)_100%)] blur-3xl rounded-full -z-10 pointer-events-none"></div>
                                    
                </div>
              </div>

              <div className="lg:flex justify-center w-full hidden">
                  <SvgTree></SvgTree>
              </div>

            </section>

            <section className="relative h-[100vh] z-30 bg-[#020E0F] ">
              <div className="absolute inset-0 bg-[#020E0F] overflow-x-clip grid grid-cols-12 grid-rows-9">
                <div className="absolute right-1/7 top-[-15vw] translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,#E12885_0%,_rgba(225,40,133,0.2)_70%,_rgba(225,40,133,0.9)_100%)]  blur-3xl  opacity-[18%]  mix-blend-screen pointer-events-none"></div>
                <div className="absolute left-1/20 bottom-[-15vw] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,#106D75_0%,rgba(2,14,15,0.2)_70%,rgba(2,14,15,0.9)_100%)] blur-3xl opacity-[20%] mix-blend-screen pointer-events-none"></div>
              </div>
              <div className="relative z-10 grid grid-cols-12 gap-5 py-5 grid-rows-9 justify-between text-white h-[100vh] overflow-visible">
                  <span className="hidden lg:block col-start-4 col-end-10 row-span-1"></span>
                  <div className="font-bold text-3xl xl:text-6xl 2xl:text-7xl col-start-2 col-end-12 xl:col-start-4 xl:col-end-10 row-span-1 flex items-center align-middle text-center"> 
                    <h2 className="w-full text-nowrap">Simulação de Preços</h2>
                  </div>
                  <div className="col-start-2 col-end-12 hidden lg:flex xl:col-start-3 xl:col-end-11 row-span-1 items-center justify-center align-middle text-center">
                    <p className="w-full max-w-[1000px] text-xl lg:text-2xl text-[#C3C3C3]">Com nossos preços você é capaz de expandir seus negócios e não se sentir segurado para trás por nossas taxas que são as mais baixas do mercado.</p>
                  </div>
                  <div className="col-start-2 col-end-12 row-span-7 lg:col-start-2 lg:col-end-12 lg:row-span-5 px-0 lg:px-10 z-20 flex justify-center w-full">
                    <CalculatePrice/>
                  </div>
              </div>
            </section>

            <section className="relative h-[75vh] hidden lg:block z-20 bg-[#020E0F]">
            </section>

            <section className="relative h-[100vh] z-30 bg-[#020E0F] ">
                <div className="absolute inset-0 z-50 bg-[#020E0F] overflow-x-clip grid grid-cols-12 grid-rows-9">
                  <div className="absolute top-[-60vw] z-50 left-1/2 -translate-x-1/2 w-[220vw] h-[150vw] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_transparent_40%)] opacity-[15%] pointer-events-none"></div>

                  <div className="absolute z-50 left-0 top-[-20vw] -translate-x-1/2 w-[100vw] h-[100vw] rounded-full
                    bg-[radial-gradient(circle,_rgba(225,40,133,1)_0%,_rgba(225,40,133,0.3)_40%,_rgba(225,40,133,0.1)_60%,_transparent_80%)]
                    blur-3xl opacity-[20%] mix-blend-screen pointer-events-none">
                  </div>

                  <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw]">
                    <div className="metal-border-wrapper w-full h-full rounded-full">
                      <div className="metal-border rounded-full"></div>
                      <div className="w-full h-full rounded-full bg-[#021011] z-[1] relative"></div>
                    </div>
                  </div>
                  <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#011617] opacity-100 w-[80vw] h-[80vw]">
                    <div className="metal-border-wrapper w-full h-full rounded-full">
                      <div className="metal-border-vertical rounded-full"></div>
                      <div className="w-full h-full rounded-full bg-[#011617] z-[1] relative"></div>
                    </div>
                  </div>
                  <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#041C1D] opacity-100 w-[60vw] h-[60vw]">
                    <div className="metal-border-wrapper w-full h-full rounded-full">
                      <div className="metal-border rounded-full"></div>
                      <div className="w-full h-full rounded-full bg-[#041C1D] z-[1] relative"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[35%] bg-[radial-gradient(ellipse_at_center,_rgba(134,206,203,1)_0%,_transparent_80%)] blur-lg opacity-10 pointer-events-none z-10"></div>
                    </div>
                  </div>
                  
                  <div className="col-start-2 col-end-12 row-start-3 row-end-8 sm:row-start-4 sm:row-end-7 lg:col-start-3 lg:col-end-11 relative float-slow glow-hover hover:scale-105 hover:border-cyan-300 hover:border transition duration-100 hover:shadow-glow hover:shadow-cyan-400 w-full border-2 border-[#99818d7a] h-full bg-gradient-to-b from-[#042425] to-[#041B1C] rounded-2xl shadow-2xl z-40 flex flex-col justify-center p-10 text-white">

                    <div className="absolute top-0 left-0 w-full h-full -z-20 pointer-events-none rounded-2xl overflow-hidden">
                      <div className="w-full h-full opacity-80 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,1)_100%)]" />
                    </div>

                    <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-start sm:justify-start">
                      <div className="z-60"> 
                        <h2 className="text-3xl sm:text-5xl text-nowrap font-bold mb-4">Pronto para começar?</h2>
                      </div>

                      <div className="flex z-30 justify-start">
                        <button className='bg-[#86CECB] cursor-pointer text-xl font-bold text-black py-2 px-4 rounded-xl hover:bg-[#E12885] z-10'>
                        Comece Sem Custos
                      </button>
                      </div>
                    </div>

                    <img
                      src="/assets/icon.svg" 
                      alt="Brand Logo"
                      className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 sm:translate-x-0 sm:translate-y-0 sm:bottom-0 sm:right-0 w-[100vw] sm:w-[22.5vw] h-auto opacity-75 sm:opacity-100 pointer-events-none"
                    />

                  </div>

              </div>
            </section>

            <section className="relative h-[100vh] z-20 bg-[#020E0F] hidden lg:block border-none outline-none shadow-none  ">
            </section>
            
            {/* FAQ */}
            <section className="relative h-[100vh] z-20 bg-[#020E0F] grid grid-cols-12 grid-rows-8">
              <div className="row-start-2 row-end-8 col-start-2 col-end-12 ">
                <FAQSection/>
              </div>
            </section>

         

    </HydrateClient>
  );
}
