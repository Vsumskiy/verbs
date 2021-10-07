import { ConjugationTablesInterface } from '@models/conjugation-tables.interface';

export enum TensesTypesEnum {
    Infinitive = 'Infinitive',
    Simple_Past = 'Simple Past',
    Past_Participle = 'Past Participle'
}

export type TenseType = TensesTypesEnum.Infinitive | TensesTypesEnum.Simple_Past | TensesTypesEnum.Past_Participle;

export interface VerbInterface {
    conjugated_forms: [TenseType, string][];
    conjugation_tables: ConjugationTablesInterface;
}

