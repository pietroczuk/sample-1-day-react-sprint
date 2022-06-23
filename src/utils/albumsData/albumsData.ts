import albums from './albums.json';

import album1cover from '../../components/ui/images/albums/album1.jpg';
import album2cover from '../../components/ui/images/albums/album2.jpg';
import album3cover from '../../components/ui/images/albums/album3.jpg';

const albumsData = () => {
    const albumCiversArr = [album1cover, album2cover, album3cover];
    albums.forEach((album, index)=> {
        album.cover = albumCiversArr[index];
    })
    return albums;
}
export default albumsData 