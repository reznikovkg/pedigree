import { genHash } from "@/services/common"

export const PERSONS = "persons"

const initialState = [
  {
    id: '1',
    secondName: 'Иванов',
    firstName: 'Иван',
    patronymicName: 'Иванович',
    gender: 'male',
    military: [],
    children: ['1','2'],
    weddings: []
  },
  {
    id: '2',
    secondName: 'Петров',
    firstName: 'Петр',
    patronymicName: 'Иванович',
    gender: 'male',
    weddings: []
  }
]

export default {
  namespaced: true,
  state: {
    persons: JSON.parse(localStorage.getItem(PERSONS)) || initialState,
  },
  getters: {
    getAllPersons: (state) => state.persons,
    getPersonById: (state) => (id) => state.persons.find((person) => person.id === id),
    filteredPersons: (state) => (filterFunction) => state.persons.filter(filterFunction),
    getPersonsByIds: (state) => (ids) => state.persons.filter(person => ids.includes(person.id))
  },
  mutations: {
    addPerson: (state, payload) => {
      state.persons.push(payload)
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    deletePerson: (state, payload) => {
      state.persons = state.persons.filter((person) => {
        const isNotRemove = person.id !== payload

        if (isNotRemove) {
          person.weddings = person.weddings.filter((wedding) => wedding.partnerId !== payload)
          person.children = person.children.filter((childId) => childId !== payload)
        }

        return isNotRemove
      })

      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    editPerson: (state, payload) => {
      state.persons = state.persons.map((p) => (p.id === payload.id ? { ...p, ...payload } : p))
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    }
  },
  actions: {
    addPerson: ({ commit }, payload) => new Promise((resolve) => {
      const person = { ...payload, id: genHash() }
      commit("addPerson", person)
      return resolve(person)
    }),
    deletePerson: ({ commit }, payload) => {
      commit("deletePerson", payload)
    },
    editPerson: ({ commit }, payload) => {
      commit("editPerson", payload)
    }
  }
}
