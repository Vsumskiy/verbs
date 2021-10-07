export interface Conditional {
    heading: string;
    forms: string[][];
}

export interface Indicative {
    heading: string;
    forms: string[][];
}

export interface Passive {
    heading: string;
    forms: string[][];
}

export interface ConjugationTables {
    conditional: Conditional[];
    indicative: Indicative[];
    passive: Passive[];
}

export interface VerbInterface {
    conjugated_forms: string[][];
    conjugation_tables: ConjugationTables;
}

