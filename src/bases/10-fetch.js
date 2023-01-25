
//https://api.giphy.com/v1/gifs/random?api_key=XRaTJHx8ihxkyrbo1A7OdQjy2cDkp5l8
const apiKey = 'XRaTJHx8ihxkyrbo1A7OdQjy2cDkp5l8'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp=>resp.json())
    .then(({data})=>{
        const {url} = data.images.original

        const img = document.createElement('img');
        img.src = url
        
        document.body.append(img)
    })
    