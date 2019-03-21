const db=firebase.firestore();
const table=document.querySelector('#score');
db.collection('59160001').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        showData(doc);
    });
});

function showData(doc){
    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=doc.data().name;
    cell2.innerHTML=doc.data().g;
    cell3.innerHTML=doc.data().roomMid;
    cell4.innerHTML=doc.data().roomFinal;
    
}