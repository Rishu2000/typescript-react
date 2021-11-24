import React from 'react'

interface Props {
    text: string;
    ok?: boolean;       //? => means, not necessary to pass.
    num?: number;
    funVoid ?: () => void;
}

const TextField: React.FC<Props> = (Props) => {    
    return (
        <div>
            {Props.text}
            {Props.ok?Props.funVoid:"false"}
            {Props.num}
        </div>
    )
}

export default TextField
