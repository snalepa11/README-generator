
/*
{
    1: hello bob
    2. name of author 
}
*/

function generateMarkdown(data){
    console.log(data)
    `#Title 
    ${data.Title}
    ##Table of Contents

    ##Description 
    ${data.Description}
    ##Installation Instructions
    ${data.Installation}
    ##Usage
    ${data.Usage}
    ##Contributions
    ${data.Contributions}
    ##Test Instructions
    ${data.Test}
    ##License 

    ##Questions
    - GitHub Name: ${data.Name}
    - GitHub Link: ${data.Link}
    - Email:${data.Email}`
}
