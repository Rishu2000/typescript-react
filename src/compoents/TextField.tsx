import React, {useState} from 'react'

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
}

const TextField: React.FC<Props> = (Props) => {    

const [count, setCount] = useState<number | null | undefined>(5);       
setCount(null);         
setCount(34);

    return (
        <div>
            {Props.text}
            {Props.ok?Props.funStr:"false"}
            {Props.num}
            <h1>{Props.obj.firstName}</h1>
            <h1>{Props.obj.lastName}</h1>
        </div>
    )
}

export default TextField
