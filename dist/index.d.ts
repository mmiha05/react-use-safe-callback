import { DependencyList } from "react";
declare function useSafeCallback<T extends (...args: any[]) => any>(fn: T, deps: DependencyList): (...args: Parameters<T>) => ReturnType<T> | void;
export default useSafeCallback;
export { useSafeCallback };
