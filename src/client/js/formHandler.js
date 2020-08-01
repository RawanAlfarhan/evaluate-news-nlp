function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},
        subjectivity: ${res.subjectivity},
        text:  ${res.text},
        polarity_confidence:  ${res.polarity_confidence},
        subjectivity_confidence: ${res.subjectivity_confidence}
        `
    })
    let data={
        'text': document.getElementById('name').value
    }

    postReq('/test', data)
}


/*function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let data={
        'text': document.getElementById('name').value
    }
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},
        subjectivity: ${res.subjectivity},
        text:  ${res.text},
        polarity_confidence:  ${res.polarity_confidence},
        subjectivity_confidence: ${res.subjectivity_confidence}
        `
        
    })

    postReq('/test', data)

}*/

const postReq = function(url='',data={}){
    const response = fetch(url, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    }


export { handleSubmit,postReq }
