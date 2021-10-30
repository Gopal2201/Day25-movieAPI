//function which fetch a random data
async function getData() {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    //parse
    data = await response.json();
    console.log(data);        
    return data;
}

async function getMovie() {
    try {
        let res = await getData();
        console.log(res)
        displayResult(res);
    } catch (err) {
        console.error(err);
    }
}

function displayResult(res) {
    // let Animedataimg = document.getElementById("Animedataimg");
    // Animedataimg.innerHTML = "";
    let contentDiv = document.getElementById("content");

    for (let content in res) {
        let div = document.createElement('div');
        div.className='movie';

        let img = document.createElement("img")
        img.src = res[content].image;
        img.className = "img-fluid";
        img.style.width = "150px";
        div.appendChild(img);

        let MovieTitle = document.createElement("h4");
        MovieTitle.innerHTML = "Title: " + res[content].title;
        div.appendChild(MovieTitle);

        let director = document.createElement("h4");
        director.innerHTML = "Director: " + res[content].director;
        div.appendChild(director);

        let producer = document.createElement("h4");
        producer.innerHTML = "Producer: " + res[content].producer;
        div.appendChild(producer);

        let releasedate = document.createElement("h4");
        releasedate.innerHTML = "Release Date: " + res[content].release_date;
        div.appendChild(releasedate);

        let runningtime = document.createElement("h4");
        runningtime.innerHTML = "Running Time: " + res[content].running_time + "mins";
        div.appendChild(runningtime);

        contentDiv.appendChild(div);
    }

    
    // contentDiv.appendChild(table);
}
getMovie();