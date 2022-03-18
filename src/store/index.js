import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        role: '',
    },

    getters: {
        getToken: state => {
            return state.token
        },

        getRole: state => {
            return state.role
        },

    },

    mutations: {
        setToken(state, token) {
            state.token = token;
        },

        removeToken(state) {
            state.token = '';
        },

        setRole(state, role) {
            state.role = role;
        },
        removeRole(state) {
            state.role = '';
        },

    },

    actions: {
        async fetchLogin(context, personData) {
            const res = await fetch('http://localhost/api-cafe/login', {
                method: 'POST',
                body: JSON.stringify(personData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(result => result)
                .catch(error => console.log(error))
            context.commit('setToken', res.data.user_token)
        },

        async fetchLogout(context) {
            const res = await fetch(
                'http://localhost/api-cafe/logout',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "Authorization": "Bearer " + this.getters.getToken
                    }
                })
                .then(response => response.json())
                .then(result => result)
                .then(error => error)
            context.commit("removeToken")
            context.commit("removeRole")
            return res
        },

        async GetUsers() {
            const users = await fetch("http://localhost/api-cafe/user", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + this.getters.getToken
                },
            })
                .then(res => res.json())
                .catch(e => console.log(e))

            return users.data;
        },

        async dismiss(context, id) {
            return await fetch(`http://localhost/api-cafe/user/${id}/to-dismiss`, {
                method: "get",
                headers: {
                    "Authorization": "Bearer " + this.getters.getToken
                },
            })
                .then(res => res.json())
                .catch(e => console.log(e));
        },

        async CreateUser(context, body) {
            let formData = new FormData();
            for (let i in body) {
                formData.append(i, body[i]);
            }
            return await fetch(`http://localhost/api-cafe/user`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
                body: formData
            })
                .then(res => res.json())
                .catch(e => console.log(e));
        },


        async GetWorkShifts() {
            return await fetch("http://localhost/api-cafe/work-shift", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + this.getters.getToken
                },
            })
                .then(response => response.json())
                .then(result => result)
                .then(error => error)
        },

        async CreateWorkShift(context, body) {
            return await fetch(`http://localhost/api-cafe/work-shift`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .catch(e => console.log(e));
        },

        async CloseWorkShift(context, id) {
            return await fetch(`http://localhost/api-cafe/work-shift/${id}}/close`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
            })
                .then(res => res.json())
                .catch(e => console.log(e));
        },

        async GetWorkersOnShift(context, id) {
            return await fetch(`http://localhost/api-cafe/work-shift/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
            })
                .then(response => response.json())
                .then(result => result.data)
                .then(error => error)
        },

        async addWorkerToShift(context, {shiftId, workerId}) {
            // console.log(shiftId)
            // console.log(workerId)
            return await fetch(`http://localhost/api-cafe/work-shift/${shiftId}/user`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
                body: JSON.stringify({user_id: workerId})
            })
                .then(res => res.json())
                .catch(e => console.log(e));
        },

        async activeWorkShift(context) {
            return await fetch(`http://localhost/api-cafe/work-shift/active/get`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.getters.getToken}`
                },
            })
                .then(res => res.json())
                .catch(e => console.log(e))
        },

        async WaiterGetOrders(context, id) {
            const shift = await fetch(`http://localhost/api-cafe/work-shift/${id}/order`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + this.getters.getToken
                },
            })
                .then(res => res.json())
                .catch(e => console.log(e))
            return shift;
        },

        async getRole(context) {

            if (await context.dispatch('GetUsers')) return context.commit("setRole", "admin")
            const res = await context.dispatch('WaiterGetOrders', 1)
            if (res.data || res.error.message === "Forbidden. You didn't work this shift!") return context.commit("setRole", "waiter")
            return context.commit("setRole", "cook")
        },

        async getCooks(context) {
            const res = await fetch(
                'http://localhost/api-cafe/order/taken/get',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + this.getters.getToken
                    }
                })
                .then(response => response.json())
                .then(result => result.data)
                .then(error => error)
            return res
        },

        async changeStatus(context, {id, status, token}) {
            const patchStatus = JSON.stringify({status})
            return await fetch(
                `http://localhost/api-cafe/order/${id}/change-status`,
                {
                    method: 'PATCH',
                    body: patchStatus,
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + token
                    }
                })
                .then(response => response.json())
                .then(result => result.data)
        },

    },
    modules: {}
})
