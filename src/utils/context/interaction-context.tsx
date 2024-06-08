import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

interface ComponentState {
  clicked: boolean;
  hovered: boolean;
  visible: boolean; 
  mode: "list" | "room"
}

interface InteractionState {
  [component: string]: ComponentState;
}

interface InteractionActions {
  setClicked: (component: string, value: boolean) => void;
  setHovered: (component: string, value: boolean) => void;
  setVisible: (component: string, value: boolean) => void; 
  setMode: (component: string, value: "list" | "room") => void
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
    setHovered: () => {},
    setVisible: () => {},
    setMode: () => {}
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

  const setHovered = (component: string, value: boolean) => {
    setComponentState(component, { hovered: value, visible: value });
  };

  const setVisible = (component: string, value: boolean) => {
    setComponentState(component, { visible: value });
  };

  const setMode = (component: string, value: "list" | "room") => {
    setComponentState(component, {mode: value})
  }

  const actions: InteractionActions = {
    setClicked,
    setHovered,
    setVisible,
    setMode,
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
