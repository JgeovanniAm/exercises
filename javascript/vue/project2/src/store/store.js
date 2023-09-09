import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pokemons: [],
        favorite: [],
    },
    getters: {
        simpleGetter: (state) => {
            return state
        }
    },
    mutations: {
        AddFavorite: (state, item) => {
            state.favorite = [...state.favorite, item];
        },
        DELETEfavorite: (state, itemCard) => {
            state.favorite = state.favorite.filter(item => item.name !== itemCard.name);
        },
    },
    actions: {
        Add: (ctx, payload) => {
            return new Promise((resolve, reject) => {
                if (payload) resolve({
                    ctx: ctx,
                    item: payload
                });
                else reject('err payload is undefined')
            });
        },
        DELETE: (ctx, payload) => {
            return new Promise((resolve, reject) => {
                if (payload) resolve({
                    ctx: ctx,
                    item: payload
                });
                else reject('err  payload is undefined')
            });
        }
    }
});
//console.log(store)
