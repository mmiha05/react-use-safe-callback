import { useSafeCallback } from ".";
import { renderHook } from "@testing-library/react-hooks";

describe("Safe callback", () => {
  it("wraps the callback correctly and returns expected result", () => {
    const hook = renderHook(() =>
      useSafeCallback((a: number, b: number) => a + b, []),
    );

    expect(hook.result.current(10, 5)).toEqual(15);
    expect(hook.result.current(5, 5)).toEqual(10);
    expect(hook.result.current(0, 150)).toEqual(150);
  });

  it("updates outside depencies correctly", () => {
    const hook = renderHook(
      ({ multiplier }) =>
        useSafeCallback((a: number) => a * multiplier, [multiplier]),
      {
        initialProps: {
          multiplier: 5,
        },
      },
    );

    expect(hook.result.current(5)).toEqual(25);

    hook.rerender({ multiplier: 2 });
    expect(hook.result.current(5)).toEqual(10);

    hook.rerender({ multiplier: -1 });
    expect(hook.result.current(5)).toEqual(-5);
  });

  it("does not call function after un-unmount", () => {
    const mockFn = jest.fn();
    const hook = renderHook(() => useSafeCallback(mockFn, []));

    hook.unmount();

    hook.result.current();
    hook.result.current();
    hook.result.current();

    expect(mockFn).not.toHaveBeenCalled();
  });
});
