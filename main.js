let continer = document.createElement("div")
continer.id = "container"

document.body.appendChild(continer)
continer.style.border = "  2px solid red"
continer.style.padding = "  20px "
continer.style.display = "  flex "
continer.style.flexDirection = "  column "
continer.style.gap = "5px"

let list = [
    {name: "aswin", id:123 , email: "abc@MediaList.com " },
    {name: "raj", id:234 , email:"efg@MediaList.com " },
    {name: "ravi", id:345 , email:"hij@MediaList.com " },
    {name: "ragul", id:456, email:"klm@MediaList.com " },
    {name: "sujay", id:567 , email: "nop@MediaList.com " },
    {name: "sakthi", id:678 , email:"qrs@MediaList.com " },
    {name: "sam", id:789 , email:"tuv@MediaList.com " },
    {name: "thamil", id:890, email:"wxy@MediaList.com " },
]
list.map(mylist => {
    // new div 
    let inerbox = document.createElement("div")
    inerbox.id = "inerbox"
    continer.appendChild(inerbox)
    inerbox.style.padding = "10px"
    inerbox.style.border = "2px solid blue"
    // h1 name
    let h1 = document.createElement("h1")
    h1.innerHTML = " name :" + mylist.name
    inerbox.appendChild(h1)
    // h1 id
    let h2 = document.createElement("h1")
    h2.innerHTML = " id  :" + mylist.id
    inerbox.appendChild(h2)

    // h1 email
    let h3 = document.createElement("h3")
    h3.innerHTML = "email :" + mylist.email
   

    // delete button
    let btn = document.createElement("button")
    btn.id = "btn"
    btn.innerHTML = "delete"
    inerbox.appendChild(h3)
    inerbox.appendChild(btn)
    btn.addEventListener("click",remove)
    function remove(){
    continer.removeChild(inerbox)
    }
    
});



