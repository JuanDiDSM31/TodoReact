import { useMemo } from "react";
import { getHeroByPubliser } from "../helpers/getHeroByPubliser"
import { HeroCards } from "./HeroCards";


export const HeroList = ({publisher}) => {

const h=useMemo(() => getHeroByPubliser(publisher), [publisher])
  return (
   <>
   <div className="row rows-col-1 row-cols-md-3 g-3">
    {
        h.map(hero=>(
           <HeroCards key={  hero.id}
           {...hero}
           />
        ))
    }
   </div>

   </>
  )
}
