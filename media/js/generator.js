$(document).ready(function() 
{
	$(".button").click(generate);
});

function generate()
{
	var nouns = [];
	for (var i in noun)
	{
		var element = $("#" + i);
		if (element.length == 0 || element.attr("checked"))
		{
			nouns = nouns.concat(noun[i]);
		}
	}
	
	var index = Math.floor(Math.random() * nouns.length);
	var selectedNoun = nouns[index];
	var article = Math.floor(Math.random() * 2) == 1;
	
	var generatedName = "";
	if (article) generatedName += selectedNoun[0] + " ";
	generatedName += selectedNoun[1];
	
	var adjs = [];
	for (var i in adj)
	{
		var element = $("#" + i);
		if (element.length == 0 || element.attr("checked"))
		{
			adjs = adjs.concat(adj[i]);
		}
	}
	
	index = Math.floor(Math.random() * adjs.length);
	var selectedAdj = adjs[index];
	
	generatedName += " " + selectedAdj[0] + " ";
	generatedName += selectedAdj[1];
	
	$("h1").text(generatedName);
};