console.log("你好，我是main.js")

button01.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/style.css")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status === 200){
                console.log("style.css加载成功了");
                console.log(request.response)
                const style = document.createElement("style");
                style.innerHTML = request.response
                document.head.appendChild(style);
            }else if (request.status === 404){
                console.log("失败了")
            }
        }
    }
    request.send()
}
button02.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","./2.js")
    request.onreadystatechange = ()=>{
        if (request.readyState===4 && request.status === 200){
           const script = document.createElement("script");
           script.innerHTML = request.response;
           document.body.appendChild(script)
        }
    }
    request.send()
}
button03.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/3.html")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status === 200){
                const div = document.createElement("div");
                div.innerHTML = request.response
                buttonTags.append(div)
            }else {
                console.log("失败了");
            }
        }
    }
    request.send()
}
button04.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/4.xml")
    request.onreadystatechange=()=>{
        if (request.readyState === 4){
            if (request.status === 200){
                const xml = request.responseXML;
                console.log(xml);
            }else{
                console.log("失败了");
            }
        }
    }
    request.send()
}
button05.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","./5.json")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status === 200){
                const json = request.response;
                console.log(JSON.parse(json));
            }
        }
    }
    request.send()
}

let n = 1;
button06.onclick = ()=>{
    const request = new XMLHttpRequest();
    try{
    request.open("get",`page${++n}`)
    }catch (e){
        console.log(e)
    }
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status === 200){
                JSON.parse(request.response).map((item)=>{
                    const li = document.createElement("li");
                    li.innerHTML = item.id;
                    xxx.appendChild(li)
                })
            }
        }
    }
    request.send()
}