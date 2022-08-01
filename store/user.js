export const state = () => ({
  userID: null,
})

export const getters = {
  getUserID(state) {
    return state.userID
  },
}

export const mutations = {
  setUserID(state, userID) {
    state.userID = userID
  },
}
