//一个流程
//三个三，三个API，三个核心概念，三个特点
//三个不同的Redux架构

import { createStore } from 'redux'

const initState = {
    count:1,
    list:[]
}

function reducer (state=initState,action) {

    //

    return state
}

const store = createStore(reducer)

export default store