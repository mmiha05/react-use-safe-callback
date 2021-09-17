import { DependencyList } from "react";
/**
 * Returns function that will fire given callback only if component is mounted
 * @param fn Callback function
 * @param deps Dependencies of the hook
 * @returns
 */
declare function useSafeCallback<T extends (...args: any[]) => any>(fn: T, deps: DependencyList): (...args: Parameters<T>) => ReturnType<T> | void;
export default useSafeCallback;
export { useSafeCallback };
