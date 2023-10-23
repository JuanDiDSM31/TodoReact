// import { useCounter } from "../hooks/useCounter";
// import { useFetch } from "../hooks/useFetch"
// import { LoadingQuote } from "../03-examples";
// import { Quote } from "../03-examples";

import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const Layout = () => {
    // utilizar nuestro hook useCounter
const {incremento, counter}=useCounter(1);
 const {data, isLoading, hasError}=useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
//  console.log({data, isLoading, hasError})
//  if(isLoading){
//     return (<h1>Cargando...</h1>);
//  }
const {author, quote}=!!data&&data[0];


   
 
 return (
<>

<h1 className="">Breakingbad quotes </h1> 
<hr />

 
{
    isLoading?<LoadingQuote/>
    
:<Quote author={author} quote={quote} />
}


<button onClick={incremento} className="btn btn-primary"
disabled={isLoading}
>next quote </button>
</>


)


}
