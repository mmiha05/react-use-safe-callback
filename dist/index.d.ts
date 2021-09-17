import { DependencyList } from "react";
/**
 * Returns function that will fire no-op if component is not mounted.
 * @param fn Callback function.
 * @param deps Dependencies of the hook.
 */
declare function useSafeCallback<T extends (...args: any[]) => any>(fn: T, deps: DependencyList): (...args: Parameters<T>) => ReturnType<T> | void;
export default useSafeCallback;
export { useSafeCallback };
