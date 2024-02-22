


function markdown(data){
    console.log(data)
    return `# ${data.Title}
    ## Table of Contents
    - [Description](#Description)
    - [Installation Instructions](#Installation)
    - [Usage](#Usage)
    - [Contributions](#Contributions)
    - [Test Instructions](#Test)
    - [License](#License)
    - [Questions](#Name)
    ## Description 
    ${data.Description}
    ## Installation Instructions
    ${data.Installation}
    ## Usage
    ${data.Usage}
    ## Contributions
    Contributors: ${data.Contributions}
    ## Test Instructions
    ${data.Test}
    ## License 
    ${data.License}
    ## Questions
    - GitHub Name: ${data.Name}
    - GitHub Link: ${data.Link}
    - Desployed Link: ${data.Deployed}
    - Email:${data.Email}`
};

module.exports = markdown;
