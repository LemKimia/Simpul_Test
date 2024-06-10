import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

interface ComponentState {
  clicked: boolean;
  visible: boolean;
}

interface InteractionState {
  [component: string]: ComponentState;
}

interface InteractionActions {
  setClicked: (component: string, value: boolean) => void;
  setVisible: (component: string, value: boolean) => void;
}

interface InteractionContextProps {
  states: InteractionState;
  actions: InteractionActions;
}

interface Props {
  children: ReactNode;
}

const initialValue: InteractionContextProps = {
  states: {},
  actions: {
    setClicked: () => {},
    setVisible: () => {},
  },
};

export const InteractionContext =
  createContext<InteractionContextProps>(initialValue);

export const InteractionProvider = ({ children }: Props) => {
  const [interactionState, setInteractionState] = useState<InteractionState>(
    {}
  );

  const setComponentState = useCallback(
    (component: string, newState: Partial<ComponentState>) => {
      setInteractionState((prevState) => ({
        ...prevState,
        [component]: {
          ...prevState[component],
          ...newState,
        },
      }));
    },
    []
  );

  const setClicked = (component: string, value: boolean) => {
    setComponentState(component, { clicked: value, visible: value });
  };

  const setVisible = (component: string, value: boolean) => {
    setComponentState(component, { visible: value });
  };

  const actions: InteractionActions = {
    setClicked,
    setVisible,
  };

  return (
    <InteractionContext.Provider value={{ states: interactionState, actions }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = (): InteractionContextProps => {
  const context = useContext(InteractionContext);

  if (context === undefined) {
    throw new Error(
      "useInteraction must be used within an InteractionProvider"
    );
  }

  return context;
};
