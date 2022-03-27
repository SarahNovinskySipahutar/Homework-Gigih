import './App.css'
import Gif from './components/index';
import data from './data';

function App() {
  return (
    <div className='container'>
      <h1>Playlist</h1>
      <div className='track-list'>
        {data.map((list)=>(
          <Gif
            key={list.id}
            url={list.album.images[1].url}
            nameAlbum={list.name}
            nameArtist={list.artists[0].name}
          />
        ))}
      </div>
    </div>
  );
}
    
export default App;
