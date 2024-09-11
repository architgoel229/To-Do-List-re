let todolist=[];
let theme;

if(localStorage.getItem("theme")==null){
    theme=1;
}else{
    theme=localStorage.getItem("theme");
}

function changingtheme(){
    if (theme==1){
        document.querySelector("body>input").checked=false;
    }else{
        document.querySelector("body>input").checked=true;
    }
}

function localset(){
    let pseudotodo=JSON.stringify(todolist);
    localStorage.setItem("todolist",`${pseudotodo}`);
}

function localget(){
    let todo=localStorage.getItem("todolist")
    if(todo!=null){
    let todu=JSON.parse(todo);
    console.log((todu));
    for(i=0;i<todu.length;i++){
        todolist[i]=todu[i];
    }
    }else{
        todolist=[];
    }
    
}

function add(){
    let task=document.querySelector(".task-input");
    let taskdate=document.querySelector(".date-input");
    let taskvalue= task.value;
    let taskdatevalue=taskdate.value;
    if (taskvalue!=""&&taskdatevalue!=""){
    let list={"task" : taskvalue,
        "date": taskdatevalue
    };
    todolist.push(list);
    localset();
    task.value="";
    taskdate.value="";
}
}



function display(){
    let displayelement=document.querySelector('.tasklist');
    let html="";
    for(i=0;i<todolist.length;i++){
        let task=todolist[i]["task"];
        let date=todolist[i]["date"];
        html+=`<div class="task"><p>${task}</p><p>${date}</p><p><button onclick="todolist.splice(${i},1);display();localset();"><i class="ri-delete-bin-line"></i></button></p></div>`;
    }
    if(html==""){
        displayelement.innerHTML= `<p style="color:grey; margin:10px;">No tasks available at the moment</p>`
    }else{
        displayelement.innerHTML=`${html}`;
    }
}

function changetheme(){
    if(theme==1){
        theme=0;
    }else{
        theme=1;
    }
    localStorage.setItem("theme",theme);
}
localget();
display();
changingtheme();
