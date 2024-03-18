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
    getAllPersons: (state) => state,
    getPersonById: (state) => (id) => state.persons.find((person) => person.id === id),
    filteredPersons: (state) => (filterFunction) => state.persons.filter(filterFunction),
    getPersonsByIds: (state) => (ids) => state.persons.filter(person => ids.includes(person.id)),
    getParentsForPerson: (state) => (id) => {
      const parents = []
      const mother = state.persons.find((person) => person.children.includes(id) && person.gender === 'female')
      const father = state.persons.find((person) => person.children.includes(id) && person.gender === 'male')
      if(mother) {
        parents.push(mother)
      }
      if(father) {
        parents.push(father)
      }
      return parents
    }
  },
  mutations: {
    addPerson: (state, payload) => {
      state.persons.push({ ...payload, id: genHash() })
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    deletePerson: (state, payload) => {
      state.persons = state.persons.filter((p) => p.id !== payload)
      state.persons.forEach((person) => {
        person.weddings = person.weddings.filter((wedding) => wedding.partnerId !== payload)
        person.children = person.children.filter((childId) => childId !== payload)
      })
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    editPerson: (state, payload) => {
      state.persons = state.persons.map((p) => (p.id === payload.id ? { ...p, ...payload } : p))
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    }
  },
  actions: {
    addPerson: ({ commit }, payload) => {
      commit("addPerson", payload)
    },
    deletePerson: ({ commit }, payload) => {
      commit("deletePerson", payload)
    },
    editPerson: ({ commit }, payload) => {
      commit("editPerson", payload)
    }
  }
}
