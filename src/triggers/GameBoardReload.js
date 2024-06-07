import { useState } from "react";

let reloadState = false;
let setReloadState;

export function useGameBoardReloadTrigger() {
    [reloadState, setReloadState] = useState(false);
    return [reloadState, setReloadState];
}

export function triggerGameBoardReload() {
    setReloadState(!reloadState);
}