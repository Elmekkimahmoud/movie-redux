import { createStore, combineReducers } from 'redux';
import firstReducer from '../reducers/firstRed';
import secondRed from '../reducers/secondRed';
import nameReduc from '../reducers/nameRed';
import imageReduc from '../reducers/imageRed';
import dateReduc from '../reducers/dateRed';
import rateReduc from '../reducers/rateRed';
import modalred from '../reducers/modalRed' ;
import editimg from '../reducers/editimage' ;
import editnm from '../reducers/editname' ;
import editdt from '../reducers/editdate'; 
import editrt from '../reducers/editrate';
import modaledit from '../reducers/modaledit'


const store = createStore(combineReducers({moviesRed:firstReducer, inputName:secondRed, namereducer:nameReduc,
     imagereducer:imageReduc, datereducer:dateReduc, ratereducer:rateReduc, modalreducer:modalred,
     editimage:editimg, editname:editnm, editedate:editdt, editrate:editrt, modaledit:modaledit}))

export default store
