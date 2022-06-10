/** Implementing the observer pattern for state management
 * (also bc i could do redux but im too lazy to implement that atm)
 */

export const makeObservable = (target) => {
  let listeners = []; // initial listeners can be passed an an argument as well
  let value = target;

  function get() {
    return value;
  }

  function set(newValue) {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((l) => l(value));
  }

  function subscribe(listenerFunc) {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc); // will be used inside React.useEffect
  }

  function unsubscribe(listenerFunc) {
    listeners = listeners.filter((l) => l !== listenerFunc);
  }

  return {
    get,
    set,
    subscribe
  };
};

export const userStore = makeObservable({ name: 'user', count: 0 });

const useUser = () => {
  const [user, setUser] = React.useState(userStore.get());

  React.useEffect(() => {
    return userStore.subscribe(setUser);
  }, []);

  const actions = React.useMemo(() => {
    return {
      setName: (name) => userStore.set({ ...user, name }),
      incrementCount: () => userStore.set({ ...user, count: user.count + 1 }),
      decrementCount: () => userStore.set({ ...user, count: user.count - 1 })
    };
  }, [user]);

  return {
    state: user,
    actions
  };
};
