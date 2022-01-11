import { Definition } from '@models/dictionary/definition.interface';

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}
