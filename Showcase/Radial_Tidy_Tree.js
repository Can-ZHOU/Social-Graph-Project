//JSON object with the data
var treeData = json_data;
 
// Create a svg canvas
// .style("border", "solid 1px #ccc")
var vis = d3.select("#viz").append("svg:svg")
.attr("width", 1000)
.attr("height", 1000)
.style("font", "10px sans-serif")
.append("svg:g")
.attr("transform", "translate(450, 450)");

// Create a cluster "canvas"
var cluster = d3.layout.cluster()
.size([360,300]);

var diagonal = d3.svg.diagonal.radial()
.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var nodes = cluster.nodes(treeData);
var links = cluster.links(nodes);

var link = vis.selectAll("pathlink")
.data(links)
.enter().append("svg:path")
.attr("d", diagonal)
.attr("fill", "none")
.attr("stroke", "#555")
.attr("stroke-opacity", 0.4)
.attr("stroke-width", 1.5);

var node = vis.selectAll("g.node")
.data(nodes)
.enter().append("svg:g")
.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

// Add the dot at every node
node.append("svg:circle")
.attr("r", 3.5)
.attr("fill", d => d.children ? "#555" : "#999");

node.append("svg:text")
.attr("dx", function(d) { return d.x < 180 ? 6 : -6; })
.attr("dy", ".40em")
.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
.attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
.text(function(d) { return d.name; });