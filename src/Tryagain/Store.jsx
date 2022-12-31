import {createContext, useContext,useReducer,useCallback, useMemo} from 'react'
import { useQuery } from '@tanstack/react-query'
function usePokemonSource() {
    const {data: pokemon} = useQuery(["pokemon"], () =>fetch('/pokenam.json').then((res)=>res.json()),{
        initialData: [],
    })
    const[{ search}, dispatch]=useReducer((state, action)=>{
        switch(action.type) {
            case"setSearch":
                return {...state, search:action.payload}
        } 
    },{
        search: ""
    })  
    const setSearch = useCallback((search) =>{
        dispatch ({
            type: "setSearch",
            payload: search
        })
    },[])
    const filterPokemon = useMemo(() => 
        pokemon.filter((e)=>e.name.toLowerCase().includes(search)).slice(0,21)
    ,[pokemon, search])

    const sortedPokemon = useMemo(()=>
        [...filterPokemon].sort((a,b)=>a.name.localeCompare(b.name))
    ,[filterPokemon])
    return {pokemon: sortedPokemon,search, setSearch};
}
const PokemanContext= createContext({
    pokemon: []
});
export function usePokemon() {
    return useContext(PokemanContext)
}
export const PokemonProvider = ({children}) => {
    return (
        <div>
            <PokemanContext.Provider value={usePokemonSource()}>
                {children}
            </PokemanContext.Provider>
        </div>
    )
}