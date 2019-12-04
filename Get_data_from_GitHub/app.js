const fetch = require('node-fetch');

// Replace the accessToken_has_been_deleted with your personal access token.
const accessToken = 'accessToken_has_been_deleted';

// This GraphQL query is to get the D3 repo information.
var query = `
query {
  D3_whole_project:repositoryOwner(login:"d3"){
    D3_repo: repositories(first:10) {
      D3_sub_repo_info:edges{
        each_repo:node{
          name
          issues(last:2) {
            issues_info:edges{
              each_issue:node{
                author{
                  login
                }
                state
                locked
                number
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
        var outputFilename = './D3_data_0.json';
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
  

/* Second */
query = `
query {
  D3_whole_project:repositoryOwner(login:"d3"){
    D3_repo: repositories(first: 11, orderBy: {field: STARGAZERS, direction: DESC}) {
      D3_sub_repo_info:edges{
        each_repo:node{
         name
         forkCount
         diskUsage
         stargazers{
          totalCount
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
        var outputFilename = './D3_data_1.json';
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

    
/* Third */
query = `
query {
  D3_whole_project:repositoryOwner(login:"d3"){
    D3_repo: repositories(first: 6, orderBy: {field: STARGAZERS, direction: DESC}) {
      D3_sub_repo_info:edges{
        each_repo:node{
          name
          forks(last:3){
            fork_e:edges{
              fork_n:node{
                name:owner{
                  login
                }
              }
            }
          }
          issues(last:3){
            issue_e:edges{
              issue_n:node{
                name:author{
                  login
                }
              }
            }
          }
          stargazers(last:3){
            start_e:edges{
              star_n:node{
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
        var outputFilename = './D3_data_2.json';
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

/* Forth */
var query = `
query {
  D3_whole_project:repositoryOwner(login:"d3"){
    D3_repo: repositories(first:1) {
      D3_sub_repo_info:edges{
        each_repo:node{
          name
          object(expression: "master") {
      			... on Commit {
        			total: history {
          			totalCount
        			}
        		first100: history(first: 100) {
          		edges {
            		node {
              		committedDate
            		}
          		}
       		 	}
            second100: history(after: "1126611a8972244ba2e876f57a71c82c3098331b 99") {
          		edges {
            		node {
              		committedDate
            		}
          		}
       		 	}
            third100: history(after: "1126611a8972244ba2e876f57a71c82c3098331b 199") {
          		edges {
            		node {
              		committedDate
            		}
          		}
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
        var outputFilename = './D3_data_3.json';
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