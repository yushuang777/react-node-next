

interface State {
  searchValue: string
  currentTab: string
}

type Action = CustomActions<State>

export const initialState: State = {
  searchValue: 'test',
  currentTab: '全选',
}

export function reducer(state: State = initialState, action: Action): State {
  const newstate = { ...state }
  switch (action.type) {
    case 'setSearchValueAction':
      newstate.searchValue = action.payload
      return newstate
    case 'setCurrentTabAction':
      newstate.currentTab = action.payload
      return newstate
    case 'resetStateAction':
      return initialState
    default:
      throw new Error('action not match')
  }
}

export const actions: ActionFunctions<State> = {
  setSearchValueAction: function (
    val: string,
  ): CustomActionFromKeyState<'setSearchValueAction', State> {
    return {
      type: 'setSearchValueAction',
      payload: val,
    }
  },
  setCurrentTabAction: function (
    val: string,
  ): CustomActionFromKeyState<'setCurrentTabAction', State> {
    return {
      type: 'setCurrentTabAction',
      payload: val,
    }
  },
  resetStateAction: function (): CustomActionFromKeyState<
    'resetStateAction',
    State
  > {
    return {
      type: 'resetStateAction',
      payload: undefined,
    }
  },
}
