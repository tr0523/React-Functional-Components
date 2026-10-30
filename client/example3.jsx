const React = require('react');
const {useState} = React;
const {createRoot} = require("react-dom/client");

const SongContainer = (props) => {
    const [songs,setSongs] = useState(props.songs);

    useEffect(()=>{
        const loadSongsFromServer = async () =>{
            console.log('Loading Songs!');
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        }

        loadSongsFromServer();
    },[]);

    if(songs.length===0){
        return(
            <div>
                <h1>No Songs Yet!</h1>


            </div>
        );
    }

    const SongList = songs.map((song)=>{
        return(
            <div>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    const songList =songs.map((song=>{
        return(
            <div></div>
        )
    }))

    return(
            <div>
                <h1>My Favorite Song!</h1>
                <button onClick={()=>setReload(!reload)}>Reload Songs</button>
                {songList}

            </div>
        );
};

const init = () => {
    const root = createRoot(document.getElementById('app'))
    ;
    root.render(<SongContainer songs= {[]}/>);

};

window.onload = init;