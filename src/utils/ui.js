// Change state to Toggle menu
export function handleClick(state, setState, setHasInteracted = null) {
    // save user first interaction (optional)
    if (setHasInteracted) setHasInteracted(true);
    // change state
    setState(!state);
}