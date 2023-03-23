function bigger() 
{
	//alert('Hello, world!');
	document.getElementById("inputText-1").style.fontSize = "24pt";
	
}

function fancyShamncy()
{
	//alert('blue');
	document.getElementById("inputText-1").style.color = "blue";
	document.getElementById("inputText-1").style.fontWeight = "bold";
	document.getElementById("inputText-1").style.textDecoration = "underline";
}

function boringBetty()
{
	document.getElementById("inputText-1").style.color = "";
	document.getElementById("inputText-1").style.fontWeight = "";
	document.getElementById("inputText-1").style.textDecoration = "";
}

function moo() 
{
  var inputText = document.getElementById("inputText-1");
  inputText.value = inputText.value.toUpperCase(); //make text uppercase
  
  var text = inputText.value;

  var sentenceEnd = /[.]/; //sentence ends with "."

  var sentences = text.split(sentenceEnd); //split text into an array of sentences

  for (var i = 0; i < sentences.length; i++) //loop through each sentence and add "-Moo" to last word
  {
    var sentence = sentences[i].trim();
    if (sentence !== "") 
	{
      var words = sentence.split(" "); //also adds -Moo to final word in text, regardless of it having a period at the end or not
      words[words.length - 1] += "-Moo"; 
      sentences[i] = words.join(" ");
    }
  }
  
  inputText.value = sentences.join(". "); //add "." back that were trimmed
}


