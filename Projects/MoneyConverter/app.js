const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropDowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

for(let select of dropDowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name == "from" && currCode == "INR"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "USD"){
            newOption.selected = "selected";
        }
        select.append(newOption);   
    }
    select.addEventListener("change",(evt) =>{  //evt.target gives select 1 or 2 where the change occured/
        updateFlage(evt.target);
    })
}
const updatExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountvalue = amount.value;
    if(amountvalue === "" || amountvalue < 1){
        amountvalue = 1;
        amount.value = "1";  //set the value in the input box, because you accessed input box as amount in line 31.
     }
    // console.log(fromCurr.value.toLowerCase(), toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;//inside url the country ocde should be small letter but we get in capital letter so convert to lower case.
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = amountvalue * rate;
    msg.innerText = `${amountvalue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

const updateFlage = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsource = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsource;
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updatExchangeRate();
});

window.addEventListener("load", () =>{
    updatExchangeRate();
});

