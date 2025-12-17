import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
import { Toaster } from 'sonner'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './03-withHook/TrafficLightWithHook'
// import { PokemonPage } from './04-examples/PokemonPage'
// import { FocusScreen } from './05-useRef/FocusScreen'
// import { TasksApp } from './06-useReducer/TaskApp'
// import { ScrambleWords } from './06-useReducer/ScrambledWords'
// import { InstagramApp } from './07-useOptimistic/InstagramApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/actions/get-user.action'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <InstagramApp /> */}
    {/* <Suspense fallback={<h1 className='bg-gradient flex flex-col font-thin text-2xl'>Loading client information...</h1>}>
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
