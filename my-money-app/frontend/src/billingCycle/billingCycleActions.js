import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import consts from '../consts'

const INITIAL_VALUES = { credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${consts.API_URL}/billingCycles`)
    return {
        type: 'BILLING_CLYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function showUpdate(bc) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', bc)
    ]
}

export function showDelete(bc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', bc)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

function submit(values, method) {
    const id = values._id ? values._id : ''
    return dispatch => {
        axios[method](`${consts.API_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            }).catch (e => {
                e.response.data.errors.forEach(error => { toastr.error('Erro', error) });
            })
    }
}