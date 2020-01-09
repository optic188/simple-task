import {Types} from './actions'
import {serchUtil} from '../utils'

const defaultState = {
    user: {
        loggedIn: false,
        credentials: {
            name: '',
            email: ''
        },
        cv: {
            name: '',
            email: '',
            age: 0,
            title: ''
        },
        registerData: {}
    }
}

const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOAD_RESUME:
            return Object.assign({}, {
                user: {
                    loggedIn: !state.user.loggedIn,
                    credentials: {
                        name: action.payload.name,
                        email: action.payload.email,
                        age: action.payload.age,
                        title: action.payload.title
                    }
                }
            })
        case Types.LOGIN:
            return Object.assign({}, {
                user: {
                    loggedIn: !state.user.loggedIn,
                    credentials: {
                        name: action.payload.name,
                        email: action.payload.email,
                    }
                }
            })
        case Types.REGISTER:
            return Object.assign({}, defaultState)
        default:
            return state;
    }

}

export default AppReducer
