type CounterProps = {
    count: number,
    setCount: (count: number) => void
}

export const Counter = (props: CounterProps) => {
    return <div>
        <div>{props.count}</div>
        <div>
            <button onClick={() => props.setCount(props.count - 1)}> - </button>
            <button onClick={() => props.setCount(props.count + 1)}> + </button>
        </div>
    </div>
}