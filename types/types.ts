
  export interface CadastroProps {

    nome_usuario: string;
    email_usuario: string;
    senha_usuario: string;
    cep_usuario: string;
    rua_usuario: string;
    cidade_usuario: string;
    estado_usuario: EstadoEnum;
    escola_usuario: string;
    data_nascimento_usuario?: Date;
    escolaridade_usuario: EscolaridadeEnum;
    sexo_usuario: SexoEnum;
    adm: boolean;
  }
  
  export enum EstadoEnum {
    E = 'E',
    AC = 'AC',
    AL = 'AL',
    AP = 'AP',
    AM = 'AM',
    BA = 'BA',
    CE = 'CE',
    DF = 'DF',
    ES = 'ES',
    GO = 'GO',
    NA = 'NA',
    MT = 'MT',
    MS = 'MS',
    MG = 'MG',
    PA = 'PA',
    PB = 'PB',
    PR = 'PR',
    PE = 'PE',
    PI = 'PI',
    RJ = 'RJ',
    RN = 'RN',
    RS = 'RS',
    RO = 'RO',
    RR = 'RR',
    SC = 'SC',
    SP = 'SP',
    SE = 'SE',
    TO = 'TO'
  }
  
  export enum EscolaridadeEnum {
    ENSINO_FUNDAMENTAL_I = 'ENSINO_FUNDAMENTAL_I',
    ENSINO_FUNDAMENTAL_II = 'ENSINO_FUNDAMENTAL_II',
    ENSINO_MEDIO = 'ENSINO_MEDIO',
    OUTROS = 'OUTROS'
  }
  
  export enum SexoEnum {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO',
    NAO_DECLARAR = 'NAO_DECLARAR'
  }
  
  export type Cadastro = CadastroProps & {
    id_usuario: number;
    conquistas?: Conquistas;
  }
  
  export interface Conquistas {
    fk_id_usuario: number;
    conquista_1: boolean;
    conquista_2: boolean;
    conquista_3: boolean;
  }
  
  export interface FaleConosco {
    id: number;
    nome_reclamacao: string;
    email_reclamacao: string;
    assunto_reclamacao: string;
    mensagem_reclamacao: string;
  }
  
  export interface Videos {
    id: number;
    video_link: string | null;
  }
  
  export interface Livros {
    id: number;
    livro_link: string | null;
  }