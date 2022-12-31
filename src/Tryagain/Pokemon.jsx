import { PokemonProvider, usePokemon } from './Store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    Link,
    Outlet,
    ReactLocation,
    Router,
    useMatch
} from '@tanstack/react-location'


const queryClient = new QueryClient();
const location = new ReactLocation();

const SearchBox = ()=>{
    const {search,setSearch} = usePokemon();
    return (
        <input 
            type="text" 
            className='mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 focus:outline-none sm:text-lg p-2'
            placeholder='Search'
            value={search}
            onChange={(e)=>setSearch(e.target.value )}
        />
    )
}
const PokemonList = () => {
    const {pokemon} = usePokemon();
    if (!pokemon.length) {
        return <div className='pt-2'>
            <p className='font-semibold text-center py-5 border border-black rounded-md'>Pokemon Not Found!</p>
        </div>
    }
    return (
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-3 '>
            {pokemon.map((e)=>(
                <Link key={e.id} to={`/pokemon/${e.id}`}>
                    <li
                    key={e.id}
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                    <div className="flex-1 flex flex-col p-8">
                        <img
                        className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`}
                        alt="pokemanImage"
                        />
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{e.name}</h3>
                    </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
function PokemonDetails () {
    const { 
        params: { id },
    } = useMatch();
    const { pokemon} = usePokemon();
    const pokemonData = pokemon.find((e)=>e.id === +id);
    if(!pokemonData) {
        return <div>pokemon Not Founded !</div>
    }
    return (
        <div className="mt-3">
            <Link to="/">
                <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
                <img
                className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                alt=""
                />
                <div className="ml-3">
                    <h2 className="text-2xl font-bold">{pokemonData.name}</h2>
                    <div className="mt-3">
                        <h3 className="text-xl font-bold">Stats</h3>
                        <ul className="mt-3">
                        {[
                            "hp",
                            "attack",
                            "defense",
                            "special_attack",
                            "special_defense",
                            "speed",
                        ].map((state) => (
                            <li key={state} className="grid grid-cols-2">
                                <span className="font-bold">{state}</span>
                                <span className='font-semibold'>{pokemonData[state]}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Footer() {
    return (
        <div className='font-bold text-center py-3'>Made with 
            <span className='text-red-500'>Love</span>
            by Ibrahim  <span className='block'>FreeCodeCamp</span>
        </div>
    )
}
const Pokemon = () => {
    const routes = [
        {
            path: "/",
            element: (
                <>
                    <SearchBox />
                    <PokemonList />
                    <Footer/>
                </>
            )
        },
        {
            path: "/pokemon/:id",
            element: (
                <>
                <PokemonDetails />
                <Footer/>
                </>
            )
        },
    ]
    return (
        <QueryClientProvider client={queryClient}>
            <PokemonProvider>
                <Router location={location} routes={routes}>
                    <div className='mx-auto max-w-3xl'>
                        <Outlet />
                    </div>
                </Router>
            </PokemonProvider>
        </QueryClientProvider>
    )
}
export default Pokemon