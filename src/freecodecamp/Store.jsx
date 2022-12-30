import { useEffect, createContext, useContext, useReducer,useCallback, useMemo } from 'react'

 function UsePokemanSource() {
    const [{pokeman, search },dispatch] = useReducer((state, action)=>{
        switch(action.type) {
            case"setPokeman":
                return{...state, pokeman:action.payload};
            case"setSearch":
                return {...state, search: action.payload}
        }
    }, {
        pokeman: [],
        search: ""
    })
    useEffect(()=>{
        fetch("../src/data/pokenam.json").then((res)=>res.json()).then((data)=>dispatch({
            type: "setPokeman",
            payload: data
        }));
    },[]);
    const setSearch =useCallback((search) =>{
        dispatch({
            type: 'setSearch',
            payload: search
        });
    }, []);

    const filterdPokeman = useMemo(
        () => pokeman.filter((e) => e.name.toLowerCase().includes(search)).slice(0,20)
    ,[pokeman, search ]);

    const sortedFilterPokeman = useMemo(()=>
        [...filterdPokeman].sort((a,b)=> a.name.localeCompare(b.name))
    ,[filterdPokeman]);


    return { pokeman: sortedFilterPokeman, search, setSearch }
}
 const PokemanContex = createContext({pokeman:[]});

export const usePokeman = ()=>{
    return useContext(PokemanContex)
}

export const PokemanProvider = ({
    children
}) => { 
    return (
    <div>
        <PokemanContex.Provider value={UsePokemanSource()} >
            {children}
        </PokemanContex.Provider>
    </div>
  )
}

