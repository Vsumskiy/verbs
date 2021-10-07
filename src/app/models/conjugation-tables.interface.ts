import { ConditionalInterface } from '@models/conditional.interface';
import { IndicativeInterface } from '@models/indicative.interface';
import { PassiveInterface } from '@models/passive.interface';

export interface ConjugationTablesInterface {
    conditional: ConditionalInterface[];
    indicative: IndicativeInterface[];
    passive: PassiveInterface[];
}
