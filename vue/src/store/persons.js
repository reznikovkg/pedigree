import { genHash } from "./modals";
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
        photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
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
        photo: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
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
        photo: "data:image/jpeg;base64,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"
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
        photo: "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg"
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
        photo: "data:image/jpeg;base64,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"
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
            return state.persons.find((person) => person.id === id);
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
                    return { ...p, ...payload };
                }
                return p;
            });
            localStorage.setItem("persons", JSON.stringify(state.persons));
        }
    }
};