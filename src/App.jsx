
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import {QueryClient, QueryClientProvider,useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './components/commonComponent/Layout';

function App() {
const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} > 
          <Route index element={<Home/>}/>
          <Route path='*' element={"no data "}/>
          </Route>
        </Routes>
      </BrowserRouter>
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    </>
  )
}

export default App
