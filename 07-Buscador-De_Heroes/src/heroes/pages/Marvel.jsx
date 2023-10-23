import { HeroList } from "../components/HeroList"
// import { getHeroById } from "../helpers/getHeroById"


export const Marvel = () => {
  // getHeroById
  return (
   <>
    <h1>Marvel Page</h1>
    <hr />

    <HeroList publisher='Marvel Comics'/>
   </>
  )
}
