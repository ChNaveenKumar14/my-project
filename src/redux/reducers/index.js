import { combineReducers } from "redux";
import List from "./list.reducer";
import main from "./main.reducer";




const rootReducer=combineReducers({
    main1:main,
    list1:List,
})


export default rootReducer;