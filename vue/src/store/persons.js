import { genHash } from "./modals";
import { person1, person2, person3, person4, person5 } from "@/assets/personImages";
const sharedHash1 = genHash();
const sharedHash2 = genHash();
const initialState = [
  {
    id: genHash(),
    secondName: "Willmont",
    firstName: "Shaylyn",
    patronomyc: "Morando",
    birth_date: "24.04.2010",
    die_date: "",
    gender: "Male",
    children: null,
    biography: "Waukesha County Airport",
    activity: "Product Management",
    photo: person1
  },
  {
    id: genHash(),
    secondName: "Hurrion",
    firstName: "Lotti",
    patronomyc: "Dradey",
    birth_date: "07.06.1991",
    die_date: "12.11.2012",
    gender: "Male",
    children: [],
    biography: "Balesin Island Airport",
    activity: "Research and Development",
    photo: person2
  },
  {
    id: genHash(),
    secondName: "Boor",
    firstName: "Caria",
    patronomyc: "Guise",
    birth_date: "24.03.1950",
    die_date: "",
    gender: "Female",
    children: [sharedHash1, sharedHash2],
    biography: "Guerrero Negro Airport",
    activity: "Engineering",
    photo: person3
  },
  {
    id: sharedHash1,
    secondName: "Maxwale",
    firstName: "Jobyna",
    patronomyc: "Mingo",
    birth_date: "21.07.1965",
    die_date: "",
    gender: "Female",
    children: [],
    biography: "Fishermans Airfield",
    activity: "Human Resources",
    photo: person4
  },
  {
    id: sharedHash2,
    secondName: "Miettinen",
    firstName: "Viviana",
    patronomyc: "Bain",
    birth_date: "16.09.1974",
    die_date: "",
    gender: "Female",
    children: [],
    biography: "Beijing Daxing International Airport",
    activity: "Product Management",
    photo: person5
  }
];
export default {
    namespaced: true,
    state: {
        persons: JSON.parse(localStorage.getItem("persons")) || initialState
    },
    getters: {
        getAllPersons: (state) => state.persons,
    getPersonById: (state) => (id) => {
      return state.persons.find((p) => p.id === id);
    }
  },
  actions: {
    addPerson: ({ commit }, payload) => {
        commit("addPerson", payload);
      },
      deletePerson: ({ commit }, payload) => {
        commit("deletePerson", payload);
      },
      editPerson: ({ commit }, payload) => {
        commit("editPerson", payload);
      }
    },
    mutations: {
        addPerson: (state, payload) => {
            const newId = genHash();
            state.persons.push({ id: newId, ...payload });
            localStorage.setItem("persons", JSON.stringify(state.persons));
          },
          deletePerson: (state, payload) => {
            state.persons = state.persons.filter((p) => p.id !== payload);
            localStorage.setItem("persons", JSON.stringify(state.persons));
          },
          editPerson: (state, payload) => {
            state.persons = state.persons.map((p) => {
              if (p.id === payload.id) {
                return payload;
              }
              return p;
            });
            localStorage.setItem("persons", JSON.stringify(state.persons));
          }
        }
      };