const urlParams = new URLSearchParams(window.location.search);
const ImageID = urlParams.get('id');

async function getStuff(ImageID) {
  try {
    const response = await fetch("Shows.json");
    const shows = await response.json();
    //Get the elements from html to be styled
    const SImage = document.querySelector(".show-img");
    const Sname = document.getElementById("name");
    const Sgenre = document.getElementById("genre");
    const Srating = document.getElementById("rating");
    const Sdescription = document.getElementById("description");
    
    const bckgrndImg = document.querySelector(".showbody");
    //Go through all the Shows
    for(var s = 0; s < shows.length; s++){
      //Use ID for displaying the corresponding movie
      switch(ImageID){
        case "Beauty-and-the-beast-id":
              SImage.src = shows[0].profileimage;
              Sname.textContent = shows[0].name;
              Sgenre.textContent = shows[0].genre;
              Srating.textContent = shows[0].rating;
              Sdescription.textContent = shows[0].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Beaty and the beast.jpg')";
              break;
            case "Billions-id":
              SImage.src = shows[1].profileimage;
              Sname.textContent = shows[1].name;
              Sgenre.textContent = shows[1].genre;
              Srating.textContent = shows[1].rating;
              Sdescription.textContent = shows[1].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Billions.jpg')";
              break;
            case "Enola-holmes-id":
              SImage.src = shows[2].profileimage;
              Sname.textContent = shows[2].name;
              Sgenre.textContent = shows[2].genre;
              Srating.textContent = shows[2].rating;
              Sdescription.textContent = shows[2].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Enola holmes.jpg')";
              break;
            case "Gen-V-id":
              SImage.src = shows[3].profileimage;
              Sname.textContent = shows[3].name;
              Sgenre.textContent = shows[3].genre;
              Srating.textContent = shows[3].rating;
              Sdescription.textContent = shows[3].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/GenV.jpg')"; 
              break;
            case "Maleficent-id":
              SImage.src = shows[4].profileimage;
              Sname.textContent = shows[4].name;
              Sgenre.textContent = shows[4].genre;
              Srating.textContent = shows[4].rating;
              Sdescription.textContent = shows[4].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Maleficient.jpg')";
              break;
            case "The-New-Mutants-id":
              SImage.src = shows[5].profileimage;
              Sname.textContent = shows[5].name;
              Sgenre.textContent = shows[5].genre;
              Srating.textContent = shows[5].rating;
              Sdescription.textContent = shows[5].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/New Mutants.jpg')"; 
              break;
            case "Peacemaker-id":
              SImage.src = shows[6].profileimage;
              Sname.textContent = shows[6].name;
              Sgenre.textContent = shows[6].genre;
              Srating.textContent = shows[6].rating;
              Sdescription.textContent = shows[6].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Peacemaker.jpg')";
              break;
            case "Peaky-Blinders-id":
              SImage.src = shows[7].profileimage;
              Sname.textContent = shows[7].name;
              Sgenre.textContent = shows[7].genre;
              Srating.textContent = shows[7].rating;
              Sdescription.textContent = shows[7].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Peaky Blinders.jpg')"; 
              break;
            case "Red-Notice-id":
              SImage.src = shows[8].profileimage;
              Sname.textContent = shows[8].name;
              Sgenre.textContent = shows[8].genre;
              Srating.textContent = shows[8].rating;
              Sdescription.textContent = shows[8].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Red Notice.jpg')"; 
              break;
            case "Suits-id":
              SImage.src = shows[9].profileimage;
              Sname.textContent = shows[9].name;
              Sgenre.textContent = shows[9].genre;
              Srating.textContent = shows[9].rating;
              Sdescription.textContent = shows[9].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/Suits.jpg')"; 
             break;
            case "The-100-id":
              SImage.src = shows[10].profileimage;
              Sname.textContent = shows[10].name;
              Sgenre.textContent = shows[10].genre;
              Srating.textContent = shows[10].rating;
              Sdescription.textContent = shows[10].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/The 100.jpg')"; 
              break;
             case "You-id":
              SImage.src = shows[11].profileimage;
              Sname.textContent = shows[11].name;
              Sgenre.textContent = shows[11].genre;
              Srating.textContent = shows[11].rating;
              Sdescription.textContent = shows[11].description;
              bckgrndImg.style.backgroundImage = "url('images/image-shows/You.jpg')"; 
              break;
        }//End of Switch
    }//End of forloop

  } catch (error) {
    console.error(error);
  }//End of catch
}//End of function

getStuff(ImageID);      
