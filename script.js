"use strict"

class User{
    constructor(firstName, LastName, DoB, departing, arriving, leaveDate, returnDate, bags, id){
        this.firstName = firstName;
        this.LastName = LastName;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.id = id;
    }
}

function print(){
let printspace = document.getElementById("printspace")
console.log(userlist);
    printspace.innterHTML = "";
        for(let i = 0; i < userlist.length; i++){
            printspace.innerHTML  += `<button id= "yes">${userlist[i].id} ${userlist[i].firstName} _ ${userlist[i].LastName} _ ${userlist[i].DoB} _ ${userlist[i].departing} _ ${userlist[i].arriving} _ ${userlist[i].leaveDate} _ ${userlist[i].returnDate} _ ${userlist[i].bags} _ ${userlist[i].id}}</button>`
            
        }
}

function search(){
    let search = document.getElementById("search")
    console.log(userlist);
        printspace.innterHTML = "";
            for(let i = 0; i < userlist.length; i++){
                printspace.innerHTML  += `<button id= "yes">${userlist[i].id} ${userlist[i].firstName} _ ${userlist[i].LastName}}</button>`
                
            }
    }



let userlist = [];
let userID = 1;

function addToList(){
    let names = document.getElementById('names').value;
    let firstName = document.getElementById('firstName').value;
    let LastName = document.getElementById('LastName').value;
    let DoB = document.getElementById('DoB').value;
    let departing = document.getElementById('departing').value;
    let arriving  = document.getElementById('arriving').value;
    let leaveDate = document.getElementById('leaveDate').value;
    let returnDate = document.getElementById('returnDate').value;
    let bags = document.getElementById('bags').value;

    if(firstName != "" && LastName != "" && DoB != "" && departing != "" && arriving != "" && leaveDate != "" && returnDate != "" && bags != "");
    let user = new User (firstName, LastName, DoB, departing, arriving, leaveDate, returnDate, bags, userID);
    userlist.push (user)
    userID++; 
}