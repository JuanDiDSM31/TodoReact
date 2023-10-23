import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hook/useForm"
import { HeroCards } from "../components/HeroCards" 
import { getHeroByName } from "../helpers/getHeroByName";


export const Search = () => {


  const nave=useNavigate();
  const location =useLocation();
  // console.log(location)
  const { q = '' } = queryString.parse( location.search );
    // console.log({query})
  const heroes=getHeroByName(q);
  const {searchText, onInputChange}=useForm({
    searchText:q
  });
  const onSearchSubmit=(e)=>{
    e.preventDefault();
    // if(searchText.trim().length<=1)return
    nave(`?q=${searchText}`)
    // console.log({searchText})
    }
  return (
    <>
    <h1>Buscador</h1>
    <hr />

 <div className="row">
 <div className="col-5">
    <h4>Buscando</h4>
    <hr />
    <form onSubmit={onSearchSubmit}>
    <input 
     type="text"
     placeholder="buscar heroe"
     className="form-control"
     name="searchText"
     autoComplete="off"
     value={searchText}
     onChange={onInputChange}
    />
      <button 
      // onClick={onSearchSubmit}
      className="btn btn-outline-primary mt-2"> Buscar</button>
    </form>
    </div>
    <div className="col-7">
      <h1>resultados</h1>
      <hr />
      {
        (q==='') ?<div className="alert alert-primary">
        Buscar Super Heroe
        </div> : (heroes.length===0) && <div className="alert alert-danger">
        sin resultados <b>{q}</b>
      </div>
      }
      
      
      
      {
        heroes.map(hero=>(
          
        <HeroCards key={hero.id} {...hero}/>
        ))
      }
      
    </div>
 </div>

  

    </>
  )
}


