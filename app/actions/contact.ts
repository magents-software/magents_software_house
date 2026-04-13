"use server";

import { createClient } from "@supabase/supabase-js";

type State = { success: true } | { success: false; error: string } | null;

export async function submitLead(prevState: State, formData: FormData): Promise<State> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("leads").insert([{
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    description: formData.get("description"),
  }]);

  if (error) return { success: false, error: error.message };
  return { success: true };
}
