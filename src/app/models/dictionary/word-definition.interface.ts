import { Phonetic } from '@models/dictionary/phonetic.interface';
import { Meaning } from '@models/dictionary/meaning.interface';

export interface WordDefinitionInterface {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    origin: string;
    meanings: Meaning[];
}
