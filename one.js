/*var myList=[
    {"timestamp": "2022-01-14T00:12:21.000",
     "Field1": 10, 
     "Field_Doc": {"f1": 0}
    }
,{"timestamp": "2022-01-18T00:15:51.000", 
"Field_Doc": {"f1": 0, "f2": 1.7, "f3": 2}
}
];*/

// Builds the HTML Table out of myList json data from Ivy restful service.
 //function buildHtmlTable() {
   /*  var columns = addAllColumnHeaders(myList);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
             if (cellValue == null) { cellValue = ""; }
        
             row$.append($('<td/>').html(cellValue));
         }

         $("#excelDataTable").append(row$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
    
         for (var key in rowHash) {
             if(rowHash[key] instanceof Object){
                 
                 columnSet.push(rowHash[key]);
                 headerTr$.append($('<th/>').html(key));
             }
            if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         
         }
     }
     $("#excelDataTable").append(headerTr$);
 
     return columnSet;
 }
 */
/*converttotable();
function converttotable(){
    var column=[];
    for(var i=0;i<myList.length;i++){
        for(var key in myList[i]){
            if(column.indexOf(key)===-1){
                column.push(key);
            }
        }
    }
    var tr=column.insertrow(-1);
    for(var i=0;i<column.length;i++){
        var th=document.createElement("th");
        tr.appendChild(th);
    }
    for(var i=0;i<column.length;i++){
        tr=column.insertrow(-1);
        for(var j=0;j<column.length;j++){
            var tabCell=tr.insertCell(-1);
            tabCell.innerHTML=myList[i][column[j]];
        }
    }
    var employeedivcontainer=documnet.getElementById("data");
    employeedivcontainer.innerHTML="";
    employeedivcontainer.appendChild(column);
}*/
var employess = [
    {"timestamp": "2022-01-14T00:12:21.000",
    "Field1": 10, 
    "Field_Doc": {"f1": 0}
   }
,{"timestamp": "2022-01-18T00:15:51.000", 
"Field_Doc": {"f1": 0, "f2": 1.7, "f3": 2}
}
]
convertJsontoHtmlTable();
function convertJsontoHtmlTable()
{

//Getting value for table header
// {'EmployeeID', 'EmployeeName', 'Address' , 'City','Country'}
var tablecolumns = [];
for (var i = 0; i < employess.length; i++) {
    for (var key in employess[i]) {
        if(key ==="Field_Doc"){
            /*for(var j=0;j<key.length;j++){
                for(var k in key[j]){
                    if(tablecolumns.indexOf(k)===-1){
                        tablecolumns.push(k);
                    }
                }
            }*/
            console.log("Hi");
        }
        if (tablecolumns.indexOf(key) === -1) {
            tablecolumns.push(key);
        }
    }
}


//Creating html table and adding class to it
var tableemployee = document.createElement("table");
tableemployee.classList.add("table");
tableemployee.classList.add("table-striped");
tableemployee.classList.add("table-bordered");
tableemployee.classList.add("table-hover")

//Creating header of the HTML table using
//tr
var tr = tableemployee.insertRow(-1);

for (var i = 0; i < tablecolumns.length; i++) {
    //header
    var th = document.createElement("th");
    th.innerHTML = tablecolumns[i];
    tr.appendChild(th);
}

// Add employee JSON data in table as tr or rows
for (var i = 0; i < employess.length; i++) {
    tr = tableemployee.insertRow(-1);
    for (var j = 0; j < tablecolumns.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = employess[i][tablecolumns[j]];
    }
}

//Final step , append html table to the container div
var employeedivcontainer = document.getElementById("employeedivcontainer");
employeedivcontainer.innerHTML = "";
employeedivcontainer.appendChild(tableemployee);
}