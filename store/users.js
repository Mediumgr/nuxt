export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const users = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/users'
    )
    commit('setUsers' , users)
  },
  async fetchUserById(_, userId) {
    const user = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    return user
  },
}

export const getters = {
  users: (state) => state.users,
}
