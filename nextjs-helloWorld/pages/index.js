import Link from 'next/link';
import React from 'react';

{/* Functional Component inside Link */}
const MyButton = React.forwardRef(
    ( { onClick , href } , ref )=>(
        <a href = {href} onClick = {onClick} ref = {ref} ><button type="button">Click Me!</button></a>
    )
)

const Index = () => 
    (<div>
        <Link href="/about" >
            <a title="About Page">About Page</a>
        </Link>
        
        <p>Hello World from Next.js!</p>
        <Link href="/about">
            <MyButton />
        </Link>
    </div>
    )

export default Index;