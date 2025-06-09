export const initialStore = () => {
  return {
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
    characters: [],
    planets: [],
    vehicles: [],
    favorites: {
      characters: [],
      planets: [],
      vehicles: []
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_characters':
      const { characters } = action.payload
      return {
        ...store,
        characters: characters
      };
    case 'set_planets':
      const { planets } = action.payload
      return {
        ...store,
        planets: planets
      };
    case 'set_vehicles':
      const { vehicles } = action.payload
      return {
        ... store,
        vehicles: vehicles
      };
    case 'set_favorites':
      const { favorites } = action.payload
      return {
        ... store,
        favorites: favorites
      };

    default:
      throw Error('Unknown action.');
  }

}
