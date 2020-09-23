export {default} from './Modal';

export const MODAL_TYPE_DEAFULT = 'MODAL_TYPE_DEAFULT';
export const MODAL_TYPE_PROFILE = 'MODAL_TYPE_PROFILE';


export type ModalType = typeof MODAL_TYPE_DEAFULT | typeof MODAL_TYPE_PROFILE;