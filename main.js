//? MAIN.JS
console.log("***** main *****")

// https://api.coinranking.com/v2/coins        
 

 const searchInput = document.getElementById("searchInput")
 const searchButton = document.getElementById("search")
 const coinList = document.getElementById("coinList")
 const form = document.getElementById("form")


 const getCoinApi = async()=>{
    coinList.innerHTML=""
    try {
        const res= await fetch("https://api.coinranking.com/v2/coins/")
        // console.log(res);
        const data = await res.json()
        // console.log(data);
        const datas = data.data
        // console.log(datas);
        const coins = datas.coins //? ikisini birlestirebiliriz const coins = data.data.coins
        // console.log(coins);
        allCoinsArr = coins
        getCoins(coins)
        // console.log(coins);
        
    } catch (error) {
        
    }
 }

 getCoinApi()


 let allCoinsArr= []
//  console.log(allCoinsArr); //? Bos geliyor 

const getCoins = (coin)=>{
    const { name, symbol, price, iconUrl, change, color } = coin

    coinList.innerHTML +=`
    <li class="coinClass">
    <article class='article1'>
        <p class="name">${name}</p>
        <p class="symbol" style="color: ${color}">${symbol}</p>
    </article>
    <p class="price">$ ${price}</p>
    <div class="img svg-icon" style="background-image: url('${iconUrl}')"></div>
    <article class='change'><i class="fa-solid fa-chart-line"></i>
        <p class="change">${change}</p>
    </article>
</li>
`
}


form.addEventListener("submit", (e)=>{
    coinList.innerHTML=""
    e.preventDefault()
    const value = searchInput.value
    const filteredValue = allCoinsArr.filter((c)=>c.name.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredValue);
    getCoins(filteredValue)
})