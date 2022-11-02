import { Link } from 'react-router-dom'

export default function AlbumCard({thisAlbum, setAlbums}) {
    function DeleteOne() {
        fetch(`${process.env.REACT_APP_ENDPOINT}/albums/${thisAlbum.albumId}`, {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
          })
            .then((response) => (response.json()))
            .then(data => {
                fetch(process.env.REACT_APP_ENDPOINT+'/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
                console.log(data)})
        }

    return(
        <div className="album-card">
        <Link to={`/albums/${thisAlbum.albumId}`}>
       
            <h3 className="album-title">{thisAlbum.album}</h3>
            <p>{thisAlbum.artist}, {thisAlbum.year}</p>

        </Link>
            <button onClick={DeleteOne}>Delete</button>  
        </div>
    )
    }