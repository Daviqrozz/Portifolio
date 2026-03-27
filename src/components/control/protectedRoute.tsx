
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }){
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <main className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white/80">Verificando sessão...</p>
            </main>
        )
    }

    if (!user) {
        return <Navigate to="/admin/login" replace />
    }

    return children

}