import { DependencyList, useCallback, useEffect, useRef } from "react";

/**
 * Returns function that will fire given callback only if component is mounted
 * @param fn Callback function
 * @param deps Dependencies of the hook
 * @returns
 */
function useSafeCallback<T extends (...args: any[]) => any>(
  fn: T,
  deps: DependencyList
): (...args: Parameters<T>) => ReturnType<T> | void {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      if (isMounted.current) {
        return fn(...args);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [deps]
  );
}

export default useSafeCallback;
export { useSafeCallback };
