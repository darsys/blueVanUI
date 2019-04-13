const state = {
  ioPoints: []
}

const mutations = {
  addpoint (state, newPoint) {
    state.ioPoints.push(newPoint)
  },
  removepoint (state, pointId) {
    state.ioPoints.splice(state.ioPoints.map(function (e) { return e.id }).indexOf(pointId), 1)
  }
}

const actions = {
  addpoint ({ commit }, newpoint) {
    console.log('add new point')
    commit('addpoint', newpoint)
  },
  removepoint ({ commit }, id) {
    commit('removepoint', id)
  }
}

export default {
  state,
  mutations,
  actions
}
