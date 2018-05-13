import * as React from 'react';

export const App: React.StatelessComponent = () => {
    const text: string = 'Hello React plus Typescript';
    const number: number = 6
    return(
        <h1>{`${text} plus es${number} on Parcel!!`}</h1>
    )
} 