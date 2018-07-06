mport {GET_POLITICAL_NAME_REQUEST, GET_POLITICAL_NAME_SUCCESS, GET_POLITICAL_NAME_FAILURE, SELECTED_POLITICIAN_NAME} from '../constants/FiltersConstants';

const initialState = {
    loading: false,
    PoliticianNameList : [],
    SelectedPoliticianName : 'RicardoAnayaC'

};

export default function PoliticianNameData(state = initialState, action){
  switch (action.type) {
    case GET_POLITICAL_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
              });
        case GET_POLITICAL_NAME_SUCCESS:
              return Object.assign({}, state, {
                loading: false,
                PoliticianNameList: action.response.data.political_names
            });
        case GET_POLITICAL_NAME_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case SELECTED_POLITICIAN_NAME:
            return Object.assign({}, state, {
                SelectedPoliticianName: action.political_names
            });

        default:
          return state;
  }
}
