import React, {
  ComponentType,
  createContext,
  memo,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useEvent } from 'store/events/hooks';

interface Context {
  activeEventId?: string;
  setActiveEventId: (eventId: string) => void;
}

export const EPGContext = createContext<Context>({
  setActiveEventId: (_eventId: string) => {},
});

interface EPGContextProviderProps {
  children: ReactNode;
}

export const EPGContextProvider = (props: EPGContextProviderProps) => {
  const { children } = props;
  const [activeEventId, setActiveEventId] = useState<string | undefined>();

  return (
    <EPGContext.Provider value={{ activeEventId, setActiveEventId }}>
      {children}
    </EPGContext.Provider>
  );
};

export const withEPGContext = <Props extends Record<string, any>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithEPGContext = (props: Props) => {
    if (!Component) {
      return null;
    }

    return (
      <EPGContextProvider>
        <Component {...props} />
      </EPGContextProvider>
    );
  };

  return memo(ComponentWithEPGContext);
};

export const useEPG = () => {
  const { activeEventId, setActiveEventId } = useContext(EPGContext);

  return useMemo(() => {
    return { activeEventId, setActiveEventId };
  }, [activeEventId, setActiveEventId]);
};

export const useActiveEPGEvent = () => {
  const { activeEventId } = useEPG();
  const { event } = useEvent(activeEventId || '');

  return useMemo(() => ({ activeEvent: event }), [event]);
};
