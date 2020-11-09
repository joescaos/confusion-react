import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    comments: COMMENTS,
    leaders: LEADERS
};

export const Reducer = (state= initialState, action) => {
    return state;
}