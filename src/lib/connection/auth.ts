import { supabase } from "./supabaseClient";

export async function loginAdmin(username: string, password: string) {
  try {
    // panggil fungsi Postgres login_admin
    const { data, error } = await supabase.rpc("login_admin", {
      username_input: username,
      password_input: password,
    });

    if (error) {
      // tangkap error dari Postgres
      throw new Error(error.message || "Login gagal");
    }

    // kalau sukses, bisa return true / redirect
    return true;
  } catch (err: any) {
    console.error("Login error:", err.message);
    return { success: false, message: err.message };
  }
}
