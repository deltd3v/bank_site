import { Component } from "solid-js"

const component: Component<{ msg: string }> = (props ) => {
    const jsx = (<h1>{props.msg}</h1>)
    return jsx
}

export default component