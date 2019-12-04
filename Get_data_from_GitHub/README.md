## CS3012 Software Engineering Assignment 5: **Social Graph Project**  

Written by  
Can ZHOU (19324118)  
If there has any confusion, Please email me: zhouc@tcd.ie

### Get data from GitHub (GitHub Access)  
- I use Github GraphQL API with Node.js.
- Using node-fetch to make HTTP requests with Node.js.
- I have gained four JSON files for different aspects of D3 project information.

### Run the code
- Run the code in Get_data_from_GitHub
    - Please make sure you have installed the Node.js.  
      If not, please download and install the Node.js: [Download Node.js](https://nodejs.org/en/)
    - Get your personal access token from GitHub: [Instruction](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)   
    - Replace the `accessToken_has_been_deleted` in
      **app.js--line #4** (`const accessToken = 'accessToken_has_been_deleted';`)   
      with your personal GitHub access token.
    - Open the terminal where the downloaded file is located.
    - In terminal, type: `node app.js`
    - The data will be stored in three JSON files.