var gobutton = document.getElementById("Gbutton");
gobutton.onclick = function() {myFunction(true)};

var nextbutton = document.getElementById("NextButton");
nextbutton.onclick = function (){myFunction(false)};
nextbutton.style.visibility = "hidden";

var topButton = document.getElementById("topButton");
topButton.style.visibility = "hidden";

var offset = 1;

  // Adds title
function addTitleNode(output, para){
  const titlebody = document.createElement("b");
  const node = document.createTextNode(output.Title);
  titlebody.appendChild(node);
  para.appendChild(titlebody);
  if (output.Title= null) return;
}

// Adds body
function addBodyNode(output, para){
  const searchbody = document.createElement("c");
  //const n = document.createTextNode(output.Body);  
  //searchbody.appendChild(n);
  searchbody.innerHTML=output.Body;
  para.appendChild(searchbody);
}
// Adds Answercount
function anscount(output, para){
  const anscount = document.createElement("d");
  const  ac= document.createTextNode("Answer Count: "+output.AnswerCount);  
  anscount.appendChild(ac);
  para.appendChild(anscount);
}
// Adds Username
function addname(output, para){
  if (output.DisplayName==null) return;
  const uname = document.createElement("e");
  const un = document.createTextNode("User Name: "+output.DisplayName);  
  uname.appendChild(un);
  para.appendChild(uname);
  
}
// Adds Reputation
function addreputation(output, para){
  if (output.Reputation == undefined) return;
  const rep = document.createElement("f");
  const r = document.createTextNode("Reputation: "+output.Reputation);  
  rep.appendChild(r);
  para.appendChild(rep);
  addBreakNode(para);
}

// Adds Score
function addscore(output, para){
  const score = document.createElement("g");
  const s = document.createTextNode("Score: "+output.score);  
  score.appendChild(s);
  para.appendChild(score);

}

function addBadge(parent, text){
  var bad = document.createElement("kk");
  var badTextNode = document.createTextNode(text);
  bad.appendChild(badTextNode);
  parent.appendChild(bad);
}

// Adds Badges
function addBadges(output, para){
  if (output.badges == null) return;
  var badges = document.createElement("k");
  //const bad = document.createTextNode(output.badges);
  const badArr = output.badges.split(",");
  badArr.forEach(element => {
    addBadge(badges, element);
  });
  para.appendChild(badges);
}

// Adds
function addBreakNode(post){
  const brk = document.createElement("br");
  post.appendChild(brk);
}


function CreatePosts(output){
  
  const element = document.getElementById("PostsParent");
  
  const para = document.createElement("p");
  const brk = document.createElement("br");

  addTitleNode(output, para);
  addBreakNode(para);
  
  addBodyNode(output, para);
  addBreakNode(para);

  anscount(output, para);
  addBreakNode(para);

  addname(output, para);
  addBreakNode(para);
  
  addreputation(output, para);
  
  addscore(output, para); 
  addBreakNode(para);
  addBadges(output, para);
  
  element.appendChild(para);
}

// function simpleGet(){
//   fetch("http://localhost:8090/api/posts")
//   .then(result => result.json())
//   .then((output) => {
//       console.log('Output: ', output);
//       output.forEach(CreatePosts);
// }).catch(err => console.error(err));
// }

function myFunction(clearChildren) {
  if(clearChildren){
    offset = 1;
    const element = document.getElementById("PostsParent");
    element.innerHTML='';
  }
  var searchbox = document.getElementById("search");
  text = searchbox.value;
  //gobutton.value = text;
  
  var payload = {
    text : text
  };

  fetch("http://localhost:8090/api/posts", {
    method: "POST",
    body:JSON.stringify(payload),
    headers: {'Content-type' : 'application/json; charset=UTF-8',}
  })
    .then(result => result.json())
    .then((output) => {
        //console.log('Output: ', output);
        //output.forEach(CreatePosts);
        for(let i = (offset-1)*10 ; i<offset*10; ++i)
        {
          CreatePosts(output[i]);
        }
        nextbutton.style.visibility = "visible";
        topButton.style.visibility = "visible";
        console.log(offset)
        offset++;
  }).catch(err => console.error(err));
}
