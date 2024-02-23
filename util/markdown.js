


function markdown(data){
    console.log(data)
    return `# ${data.Title}
    \n## Table of Contents
    \n- [Description](#description)
   \n - [Installation Instructions](#installation-instructions)
   \n - [Usage](#usage)
   \n - [Contributions](#contributions)
   \n - [Test Instructions](#test-instructions)
   \n - [License](#license)
   \n - [Questions](#questions)

   \n## Description 
    ${data.Description}

   \n## Installation Instructions
    ${data.Installation}

   \n## Usage
    ${data.Usage}

   \n## Contributions
    Contributors: ${data.Contributions}

   \n## Test Instructions
    ${data.Test}

   \n## License 
    ${data.License}

   \n## Questions
    * GitHub Name: ${data.Name}
    * GitHub Link: ${data.Link}
    * Desployed Link: ${data.Deployed}
    * Email:${data.Email}`
};

module.exports = markdown;
