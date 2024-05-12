interface Album{
    artist:string,
    tittle:string,
    tracks?:number
}
function make_album(artist:string,tittle:string,tracks?:number){
    let album:Album ={
        artist:artist,
        tittle:tittle
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album
}
console.log(make_album("Taylor Swift","Fearless (Taylor's Version)"));
console.log (make_album("Ed Sheeran", "Divide",16));
console.log( make_album("Imagine Dragons", "Evolve"))