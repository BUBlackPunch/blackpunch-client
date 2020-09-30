export { default } from './Button';

export const BUTTON_TYPE_DEFAULT = 'BUTTON_TYPE_DEFAULT';
export const BUTTON_TYPE_PRIMARY = 'BUTTON_TYPE_PRIMARY';

export type ButtonType = typeof BUTTON_TYPE_DEFAULT | typeof BUTTON_TYPE_PRIMARY;
