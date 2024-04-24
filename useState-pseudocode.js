//  https://react.dev/learn/state-a-components-memory#how-does-react-know-which-state-to-return

let componentHooks = [];
let currentHookIndex = 0;

function useState(initialState) {
  let pair = componentHooks[currentHookIndex];

  if (pair) {
    currentHookIndex++;
    return pair;
  }

  pair = [initialState, setState];

  function setState(nextState) {
    pair[0] = nextState;
    updateDOM();
  }

  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}
