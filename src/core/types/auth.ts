export type NivelUsuario =
  | "ADMINISTRADOR"
  | "GESTOR"
  | "OPERADOR"
  | "FINANCEIRO"
  | "CONSULTA";

export interface AuthUser {
  id: number;
  nome: string;
  email: string;
  nivel: NivelUsuario;
  ativo: boolean;
  criadoEm: string;
  atualizadoEm: string;
  ultimoAcesso: string | null;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface RegisterPayload {
  nome: string;
  email: string;
  senha: string;
}

export interface NivelUsuarioOption {
  value: NivelUsuario;
  label: string;
}

export interface UsuarioCreatePayload {
  nome: string;
  email: string;
  senha: string;
  nivel: NivelUsuario;
}

export interface UsuarioUpdatePayload {
  nome?: string;
  email?: string;
  senha?: string;
  nivel?: NivelUsuario;
  ativo?: boolean;
}

export const NIVEL_LABELS: Record<NivelUsuario, string> = {
  ADMINISTRADOR: "Administrador",
  GESTOR: "Gestor",
  OPERADOR: "Operador",
  FINANCEIRO: "Financeiro",
  CONSULTA: "Consulta",
};

export const ROUTE_ACCESS: Record<NivelUsuario, string[]> = {
  ADMINISTRADOR: [
    "/home",
    "/clientes",
    "/processos",
    "/contratos",
    "/financas",
    "/modalidades",
    "/relatorios",
    "/usuarios",
  ],
  GESTOR: [
    "/home",
    "/clientes",
    "/processos",
    "/contratos",
    "/financas",
    "/modalidades",
    "/relatorios",
  ],
  OPERADOR: ["/home", "/clientes", "/processos", "/contratos", "/modalidades", "/relatorios"],
  FINANCEIRO: ["/home", "/contratos", "/financas", "/modalidades", "/relatorios"],
  CONSULTA: [
    "/home",
    "/clientes",
    "/processos",
    "/contratos",
    "/financas",
    "/modalidades",
    "/relatorios",
  ],
};

export const CAPABILITY_ACCESS = {
  manageUsers: ["ADMINISTRADOR"],
  manageClientes: ["ADMINISTRADOR", "GESTOR", "OPERADOR"],
  manageProcessos: ["ADMINISTRADOR", "GESTOR", "OPERADOR"],
  issueProcessLetters: ["ADMINISTRADOR", "GESTOR", "OPERADOR"],
  manageContratos: ["ADMINISTRADOR", "GESTOR", "OPERADOR"],
  renewContratos: ["ADMINISTRADOR", "GESTOR", "OPERADOR"],
  downloadContratos: ["ADMINISTRADOR", "GESTOR", "OPERADOR", "FINANCEIRO", "CONSULTA"],
  manageFinancas: ["ADMINISTRADOR", "GESTOR", "FINANCEIRO"],
  operateFinanceiroDocuments: ["ADMINISTRADOR", "GESTOR", "FINANCEIRO"],
} as const satisfies Record<string, readonly NivelUsuario[]>;

export type Capability = keyof typeof CAPABILITY_ACCESS;
