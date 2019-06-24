import {Types} from './actions'
import {serchUtil} from '../utils'
const defaultState = {
    items: [
        {
            id:'1230',
            name:'Jonh doe',
            role:'Engineer',
            connected: '1985-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1231',
            name:'Ban doe',
            role:'Sales',
            connected: '1995-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1232',
            name:'Jack doe',
            role:'Customer',
            connected: '1955-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1233',
            name:'bill doe',
            role:'Support',
            connected: '1985-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1234',
            name:'sting doe',
            role:'Manager ',
            connected: '1955-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1235',
            name:'Jonh doe',
            role:'Engineer',
            connected: '1985-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1236',
            name:'Ban doe',
            role:'Sales',
            connected: '1995-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1237',
            name:'Jack doe',
            role:'Customer',
            connected: '1955-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1238',
            name:'bill doe',
            role:'Support',
            connected: '1985-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        },
        {
            id:'1239',
            name:'sting doe',
            role:'Manager ',
            connected: '1955-02-18',
            status:[
                'Screen',
                'Scheduled',
                'Explored',
                'Hire'
            ]
        }
    ]
};

const itemReducer = (state=defaultState,action)=> {
    switch (action.type) {
        case Types.INITIAL_DATA:
            return state
        case Types.SEARCH_ITEM:
            return Object.assign({},{items:serchUtil(state.items,action.payload )})
        case Types.RESET_ITEM:
            return Object.assign({},defaultState)
        default:
            return state;
    }

}

export default itemReducer
