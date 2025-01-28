interface State {
  loginModal: boolean;
  currentTab: string;
}

type Action = CustomActions<State>;

export const initialState: State = {
  loginModal: false,
  currentTab: "全选",
};

export function reducer(state: State = initialState, action: Action): State {
  const newstate = { ...state };
  switch (action.type) {
    case "setLoginModalAction":
      newstate.loginModal = action.payload;
      return newstate;
    case "setCurrentTabAction":
      newstate.currentTab = action.payload;
      return newstate;
    case "resetStateAction":
      return initialState;
    default:
      throw new Error("action not match");
  }
}

export const actions: ActionFunctions<State> = {
  setLoginModalAction: function (
    val: boolean
  ): CustomActionFromKeyState<"setLoginModalAction", State> {
    return {
      type: "setLoginModalAction",
      payload: val,
    };
  },
  setCurrentTabAction: function (
    val: string
  ): CustomActionFromKeyState<"setCurrentTabAction", State> {
    return {
      type: "setCurrentTabAction",
      payload: val,
    };
  },
  resetStateAction: function (): CustomActionFromKeyState<
    "resetStateAction",
    State
  > {
    return {
      type: "resetStateAction",
      payload: undefined,
    };
  },
};
