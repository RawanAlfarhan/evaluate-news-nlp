
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
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
    .then(function(res) {3
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},` +"<br />"+`
        subjectivity: ${res.subjectivity},` +"<br />"+`
        text:  ${res.text},` +"<br />"+`
        polarity_confidence:  ${res.polarity_confidence},` +"<br />"+`
        subjectivity_confidence: ${res.subjectivity_confidence}
        `
    })
   

}

export { handleSubmit }