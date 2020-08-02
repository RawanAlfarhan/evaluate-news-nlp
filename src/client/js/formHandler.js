
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    let data={
        'text': document.getElementById('name').value
    }
    console.log("::: Form Submitted :::")
    fetch('/test', {
        
            method: 'POST',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        
    } )
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},
        subjectivity: ${res.subjectivity},
        text:  ${res.text},
        polarity_confidence:  ${res.polarity_confidence},
        subjectivity_confidence: ${res.subjectivity_confidence}
        `
    })
   

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




export { handleSubmit }
