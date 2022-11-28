
var textarea = 

document.querySelector('.activities_container textarea')

var browser_btn = 

document.querySelector('.activities_container button')

var innerDetails = 

document.querySelector('.details')

function search()

{

  var input = 

document.querySelector('.input_container input')

  

async function showContent() {

  try {

    const results = await fetch(`https://www.boredapi.com/api/activity?type=${input.value}`)

    const data = await results.json()

    innerDetails.innerHTML =

      `

      <p>Accessibility : <span>${data.accessibility}

       </span></p>

      <p>Link : <a href=${data.link}>${data.link}</a></p>

        <p>Participant(s): <span>${data.participants}</span></p>

        <p>Price : <span>${data.price}</span></p>

        <p>Type : <mark>${data.type}</mark></p>

      `

      textarea.value = 

      `

     ${data.activity}

      `

     console.log(data)

  } catch (e) {

    alert('an error occurred try again later')

  }

}

showContent()

browser_btn.onclick = showContent

