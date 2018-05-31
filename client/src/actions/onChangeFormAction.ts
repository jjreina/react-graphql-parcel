import { actionsEnum } from './actionTypes';

export const onChangeFormName = (name: String) => {
    return {
        type: actionsEnum.ONCHANGE_FORM_NAME,
        payload: name
    }
}

export const onChangeFormGenre = (genre: String) => {
    return {
        type: actionsEnum.ONCHANGE_FORM_GENRE,
        payload: genre
    }
}

export const onChangeFormAuthorId = (authorId: String) => {
    return {
        type: actionsEnum.ONCHANGE_FORM_AUTHOR_ID,
        payload: authorId
    }
}