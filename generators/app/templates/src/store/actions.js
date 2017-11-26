import * as types from './mutation_types.js'
import Vue from 'vue'
import axios from 'axios'

export default {
    addTotalTime({commit}, time){
        commit(types.ADD_TOTAL_TIME, time);
    },
    decTotalTime({commit}, time){
        commit(types.DEC_TOTAL_TIME, time);
    },
    savePlan({commit}, plan) {
        commit(types.SAVE_PLAN, plan);
    },
    deletePlan({commit}, idx) {
        commit(types.DELETE_PLAN, idx);
    },

    searchDoc({commit}) {
        axios.get("/doctors").then(
            (res) => {
                commit(types.SEARCH_DOC, res.data);
            },
            (failMsg) => {
                alert('加载失败');
            }
        );       
    }
}