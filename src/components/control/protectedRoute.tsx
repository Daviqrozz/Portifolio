
import type { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedChildren = {
    children : ReactNode
}

export default function ProtectedRoute({ children }: ProtectedChildren){
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