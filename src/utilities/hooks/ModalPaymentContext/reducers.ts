import {
  SET_MODAL_VIEW,
  SET_AMOUNT,
  SET_CUSTOM_INPUT,
  SET_COVERED_BY_CUSTOMER,
  CLOSE_MODAL,
  CLEAR_FORMS,
  SET_SELLER_DATA,
  UPDATE_SELLER_DATA,
} from './constants';
import { defaultState, ModalPaymentState } from './types';

export interface Action {
  type: string;
  payload: any;
}

const ModalPaymentReducer = (state: ModalPaymentState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MODAL_VIEW:
      return { ...state, modalView: payload };
    case SET_AMOUNT:
      return { ...state, amount: payload };
    case SET_CUSTOM_INPUT:
      return { ...state, customInput: payload };
    case SET_COVERED_BY_CUSTOMER:
      return { ...state, coveredByCustomer: payload };
    case SET_SELLER_DATA:
      return { ...state, sellerData: payload };
    case UPDATE_SELLER_DATA:
      return {
        ...state,
        sellerData: {
          ...state.sellerData,
          amount_raised: payload,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalView: -1,
        customInput: false,
        coveredByCustomer: false,
        amount: defaultState.amount,
      };
    case CLEAR_FORMS:
      return defaultState;
    default:
      return state;
  }
};
export default ModalPaymentReducer;
