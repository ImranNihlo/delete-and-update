export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "start"})

        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=28")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}
export const removePhoto = (id) => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=28", {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "delete",
                    payload: id
                })
            })
    }
}
