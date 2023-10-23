import { heroes } from "../data/heroes"


export const getHeroByPubliser = (publisher) => {
const valiar=['DC Comics',  'Marvel Comics'];
if(!valiar.includes(publisher)){
throw new Error(`${publisher} no existe`)
}
  return heroes.filter(heroe=>heroe.publisher === publisher)
}
