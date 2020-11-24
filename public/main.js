//添加一个css
// button01.onclick = ()=>{
//     const request = new XMLHttpRequest();
//     request.open("get","/style.css")
//     request.onreadystatechange = ()=>{
//         if (request.readyState === 4){
//             if (request.status === 200){
//                 const style = document.createElement("style");
//                 style.innerHTML = request.response
//                 document.head.appendChild(style);
//             }else if (request.status === 404){
//                 console.log("失败了")
//             }
//         }
//     }
//     request.send()
// }
//添加一个js
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
//添加一个html
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
//添加一个xml
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
//添加一个JSON
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
//添加一个单页
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


// 这里发现，不断的写AJAX实在太麻烦了，于是我考虑，我们用Promise封装一下
ajax = (method="get",url,options)=>{
    return new Promise(((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method,url)
        request.onreadystatechange = ()=>{
            if (request.readyState === 4){
                if (request.status === 200){
                    resolve.call(null,request.response)
                }else {
                    reject.call(null,request)
                }
            }
        }
        request.send(options)
    }))
}
// 于是对昨天写的代码做一个重写
button01.onclick = ajax("get","/style.css").then((e)=>{
    const style = document.createElement("style")
    style.innerHTML = e;
    document.head.appendChild(style);
},(e)=>{
    console.log(e);
})