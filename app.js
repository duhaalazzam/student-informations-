'use strict'
let table=document.getElementById('table');
let form=document.getElementById('form');
let li=document.getElementById('li');
let students=[];
let id=0;
function Student(id,studentEmail,studentNum,tuition){
this.id=id;
this.studentEmail=studentEmail;
this.studentNum=studentNum;
this.tuition=tuition;
students.push(this);
}
Student.prototype.render=function(){
let tr=document.createElement('tr');
table.appendChild(tr);
let td=document.createElement('td');
tr.appendChild(td);
td.textContent=id;
td=document.createElement('td');
tr.appendChild(td);
let name=this.studentEmail.split('@');
td.textContent=name[0];
td=document.createElement('td');
tr.appendChild(td);
td.textContent=this.studentEmail;
td=document.createElement('td');
tr.appendChild(td);
td.textContent=this.studentNum;
td=document.createElement('td');
tr.appendChild(td);
let age=Math.floor(Math.random()*(24-18+1)+18);
td.textContent=age;
td=document.createElement('td');
tr.appendChild(td);
td.textContent=this.tuition;
totalCal();
};
form.addEventListener('submit',addStuent);
function addStuent(event){
    event.preventDefault();
    id++;
    let email=event.target.email.value;
    let mobileNum=event.target.mobileNum.value;
    let tuition=event.target.tuition.value;
    let newStudent=new Student(id,email,mobileNum,tuition);
    newStudent.render();
    saveStu();

}
function headerRow()
{
let tr=document.createElement('tr');
table.appendChild(tr);
let th=document.createElement('th');
tr.appendChild(th);
th.textContent='id';
th=document.createElement('th');
tr.appendChild(th);
th.textContent='Name';
th=document.createElement('th');
tr.appendChild(th);
th.textContent='Email';
th=document.createElement('th');
tr.appendChild(th);
th.textContent='Mobile';
th=document.createElement('th');
tr.appendChild(th);
th.textContent='Age';
th=document.createElement('th');
tr.appendChild(th);
th.textContent='Tuition';
}
function totalCal()
{
let total=0;
let intTui=0;
for(let i=0;i<students.length;i++)
{
    intTui=parseInt(students[i].tuition);
    total=total+intTui;
}
li.textContent=`Total:${total}`
}
function saveStu()
{
    window.localStorage.setItem('Allstudent',JSON.stringify(students));
}
function getStu(){
   let getstud=JSON.parse(window.localStorage.getItem('Allstudent'));

   if(getstud)
   {
       students=getstud;
       console.log(students);
   }
}
getStu();
headerRow();
if(students){
for(let i=0;i<students.length;i++)
{
    students[i].render();
    console.log(students[i]);
}
}
totalCal();