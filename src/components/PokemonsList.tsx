import { usePokemonsListQuery } from '../api/usePokemonsListQuery';

const PokemonsList = () => {
    const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } = usePokemonsListQuery()

    return (
        <div className="App" style={{ marginTop: "60px" }}>
            <h4>useInfiniteQuery Example</h4>
            {isLoading ? (
                <p>loading...</p>
            ) : (
                <>
                    <ul>
                        {data.pages.map((group, i) =>
                            group.response.map((pokemon) => {
                                const pokemonIndex = pokemon.url.split('/')
                                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex[6]}.png`
                                return (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={imgUrl} />
                                        <li> {pokemon.name}</li>
                                    </div>
                                )
                            })
                        )}
                    </ul>
                    <button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {isFetchingNextPage
                            ? "Loading more..."
                            : hasNextPage
                                ? "Load More"
                                : "Nothing more to load"}
                    </button>
                </>
            )}
        </div>
    );
}

export default PokemonsList