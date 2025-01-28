interface State {
  countTime: number;
  isShowCountTime: boolean;
}

type Action = CustomActions<State>;

export const initialState: State = {
  countTime: 60,
  isShowCountTime: false,
};

export function reducer(state: State = initialState, action: Action): State {
  const newstate = { ...state };
  switch (action.type) {
    case 'setCountTimeAction':
      newstate.countTime = action.payload;
      return newstate;
    case 'setIsShowCountTimeAction':
      newstate.isShowCountTime = action.payload;
      return newstate;

    case 'resetStateAction':
      return initialState;
    default:
      throw new Error('action not match');
  }
}

export const actions: ActionFunctions<State> = {
  setCountTimeAction: function (
    val: number
  ): CustomActionFromKeyState<'setCountTimeAction', State> {
    return {
      type: 'setCountTimeAction',
      payload: val,
    };
  },

  setIsShowCountTimeAction: function (
    val: boolean
  ): CustomActionFromKeyState<'setIsShowCountTimeAction', State> {
    return {
      type: 'setIsShowCountTimeAction',
      payload: val,
    };
  },

  resetStateAction: function (): CustomActionFromKeyState<
    'resetStateAction',
    State
  > {
    return {
      type: 'resetStateAction',
      payload: undefined,
    };
  },
};
