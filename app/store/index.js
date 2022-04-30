import { auth, googleProvider } from '@/plugins/firebase.js'

export const strict = false

export const state = () => ({
    user: null,
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    signInWithGoogle({ commit }){
        return auth.signInWithPopup(googleProvider)
    },

    signOut() {
        return auth.signOut()
    }
}

export const getters = {
    user(state){
        return state.user
    },
    isAuthenticated (state) {
        return !!state.user
    }
}
