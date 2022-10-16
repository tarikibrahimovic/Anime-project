import { useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesList } from "../../components/Context/Context" 
import { Link } from 'react-router-dom'

export default function MangaInfo(){
    const { addToFavorites, removeFromFav, favItems } = useContext(FavoritesList)
    const { state } = useLocation()
    const title = state.title
    const id = state.id
    const image = state.image
    const description = state.description
    return (
        <div className="flex flex-row justify-center items-start w-full h-full bg-dark text-white">
          <div className="flex flex-col w-1/4 justify-center items-center pt-4">
            <img className="rounded-lg w-40 cursor-pointer" src={image}/>
            <p>{title}</p>
          </div>
            <div className='flex flex-col w-3/4 pt-4 gap-5 h-full'>
            <div><h4>{description}</h4></div>
            <div><Link to='/manga'>
            {favItems.find((el) => el.id === id) ? (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-4 border-blue-600 hover:border-blue-500 rounded"
            onClick={() => removeFromFav(state.id, state.title)}
          >
            Remove from favorites
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-4 border-blue-600 hover:border-blue-500 rounded"
            onClick={() => addToFavorites(state)}
          >
            Add to favorites
          </button>
        )}
            </Link>
            </div>
            </div>
            
        </div>
    )
}
