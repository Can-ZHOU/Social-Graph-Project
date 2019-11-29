## CS3012 Software Engineering Assignment 5: **Social Graph Project**  

Written by  
Can ZHOU (19324118)  
If there has any confusion, Please email me: zhouc@tcd.ie

### Click Here For **[Live Demo](https://can-zhou.github.io/CS3012/index.html)**

### Get data from GitHub (GitHub Access)  
- I use Github GraphQL API with Node.js.
- Using node-fetch to make HTTP requests with Node.js.

### Analyse data  
- This part is to analyze raw JOSN file and change the format of JSON file which is more suitable for data visualization.
- About output file:
  - The output file is the JSON file.
  - I **intentionally** changed the output file from a JSON file to a JavaScript file.
  - Because the JavaScript cannot directly read the JSON file at the front end, it needs to interact with the backend.
  - I want to avoid interaction with the backend (avoiding operations like using AJAX)
  - So I output the JavaScript file directly. When we need to call JSON data, we can directly reference the output JavaScript file to gain the JSON data.
- I have analysed three types of data:
    1. Used for pie and donut charts.
    2. Used for radial tidy tree.
    3. Used for zoomable sunburst.

### Data visualisation
- I have visualized three types of data:
    1. pie and Donut charts.
    2. Radial tidy tree.
    3. Zoomable sunburst.
- Using D3.js and C3.js [A JavaScript library dependent on D3]

### Showcase
- A websit for live demo.
- Click here for **[Live Demo](https://can-zhou.github.io/CS3012/index.html)**

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

- Run the code in Analyse_data 
    - Please make sure you have installed the Node.js.  
      If not, please download and install the Node.js: [Download Node.js](https://nodejs.org/en/)
    - Go to each floder.
    - Open the terminal where the downloaded file is located.
    - In terminal, type: `node app.js`
    - The data will be analysed and stored in three JSON files.

- Run the code in Data_visualisation
    - Download and click the HTML file.