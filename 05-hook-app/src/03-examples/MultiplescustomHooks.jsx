import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultiplescustomHooks = () => {
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

<h1 className="">Breaking bas quotes </h1> 
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
