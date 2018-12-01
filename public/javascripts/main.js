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

