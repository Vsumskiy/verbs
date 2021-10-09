export interface ConjugationTableInterface {
    heading: string;
    forms: string[][];
}

export interface ConjugationTablesInterface {
    conditional: ConjugationTableInterface[];
    indicative: ConjugationTableInterface[];
    passive: ConjugationTableInterface[];
}

export type ConjugationContext = keyof ConjugationTablesInterface;

