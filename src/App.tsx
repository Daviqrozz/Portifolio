import Home from "./pages/Home"
import Contato from "./pages/Contact"
import Header from "./components/header/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectDetailed from "./pages/ProjectDetailed"


export default function App() {
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contato" element={<Contato />}></Route>
                    <Route path="/projetos/:id" element={<ProjectDetailed />}></Route>
                </Routes>

            </BrowserRouter>

        </>
    )
}