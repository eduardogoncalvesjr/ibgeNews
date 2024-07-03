export type DataContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  news: ItemsType[];
  setNews: React.Dispatch<React.SetStateAction<ItemsType[]>>;
  latestNews: ItemsType | null;
  setLatestNews: React.Dispatch<React.SetStateAction<ItemsType | null>>;
  searchedNews: ItemsType[];
  setSearchedNews: React.Dispatch<React.SetStateAction<ItemsType[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DataProviderProps = {
  children: React.ReactNode;
};

export type NewsType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: ItemsType[];
};

export type ItemsType = {
  id: number;
  tipo: Tipo;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: Editorias;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export enum Editorias {
  Economicas = 'economicas',
  Geociencias = 'geociencias',
  Ibge = 'ibge',
  IbgeCenso2020 = 'ibge;censo2020',
  Sociais = 'sociais',
}

export enum Tipo {
  Notícia = 'Notícia',
  Release = 'Release',
}
