


export const Reducer = (state = { ReduxData: [] }, action) => {
    switch (action.type) {
        case 'GetData':
            return { ...state, ReduxData: action.payload }

        case 'DeleteData':
            return { ...state, ReduxData: state.ReduxData.filter(item => item.id !== action.payload) }

        case 'FavoriteData':
            return {
                ...state, ReduxData: state.ReduxData.map((item) => {
                    if (item.id == action.payload.id) {
                        return { ...item, ...action.payload.obj }
                    } else {
                        return item;
                    }
                })
            }


        default:
            return state;

    }
}



