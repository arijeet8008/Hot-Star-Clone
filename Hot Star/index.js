
let m;

let id;

async function get_data(){

    let query = document.getElementById("query").value;
    let url = `https://www.omdbapi.com/?apikey=d563aa87&s=${query}`;

    try {
    let res = await fetch(url);
    let data = await res.json();
    append(data.Search);
    // console.log(data.Search);
    m = data.Search;
    // console.log(data.Search);
    }
    catch(err){   
        console.log(err);   
    }
}

function append(x){

    let err_msg = document.getElementById("img_data");
    err_msg.innerHTML=null
    let err_img = document.createElement("img")
    err_img.src = "https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"

    let cont = document.getElementById("cont");
    cont.innerHTML = null;

    if(!x){
        // alert("Not found")
        err_msg.append(err_img)
        // cont.innerHTML = null;
        return     
    }

    x.forEach((e)=>{
    let img = document.createElement("img");
    img.src = e.Poster;

    let p1 = document.createElement("p");
    p1.innerText = e.Title
    
    let p2 = document.createElement("p");
    p2.innerText = `Released - ${e.Year}`;

    let div = document.createElement("div");
    div.setAttribute("id","movie")
    div.append(img,p1,p2) 

    cont.append(div);

    })
}

function sorting(){
    m.sort(function(a,b){
        return a.Year - b.Year
    })
    append(m)
    
}
function filter_data(){
    
    m = m.filter((el)=>{
        return el.Year >=2010
    })
    append(m)
}

function debounce(myfunc,delay){

    if(id) clearTimeout(id)

    id = setTimeout(function(){
        myfunc()
    },delay)

}