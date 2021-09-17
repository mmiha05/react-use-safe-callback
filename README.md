# react-use-safe-callback

Hook that returns function that will fire no-op if component is not mounted.

## Use case and usage

If you had situations where you were doing something async like this:

```js
const [user, setUser] = useState(null);
useEffect(() => {
  fetchUser().then((user) => {
    setUser(user);
  });
}, []);
```

Issue with this is that if your component happens to be unmounted before the loading of `fetchUser` is done, you are calling `setUser` (changing the state) on an unmounted component.

You must likely encountered console error like this:
_Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application._

To assure that this does not happen, use this hook. It will assure that actual function is called only if component is mounted, otherwise it performs a silent no-op. Previous code example, fixed using this hook would look like:

```js
const [user, setUser] = useState(null);
const safeSetUser = useSafeCallback((user) => setUser(user), []);
useEffect(() => {
  fetchUser().then((user) => {
    safeSetUser(user);
  });
}, []);
```

## Things to have in mind

- Callback you have provided into hook will be fired **only if component** is mounted. That means that besides not fireing when/after component is un-mounting, it will not also fire until it has been mounted once, all the returned function will do is a silent no-op.
- Since there is no guarantee that function will be called when component is mounted and possibly a no-op will be done, the returned value can be undefined (if you use Typescript it will warn you)

## Linting

You can add this hook to `additionalHooks` rule of [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks#advanced-configuration) plugin.
For example

```json
"react-hooks/exhaustive-deps": ["warn", {
  "additionalHooks": "(useMyCustomHook|useSafeCallback)"
}]
```

## License

This project is licensed under the MIT License. Copy of license can be found in repository root.
