import Home from "./pages/Home"
import Contato from "./pages/Contact"
import Header from "./components/header/Header"
import Footer from "./components/footer/footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectDetailed from "./pages/ProjectDetailed"
import AdminLogin from "./pages/adminLogin"
import AdminDashboard from "./pages/adminDashboard"
import ProtectedRoute from "./components/control/protectedRoute"


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />}></Route>
                    <Route path="/projetos/:slug" element={<ProjectDetailed />}></Route>

                    <Route path="/admin/login" element={<AdminLogin />} />

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>}
                    />
                    
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}