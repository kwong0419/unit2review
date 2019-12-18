let key = "EuNi39MeeBPzJPWLqTWVYXxSFFgecZqB"

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let input = document.querySelector("#userInput");
    let select = document.querySelector("select");
    let submit = document.querySelector("#submit");
    let content = document.querySelector(".content");

    let h1 = document.createElement("h1");

    form.addEventListener('submit', () => {
        giphySearch(search, limit);
    })

    const giphySearch = async (userInput, userLimit) => {
        try{
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            console.log(res);
        } catch (err){
            console.log(err);
        }
    }

    const populateSelect = () => {
        for(let i = 1; i <= 25; i ++){
            let option = document.createElement('option');
            option.value = i;
            option.innerText = i;
            select.appendChild(option);
        }
    }

    populateSelect();
})