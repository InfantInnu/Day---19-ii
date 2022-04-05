var container=document.createElement('div');
container.className="container"
 
var div1=document.createElement('div');
var h1=createtag("h2","title","Form Submission");

 
var row=document.createElement('div');
row.className="row";

var row1=document.createElement('div');
row1.className="row table"
 
 
var form=document.createElement('form')
form.setAttribute("id","form")
 
var data1=createformdiv("form-group")
var data2=createformdiv("form-group")
var data3=createformdiv("form-group") 
var data4=createformdiv("form-group")
var data5=createformdiv("form-check form-check-inline")
var data6=createformdiv("form-check form-check-inline")
var data7=createformdiv("form-check form-check-inline")
var data8=createformdiv("form-check")
var data9=createformdiv("form-check")
var data10=createformdiv("form-check")
var data11=createformdiv("form-check")
var data12=createformdiv("form-check")
var data13=createformdiv("form-check")
var data14=createformdiv("form-group")
var data15=createformdiv("form-group")
var button=document.createElement("button")
button.setAttribute("type", "button")
button.setAttribute("id", "submit")
button.className="btn btn-success"
button.innerHTML="Submit"
button.addEventListener("click",submit);
 
 var firstLabel=label("first-name","First Name :");
 var lastLabel=label("last-name","Last Name :");
 var addressLabel=label("address","Address :");
 var pincodeLabel=label("pincode","Pincode :");
 var genderLabel=label("gender","Gender :");
 var maleLabel=label("maleid","Male");
 maleLabel.className="form-check-label";
 var femaleLabel=label('femaleid',"Female");
 femaleLabel.className="form-check-label";
 var foodlistLabel=label("foodlist","Choice of foods :");
 var food1label=label("food1","Briyani");
 var food2label=label("food2","Chicken");
 var food3label=label("food3","Mutton");
 var food4label=label("food4","Fish");
 var food5label=label("food5","Fried Rice");
 var stateLabel=label("state-name","State :");
 var countryLabel=label("country-name","Country :");
 
var firstname=input("input", "text","first-name","Enter the First name");
var lastname=input("input", "text","last-name", "Enter the Last name");
var addressname=input( "textarea" ,"textarea","address", "Enter the Address");
var pincodename=input( "input" ,"number","pincode", "Enter the Pincode");
var malename= radio("input","radio","gender","maleid","male","form-check-input")
var femalename= radio("input","radio","gender","femaleid","female","form-check-input")
var food1name=food("input","checkbox","food","food1","Briyani","form-check-input" )
var food2name=food("input","checkbox","food","food2","Chicken","form-check-input" )
var food3name=food("input","checkbox","food","food3","Mutton","form-check-input" )
var food4name=food("input","checkbox","food","food4","Fish","form-check-input" )
var food5name=food("input","checkbox","food","food5","Fried Rice","form-check-input" )
var statename=input( "input" ,"text","state-name", "Enter the State");
var countryname=input( "input" ,"text","country-name", "Enter the Country");
function createformdiv(classname) {
var div=document.createElement('div');
div.className=classname;
return div;
}
 
function label(forname,innerHTMLname){
    var label=document.createElement('label');
    label.setAttribute("for",forname)
    label.innerHTML=innerHTMLname;
    return label;
}
 
function input(inputtag,typename,idname,placeholdername){
 var name=document.createElement(inputtag);
 name.setAttribute("type", typename);
 name.setAttribute("id", idname);
 name.setAttribute("placeholder",placeholdername);
 name.setAttribute("required", "");
 name.required = true; 
 name.className="form-control";
 return name;
}
 
function radio(radiotag,radiotype,radioname,radioid,radiovalue,rodioclassname){
      var radio = document.createElement(radiotag);
      radio.setAttribute("type", radiotype);
      radio.setAttribute("name",radioname);
      radio.setAttribute("id", radioid);
      radio.setAttribute("value", radiovalue);
      radio.className=rodioclassname;
      return radio;
}   
function food(foodtag,foodtype,foodname,foodid,foodvalue,foodclassname){
    var food = document.createElement(foodtag);
    food.setAttribute("type", foodtype);
    food.setAttribute("name", foodname);
    food.setAttribute("id", foodid);
    food.setAttribute("value", foodvalue);
    food.className=foodclassname;
    return food;
}   
 
 
function createtag(tagname,idname,data) {
    var tag=document.createElement(tagname);
    tag.setAttribute("id",idname)
    tag.innerHTML=data
    return tag;
}

var p=createtag("h2","tabletitle","Temporary Database");

var table = document.createElement('table');

table.className="table";
table.setAttribute("id","myTable")
var thead=document.createElement("thead");
thead.className="thead-dark";
 
var tr=document.createElement("tr");
 
var th1= creater('th','First name');
var th2= creater('th','Last name');
var th3= creater('th','Address');
var th4= creater('th','Pincode');
var th5= creater('th','Gender');
var th6= creater('th','Food List');
var th7= creater('th','State');
var th8= creater('th','Country');
tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);
 
var tbody=document.createElement("tbody");
 
 
function creater(tag,data){
    var ele=document.createElement(tag);
    ele.innerHTML = data;
    return ele;
}
 
function submit(){
 
    var firstnamedata=document.getElementById('first-name').value;
    var lastnamedata=document.getElementById('last-name').value; 
    var addressdata=document.getElementById('address').value; 
    var pincodedata=document.getElementById('pincode').value;
    var genderdata=document.getElementsByName('gender');
    var foodlistdata=document.getElementsByName('food');
    var statedata=document.getElementById('state-name').value; 
    var countrydata=document.getElementById('country-name').value;
   for(i = 0; i < genderdata.length; i++) {
        if(genderdata[i].checked)
 
               genderdata = genderdata[i].value;
    }
    var listoffood = []
    for (var checkbox of foodlistdata) {
        if (checkbox.checked)
        listoffood.push(checkbox.value)
      }
 
if(listoffood.length === 0||(document.getElementById('maleid').checked ==false&&document.getElementById('femaleid').checked == false)
||(firstnamedata==""||firstnamedata==null)||(lastnamedata==""||lastnamedata==null)||(addressdata==""||addressdata==null)
||(pincodedata==""||pincodedata==null)||(statedata==""||statedata==null)||(countrydata==""||countrydata==null))
{
    alert("fill the all required fields");
}
else{
 
    var table = document.getElementById("myTable");
 
    var row = table.insertRow(-1);
    var firstname = row.insertCell(0);
    var lastname = row.insertCell(1);
    var address = row.insertCell(2);
    var pincode = row.insertCell(3);
    var gender = row.insertCell(4);
    var foodlist = row.insertCell(5);
    var state = row.insertCell(6); 
    var country = row.insertCell(7);
 
     firstname.innerHTML=firstnamedata
     lastname.innerHTML=lastnamedata
     address.innerHTML=addressdata 
     pincode.innerHTML=pincodedata
     gender.innerHTML=genderdata
     var sum="";
     for(i = 0; i <listoffood.length; i++) {
 
         sum =`${sum}  ${listoffood[i]}`;
         foodlist.innerHTML = sum;
    }
 
     state.innerHTML=statedata
     country.innerHTML=countrydata
     document.getElementById('myTable').style.visibility = "visible";
 
 
    document.getElementById("form").reset();
}
}
 
div1.append(h1)
data1.append(firstLabel,firstname );
data2.append(lastLabel,lastname);
data3.append(addressLabel,addressname);
data4.append(pincodeLabel,pincodename);
data5.append(genderLabel);
data6.append(malename,maleLabel);
data7.append(femalename,femaleLabel);
data8.append(foodlistLabel);
data9.append(food1name,food1label); data10.append(food2name,food2label);
data11.append(food3name,food3label);
data12.append(food4name,food4label);
data13.append(food5name,food5label);
data14.append(stateLabel,statename);
data15.append(countryLabel,countryname);
form.append(data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,button);
row.append(form)
 
table.append(thead,tbody);
row1.append(p,table)
container.append(div1,row,row1)
document.body.append(container)