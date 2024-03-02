import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainLayout from './Layout'
import { BrowserRouter } from 'react-router-dom'
import './index.less';
import MyRouter from './Router';
import { 
  SocketContextApi 
} from './context/SocketContext';
import { 
  socket 
} from './socket/socket'

function App() {
  const [count, setCount] = useState(0)
  const [socketInstance,setSocketInstance]=useState("");
  useEffect(()=>{
      function onConnect(e) {
        socket.emit('i-m-connected')
        console.log("Connected...")
        setSocketInstance(socket);
      }
    
      function onDisconnect() {
        //setIsConnected(false);
      }
    
    
      socket.on('connect', onConnect);
      
  },[])

  return (
    <>
      <SocketContextApi.Provider
      value={{socketInstance,setSocketInstance}}
      >
        <MyRouter/>
      </SocketContextApi.Provider>
    </>
  )
}

export default App
