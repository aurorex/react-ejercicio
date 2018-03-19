import React from 'react';
import '../css/Main.css';
import PropTypes from 'prop-types';

const Main = ( {albums} ) => {
  <section>
    <h2>
    Escucha las mejores canciones de sus mejores albums!!!
    </h2>
    <h3>Albums</h3>
    <div>
      {albums.map((album,key)=> 
        <img key={key} src={album.url}
        />
      )}
      {/* {albums.map((album,key)=> 
        <h4 key={key} >{album.title}</h4>
      )} */}
    </div>
  </section>
};

Main.propType = {
  albums:PropType.array.isRequired,
}

export default Main;