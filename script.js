console.log("News app")
let newsContainer = document.getElementById('newscard')
let apikey ='7153d5a3b3874786b48965a82eb08512'
let sources = "bbc-news"
const xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`,true)

xhr.onload =function(){
    if(this.status===200){
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        let newsHtml = "";
        articles.forEach(element => {
            
            let news =`<div class="card m-3" style="width: 18rem;">
                    <img src=${element.urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    </div>
                    <a href=${element.url} class="btn btn-primary">Read More</a>
                </div>`
                newsHtml += news
        })
        newsContainer.innerHTML = newsHtml
    }else{
        console.log("Some error occured")
    }
}
xhr.send()

