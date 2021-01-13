import React from "react";

interface Props {
    text:string
    ok: boolean;
    i: number;

}

export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    );
};

export default TextField;
