import * as _ from 'lodash';

export function getUniqueArrayOfArray<T>(array: T[]): T[] {
    return _.uniqBy(array, (item) => JSON.stringify(item));
}
