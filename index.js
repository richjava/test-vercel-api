const axios = require('axios')

upload();

async function upload(){
    try {
        let projectData = {
            name: 'builtjs-site-tw-LGcXkZEsVP',
            gitRepository: {
              type: 'github',
              repo: `richjava/builtjs-site-tw-LGcXkZEsVP`,
            },
          };
          // this produces UnhandledPromiseRejectionWarning: Error: Request failed with status code 400
          await axios.post(
            `https://api.vercel.com/v8/projects/`,
            projectData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + '<vercel_access_token_goes_here>',
              },
            }
          )
    } catch (error) {
        console.log(error)
    }
    ;
}
