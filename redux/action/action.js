import axios from 'axios';




export const GetData = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://agencyanalytics-api.vercel.app/images.json');
        dispatch({ type: 'GetData', payload: data });
    } catch (error) {
        dispatch({ type: 'GetDataError', payload: error.message });
    }

}

export const DeleteData = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'DeleteData', payload: id })
    } catch (error) {
        dispatch({ type: 'DeleteDataError', payload: error.message })
    }
}

export const FavoriteData = (obj, id) => async (dispatch) => {
    try {
        dispatch({ type: 'FavoriteData', payload: { obj, id } })
    } catch (error) {
        dispatch({ type: 'FavoriteDataError', payload: error.message })
    }
}

