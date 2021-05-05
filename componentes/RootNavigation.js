// contorno para passar o prop de navegação para elementos fora da pilha de navegação.

import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}
