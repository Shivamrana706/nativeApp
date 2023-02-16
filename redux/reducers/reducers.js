


export const Reducer = (state = { Reduxdata: [] }, action) => {
    switch (action.type) {
        case 'GetData':
            return { ...state, Reduxdata: action.payload }

        case 'DeleteData':
            return { ...state, Reduxdata: state.Reduxdata.filter(item => item.id !== action.payload) }

        case 'FavoriteData':
            return {
                ...state, Reduxdata: state.Reduxdata.map((item) => {
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



