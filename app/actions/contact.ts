"use server";

type State = { success: true } | { success: false; error: string } | null;

const ADMIN_URL = process.env.MAGENTS_ADMIN_URL;
const API_KEY = process.env.MAGENTS_INGEST_KEY;

export async function submitLead(prevState: State, formData: FormData): Promise<State> {
  const lead = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
  };

  if (!lead.name || !lead.email || !lead.description) {
    return { success: false, error: "Preencha nome, email e mensagem." };
  }

  if (!ADMIN_URL || !API_KEY) {
    console.error("[contact] MAGENTS_ADMIN_URL/MAGENTS_INGEST_KEY não configurados");
    return { success: false, error: "Serviço de contato indisponível no momento." };
  }

  try {
    // Toda a lógica (gravar lead + enviar e-mail) roda no backend (admin_back).
    const res = await fetch(`${ADMIN_URL}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify(lead),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { success: false, error: data?.message || "Não foi possível enviar. Tente novamente." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Não foi possível conectar ao servidor. Tente novamente." };
  }
}
