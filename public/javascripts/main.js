window.onload=()=>{
    app.init()
}
let app={
    init:function(){
        this.addEvents();
        this.loadCOntent();
    },
    addEvents:function(){
        document.postForm.addEventListener("submit",(event)=>{
            this.submitPost(event,this.addRow);
        });
    },
    addRow:function(data){
        let tbody=document.getElementsByClassName("posts")[0];
        let tr=document.createElement("tr")
        tr.innerHTML='<td> ${data._id} </td>'
    }
}

deletePost:(event,data,tr,tbody)=>{
    event.prevetDefault();
    fetch('\api\post/'+ data._id,{
        method:'DELETE'
    }).then(res=>res.json())
    .then(res=>{
        if(res.ok){
            tbody.removeChild(tr);
        }else{
            document.getElementsByClassName("errors")[0].innerText="No se pudo eliminar";
        }
    })
}

