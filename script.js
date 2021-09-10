async function getusers(){
    let url="http://3.6.93.159:7883/machstatz/get_all_users";
    try{
        let res=await fetch(url);
        return await res.json();
    } catch(error){
        console.log(error);
    }
}
async function renderusers(){
    let users=await getusers();
    let html="";
    users.forEach(user => {
        let htmlsegment= `<div class="user">
            <h2>${user.first_name} ${user.last_name}</h2>
            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
            </div>`;
            html +=htmlsegment;
    });

    let container=document.querySelector(".container");
    container.innerHTML=html;
}
renderusers();
let addeduser = {};
const adduser = (ev)=>{
    ev.preventDefault();
    let user = {
        email: document.getElementById(email).value,
        first_name: document.getElementById(first_name).value,
        last_name: document.getElementById(last_name).value,
        pwd: document.getElementById(pwd).value,
        username: document.getElementById(username).value
    }
    adduser.push(user);
    consloe.warn('added', {addeduser});
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('Add', adduser);
});
fetch("http://3.6.93.159:7883/machstatz/add_new_user",{
    method:"POST",
    body:JSON.stringify(addeduser),
    headers:{"content-type":"application/json;charset=UFT-8"}
})
.then(Response=>Response.json())
.then(json=>console.log(json))
.catch(err=>console.log(err))

