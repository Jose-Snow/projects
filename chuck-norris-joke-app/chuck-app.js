const ChuckNorrisJoke = async ()=>{
  try{
    const FetchJoke = await fetch("https://api.chucknorris.io/jokes/random", {
      headers:{
        'Accept': "application/json"
      }
    });

    const JokeData =await FetchJoke.json() ;
    document.getElementById('jokes').innerHTML = JokeData.value ;
  }
  catch(error){
    console.log(error)
  }
 
}
 document.getElementById('loadJokesBtn').addEventListener("click", ChuckNorrisJoke);

