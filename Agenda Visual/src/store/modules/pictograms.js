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
            const response = await fetch('http://localhost:8080/pictograms', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log("1")
            // Transform from object to list
            const pictosData = Object.values(await response.json())
            // updates the state
            commit("setTasks", pictosData)
            console.log(pictosData[3])
        }, 
    
}

}
