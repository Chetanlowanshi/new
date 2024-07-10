const url = "https://cat-fact.herokuapp.com/facts"
 const btn = document.getElementById("btn")

 function getFacts(){
    const response= fetch(url);
    console.log(response);
 }
 btn.addEventListener("click",getFacts)
