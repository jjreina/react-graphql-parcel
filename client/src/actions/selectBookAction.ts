import { actionsEnum } from './actionTypes';

export const selectedBook = (selectedBookId: String) => {
    return {
        type: actionsEnum.SELECTED_BOOK,
        payload: selectedBookId
    }
}