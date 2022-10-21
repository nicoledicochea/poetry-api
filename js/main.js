//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getHoroscope)

function getHoroscope(){
  const url = `https://poetrydb.org/random`

  console.log(url)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#title').innerText = `${data[0].title}`
        document.querySelector('#author').innerText = `${data[0].author}`
        document.querySelector('#linecount').innerText = `${data[0].linecount}`

        let poemLines = data[0].lines
        poemLines.forEach(line => {
          document.querySelector('section').appendChild(document.createElement('p')).innerText = line
          if (line === '') {
            document.querySelector('section').appendChild(document.createElement('p')).innerText = '\n'
          }
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      while(document.querySelector('section').firstChild) {
        document.querySelector('section').removeChild(document.querySelector('section').firstChild)
      }
}

