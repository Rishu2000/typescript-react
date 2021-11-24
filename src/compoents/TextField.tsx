import React from 'react'

interface Props {
    text: string;
    ok?: boolean;
    num?: number;
}

const TextField: React.FC<Props> = (Props) => {     
    return (
        <div>
            {Props.text}
            {Props.ok?"true":"false"}
            {Props.num}
        </div>
    )
}

export default TextField
