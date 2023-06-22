import {Movie} from './Movie'
import {Main} from "../layout/Main";

function Movies(props) {
    const {movies} = props

    return <div className="movies">
        {movies.map(movie => (
            <Movie key={movies.imbID} {...movie} />
            ))}
    </div>
}

export {Movies}