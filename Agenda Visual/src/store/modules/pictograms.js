export default {
    namespaced: true,
    state: {
        items : []
    },
    mutations: {
        setTasks(state, pictos) {
            state.items = pictos
        }
      
    },
    actions: {   
        async fetchPictos({ commit }) {
            const response = await fetch('https://localhost/api/pictograms', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            // Transform from object to list
            const pictosData = Object.values(await response.json())
            // updates the state
            commit("setTasks", pictosData)
        }, 
    
}

}
