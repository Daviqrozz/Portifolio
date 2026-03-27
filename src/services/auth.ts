import { supabase } from "../lib/supabase";

export async function signIn(email:string,password:string) {
    const {data , error} = await supabase.auth.signInWithPassword({
        email,
        password
    });

    return {error,data} 
}

export async function signOut() {
    const {error} = await supabase.auth.signOut()
    return {error}
    
}