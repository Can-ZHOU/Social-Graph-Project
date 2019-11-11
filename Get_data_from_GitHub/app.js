const fetch = require('node-fetch');

// Replace the accessToken_has_been_deleted with your personal access token.
const accessToken = 'accessToken_has_been_deleted';

// This GraphQL query is to get the D3 repo information.
const query = `
query {
    D3_whole_project:repositoryOwner(login:"d3"){
      D3_repo: repositories(first:52) {
        D3_sub_repo_info:edges{
          each_repo:node{
            name
            homepageUrl
            star:stargazers(first:2){
              totalCount
              first_two_stargazers:edges{
                profile:node{
                  name
                  login
                }
              }
            }
          }
        }
      }
    }
  }`;

  
// Using fetch to access GitHub GraphQL API.
fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    },
}).then(res => res.text())
    .then(body => {

        // Output a JSON file named D3_repo.json to store the D3 repo information.
        var fs = require('fs');
        var outputFilename = './D3_repo.json';
        fs.writeFile(outputFilename, body, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        });
    }
    )
    .catch(error => console.error(error));
  