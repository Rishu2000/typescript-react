import React from 'react'

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
