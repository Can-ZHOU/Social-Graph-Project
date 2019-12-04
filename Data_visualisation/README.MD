## CS3012 Software Engineering Assignment 5: **Social Graph Project**  

Written by  
Can ZHOU (19324118)  
If there has any confusion, Please email me: zhouc@tcd.ie

### Data visualisation
- I have visualized three types of data:
    1. Commits in D3 main repo with years and month.
    2. Forks with comparing five D3 sub-repo.
    3. Stars with comparing five D3 sub-repo.
    4. Disk usage with comparing five D3 sub-repo.
    5. Some issue data in D3.
- Using D3.js and C3.js [A JavaScript library dependent on D3]

### Radial Tidy Tree
- The top ten repos of D3 are shown.
- Then display the latest issue information of each repo.
- For each issue, it describes: 
    - The issue number.
    - Whether issue is locked?
    - Issue current state.
    - Who submitted it.

### Zoomable_Sunburst
- Click on arc in order to zoom in. 
- Click on the center circle to zoom out.
- Avoid clicking text when clicking.
  
- The D3 sub-repos which star number is in the top five.
  Showing the latest 3 people who fork, submit issue, star on those repos (2019-11-29).
    - The innermost layer is D3.
    - The second layer is the names of these five repos.
    - The third layer is the classification of Fork, Issue, and Stargazers.
    - The fourth level is the name of the person who performed these actions.

### Pie and Donut Charts -- **D3**
- Those charts show the information of D3 sub-repos which are in the top five star number.
- This is a flowing chart.
- In this order:
    - Fork Count pie chart.
    - Disk Usage pie chart.
    - Start Count pie chart.
    - Fork Count donut chart.
    - Disk Usage donut chart.
    - Start Count donut chart.
- Mouse over the sector / arc to focus.
- Mouse over the label below the picture to focus.
- Click on the label below the figure to hide specific data.

### Pie and Donut Charts -- **Start Count**
- Mouse over the sector / arc to focus.
- Mouse over the label below the picture to focus.
- Click on the label below the figure to hide specific data.
- Those charts show the total stars number of D3 sub-repos which are in the top five star number.

### Pie and Donut Charts -- **Fork Count**
- Mouse over the sector / arc to focus.
- Mouse over the label below the picture to focus.
- Click on the label below the figure to hide specific data.
- Those charts show the total Fork number of D3 sub-repos which are in the top five star number.

### Pie and Donut Charts -- **Disk Usage**
- Mouse over the sector / arc to focus.
- Mouse over the label below the picture to focus.
- Click on the label below the figure to hide specific data.
- Those charts show the disk usage of D3 sub-repos which are in the top five star number.

### Run the code
- Run the code in Data_visualisation
    - Download and click the HTML file in each folder.