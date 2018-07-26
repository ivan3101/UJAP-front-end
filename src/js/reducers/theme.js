import {normalTheme, specialTheme} from "../types/theme";

const defualtState = {
  theme: 'http://localhost:5000/style.css'
};

export default (state = defualtState, action) => {
  switch (action.type) {
    case normalTheme:
      return {
        theme: 'http://localhost:5000/style.css'
      };
    case specialTheme:
      return {
        theme: 'http://localhost:5000/index.css'
      }

    default:
      return state
  }
}
