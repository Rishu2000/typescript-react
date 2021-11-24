import React, {useRef, useState} from 'react'

interface Person {
    firstName: string;
    lastName: string;
}
interface Props {
    text: string;
    ok?: boolean;       //? => means, not necessary to pass.
    num?: number;
    funStr ?: (name: string) => string;
    obj: Person;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<Props> = (Props) => {    

const [count, setCount] = useState<string>(Props.text);
const inputRef = useRef<HTMLInputElement>(null);
const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            {Props.text}
            {Props.ok?Props.funStr:"false"}
            {Props.num}
            <h1>{Props.obj.firstName}</h1>
            <h1>{Props.obj.lastName}</h1>
            <h2>{count}</h2>
            <input ref={inputRef} onChange={Props.handleChange}/>
        </div>
    )
}

export default TextField
