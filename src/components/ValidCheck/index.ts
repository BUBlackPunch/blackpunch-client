export {default} from './ValidCheck';

export const VALID_CHECK_DEFAULT = 'VALID_CHECK_DEFAULT';
export const VALID_CHECK_ERROR = 'VALID_CHECK_ERROR';

export type ValidCheckType = typeof VALID_CHECK_DEFAULT | typeof VALID_CHECK_ERROR;