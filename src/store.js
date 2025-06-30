export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    naves:[],
    texto: 'texto inicial',
    navesFav:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'change_text':

      const { newText } = action.payload

      return {
        ...store,
        texto: newText
      };
    case 'toggle_fav_ship':

      const { nameShip } = action.payload

      let updatednaves = []

      if(store.navesFav.includes(nameShip)){
        console.log('quita elemento')
        updatednaves = store.navesFav.filter( (nave)=> nave != nameShip)
      }else{
        console.log('agrega elemento')
        updatednaves = [...store.navesFav,nameShip]
      }

      return {
        ...store,
        navesFav: updatednaves
      };
    case 'load_ships':
      return {
        ...store,
        naves: action.payload
      };
    default:
      throw Error('Unknown action.');
  }    
}
