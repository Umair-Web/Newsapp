let loader=document.getElementById("loader");
let content=document.getElementById("whole-box");
let getnews=(search)=>{

fetch(`https://api.currentsapi.services/v1/search?keywords=${search}&language=en&apiKey=scmehoq-3ZrabXeZHsEpz-S8M3lO7fVfpLMfq33PcBbBTkfk`)
.then(function(data){
    return data.json()
})
.then(function(data){
    loader.style.display="none";
    content.style.display="block";
    console.log(data)
    var newstitle = data.news[0].title;
    console.log(newstitle);
    var image=data.news[0].image;
    console.log(image);
    let news=document.getElementById("news");
    const articles=news;
    for(i=0;i<28;i++){
        if( data.news[i].image=="None"){
            news.innerHTML+=`
        <div class="col-lg-3 col-md-6 mb-5 ">
           <div class="card newsbox" style="width: 24rem; height: 21rem;">
               <img src="images/istockphoto-1128119311-612x612.jpg" class="card-img-top news-img" alt="...">
               <p class="badge rounded-pill text-bg-secondary newsdate">${moment(data.news[i].published).fromNow()}</p>
               <div class="card-body">
                 <p class="card-text">${data.news[i].title}</p>
                 
               </div>
               <button type="button" class="btn btn-primary  button2"><a href="${data.news[i].url}">Read me..</a></button>
           </div>
       </div>`
    }
    else{
        news.innerHTML+=`
        <div class="col-lg-3 col-md-6 mb-5 ">
           <div class="card newsbox" style="width: 24rem; height: 21rem;">
               <img src="${data.news[i].image}" class="card-img-top news-img" alt="...">
               <p class="badge rounded-pill text-bg-secondary newsdate">${moment(data.news[i].published).fromNow()}</p>
               <div class="card-body">
                 <p class="card-text">${data.news[i].title}</p>
                 
               </div>
               <button type="button" class="btn btn-primary  button2"><a href="${data.news[i].url}">Read me..</a></button>
           </div>
       </div>`
    }
}
})
.catch(function(err){
    console.log(err)
})
}

getnews();

let newssearch=()=>{
    let news=document.getElementById("news");
    news.innerHTML="";
    loader.style.display="block";
    content.style.display="none";
    let search=document.getElementById("search");
    console.log(search.value);
    getnews(search.value);
}








// var url = 'https://api.currentsapi.services/v1/search?' +
// 'keywords=Amazon&language=en&' + 
// 'apiKey=scmehoq-3ZrabXeZHsEpz-S8M3lO7fVfpLMfq33PcBbBTkfk';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
// console.log(response.json());

// })

    