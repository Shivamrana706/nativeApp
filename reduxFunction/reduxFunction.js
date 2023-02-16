import { useDispatch } from 'react-redux';

import { DeleteData, FavoriteData } from "../redux/action/action";


// const dispatch = useDispatch();

export const deleteDataFunction = (id) => {
    const dispatch = useDispatch();
    dispatch(DeleteData(id));
}
export const favoriteDataFunction = (value, id) => {
    const dispatch = useDispatch();
    dispatch(FavoriteData({ favorited: !value }, id))
}