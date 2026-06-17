import { api } from "./http";
import type { Assinatura, PlanoApi } from "@/core/types/auth";

export const assinaturaService = {
  /** Assinatura da empresa logada (plano, status, trial, vencimento). */
  async minha(): Promise<Assinatura> {
    const { data } = await api.get<Assinatura>("assinatura");
    return data;
  },

  /** Lista pública de planos (endpoint aberto). */
  async planos(): Promise<PlanoApi[]> {
    const { data } = await api.get<PlanoApi[]>("planos");
    return data;
  },
};
