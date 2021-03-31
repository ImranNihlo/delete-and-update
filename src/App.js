import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos, removePhoto} from "./actions";

function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    const handleDelete = (id) => {
        dispatch(removePhoto(id))
    }


    return (
        <div className="content">
               {loading ? "идет загрузка..." : (
                    todos.map(todo => {
                        return(
                            <div className="photo">
                                <div>
                                    <img className="img" src={todo.url} alt={"photo"}/>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(todo.id)}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        )
                    })
                )}
        </div>
    );
}

export default App;

