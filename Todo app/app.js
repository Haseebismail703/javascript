
// getAttribute

// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.getAttribute('id')
//     console.log(b)
// }

//    hasAtribute 

// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.hasAttribute('id')
//     console.log(b)
// }


// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// }
// var getul = document.getElementById('ul')

// function clicke(){
  

//     var a = document.getElementById('inp')
//     var li = document.createElement("li")
//     var textli = document.createTextNode(a.value)

//     li.appendChild(textli)
//     getul.appendChild(li)
//     a.value = ''

   
// }

// function Deletall() {
//    getul.innerHTML=' '
// }

var getul = document.getElementById('ul')

function clicke(){


    var a = document.getElementById('inp')
    var li = document.createElement('li')
    li.setAttribute('class','div2')

    var textli = document.createTextNode(a.value)
    

    li.appendChild(textli)
    getul.appendChild(li)
    a.value = ''
  
    //  del btn 

    var Deletbtn = document.createElement('button')
    var textlidel = document.createTextNode('Delete')
    Deletbtn.appendChild(textlidel)
    li.appendChild(Deletbtn)
    Deletbtn.setAttribute('onclick','del(this)')

    // css class 
     Deletbtn.setAttribute('class', 'btn btn-outline-danger btn1 ')
    // edittext 

    var edits = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    edits.appendChild(edittext)
    li.appendChild(edits)
    edits.setAttribute('onclick','edit(this)')
    edits.setAttribute('class','btn btn-outline-primary btn2')
}

function Deletall(){
    getul.innerHTML= ''
}

function del(e){
    e.parentNode.remove()
}

function edit(e){
    var a = prompt('Enter value')
    e.parentNode.firstChild.nodeValue = a
}
// function edit(e){
//     var a = prompt('Enter value')
//     e.parentNode.firstChild.nodeValue = a
// }