// const img = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/20-amazo.jpg'

const heroBtn = document.getElementById('heroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const randomHeroSelector = () => {
  const num = Math.floor(Math.random() * 731) + 1
  return num 
}

const getSuperHero = (id) => {
  
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      getSuperHeroInfo(json)
      
    })

}


const getSuperHeroInfo = (character) => {
  const stat = Object.keys(character.powerstats).map(stat => {
     return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]} </p>`}).join('')

    heroImageDiv.innerHTML = ` <h2> ${character.name} </h2><img src='${character.images.sm}'/> <br> ${stat}`
  
  
console.log(stat)
  
}


heroBtn.onclick = () => {
  getSuperHero(randomHeroSelector())
  console.log("clicked")
}



console.log(randomHeroSelector())


searchButton.onclick = () => {
  console.log(searchInput.value)
  getSuperHero(searchInput.value)
  console.log("clicked")
}


