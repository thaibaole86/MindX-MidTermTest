//Bai 1
function b1(){
    let newstring = " ";
    let strinput = document.getElementById('str_input').value;
    for (i = strinput.length - 1; i >= 0 ; i = i - 1) {
        newstring += strinput[i];
    }
    document.getElementById('resultb1').innerHTML = "<b>" + newstring +"</b>";
}
//Bai 2
function b2(){
    let sinput = document.getElementById('str_input2').value;
    let wordarray = sinput.split(" ");
    for (i = 0 ; i < wordarray.length ; i++ ) {
        wordarray[i] = wordarray[i].charAt(0).toUpperCase() + wordarray[i].slice(1);
    }

    for (j = 0 ; j < wordarray.length ; j++ ) {
        document.getElementById('resultb2').innerHTML += "<b>" + wordarray[j] + " " + "</b>"
    }
}

//Bai 3
let array = [];
function b3_add(){
    let input = document.getElementById('str_input3').value;
    array.push(input);    
    document.getElementById('str_array').innerHTML = array;
}

function b3(){
    let sortarray = array.sort();
    let newarray = [sortarray[0]];
    for ( i = 1; i <= sortarray.length; i++) {
            if ( sortarray[i] !== sortarray[i-1]){
                newarray.push(sortarray[i]);
                console.log(newarray);
            }
        }
    console.log(newarray);
    for (j = 0 ; j < newarray.length ; j++ ) {
        if (newarray[j] !== undefined)
        document.getElementById('resultb3').innerHTML += "<b>" + newarray[j] + ", " + "</b>"
    }
}

//Bai 4

let staff = [
    {
        "ID" : 1,
        "Name": "Nguyen Van A",
        "Age" : 18,
        "Salary" : 500,
        "Position" : "Admin"
    },
    {
        "ID" : 2,
        "Name": "Le Van B",
        "Age" : 19,
        "Salary" : 600,
        "Position" : "Coder"
    },
    {
        "ID" : 3,
        "Name": "Le Thi C",
        "Age" : 20,
        "Salary" : 700,
        "Position" : "Manager"
    }
]

function readstaff() {
    document.getElementById('table-content').innerHTML = "<thead><tr><th></th><th>Họ Tên</th><th>Tuổi</th><th>Mức Lương</th><th>Chức Vụ</th></tr></thead>";
    for (i = 0 ; i< staff.length; i++) {
        document.getElementById('table-content').innerHTML += "<tr><td><button onclick='editstaff(this.id)' id=" + staff[i].ID + " >Edit</button></td>" + "<td>" + staff[i].Name + "</td><td>" + staff[i].Age + "</td><td>" + staff[i].Salary + "</td><td>" + staff[i].Position + "</td>" + "<td><button onclick='deletestaff(this.id)' id=" + staff[i].ID + " >Delete</button></td>"  + "</tr>"
    }
}

function createstaff() {
    let newname = prompt("Vui lòng nhập tên nhân viên mới");
    if (newname == null) {
        return;
    }

    let newage = prompt("Vui lòng nhập tuổi nhân viên mới");
    if (newage == null) {
        return;
    }

    let newsalary = prompt("Vui lòng nhập lương nhân viên mới");
    if (newsalary == null) {
        return;
    }

    let newposition = prompt("Vui lòng nhập chức vụ nhân viên mới");
    if (newposition == null) {
        return;
    }

    let newstaff = {
        "ID" : staff.length + 1,
        "Name": newname,
        "Age" : newage,
        "Salary" : newsalary,
        "Position" : newposition
    }

    staff.push(newstaff);
    alert('Successfully Added New Staff');
    readstaff()
}

function deletestaff(id) {
    staff.splice(id - 1, 1)
    alert('Successfully Deleted Staff');
    readstaff()
}

function editstaff(id) {
    console.log(staff[id-1]);
    
    let newname = prompt("Vui lòng nhập tên muốn sửa (Có thể Cancel nếu không muốn sửa thông tin này) ");
    if (newname == null) {
        newname = staff[id-1].Name;
    }

    let newage = prompt("Vui lòng nhập tuổi nhân viên mới (Có thể Cancel nếu không muốn sửa thông tin này) ");
    if (newage == null) {
        newage = staff[id-1].Age;
    }

    let newsalary = prompt("Vui lòng nhập lương nhân viên mới (Có thể Cancel nếu không muốn sửa thông tin này) ");
    if (newsalary == null) {
        newsalary = staff[id-1].Salary;
    }

    let newposition = prompt("Vui lòng nhập chức vụ nhân viên mới (Có thể Cancel nếu không muốn sửa thông tin này) ");
    if (newposition == null) {
        newposition = staff[id-1].Position;
    }
    
    staff[id-1] = {
        "ID": parseInt(id),
        "Name": newname,
        "Age" : newage,
        "Salary" : newsalary,
        "Position" : newposition
    }
    alert('Successfully Edited Staff');
    readstaff()
}

// Bai 5


function bai5(){
    let validmonth31 = [1,3,5,6,8,10,12];

    let resultb5;
    let ngay = parseInt(document.getElementById('ngay').value);
    let thang = parseInt(document.getElementById('thang').value);
    let nam = parseInt(document.getElementById('nam').value);
    let ngaymoi = ngay;
    let thangmoi = thang;
    let nammoi = nam;

    if (ngay == 31) {
        for (i = 0; i <= validmonth31.length; i++) {
            if (thang == validmonth31[i]) {
                resultb5 = "Ngay Hop Le";
                ngaymoi = 1;
                if (thang == 12) {
                    thangmoi = 1;
                    nammoi = nam + 1;
                }
                else {
                    thangmoi = thang + 1;
                }
                break;
            }
            else {
                resultb5 = "Ngay Ko Hop Le";
            }

        }
    }

    if (ngay < 31 && thang != 2) {
        resultb5 = "Ngay Hop Le";
        ngaymoi = ngay + 1;
        thangmoi = thang + 1;
    }

    if (ngay < 31 && thang == 2) {
        if (nam % 19 == 0) {
            if (ngay <=29) {
                resultb5 = "Ngay Hop Le";
                ngaymoi = 1;
                thangmoi = thang + 1;
            }
            else {
                resultb5 = "Ngay Ko Hop Le";  
            }
        }
        if (nam % 19 != 0) {
            if (ngay <= 28) {
                resultb5 = "Ngay Hop Le";
                ngaymoi = 1;
                thangmoi = thang + 1;
            }
            else {
                resultb5 = "Ngay Ko Hop Le";  
            }
        }
    }

    if (ngay > 31) {
            resultb5 = "Ngay Ko Hop Le"; 
    } 
    
    document.getElementById('resultb5').innerHTML = resultb5; 
//Cau B
if (resultb5 == "Ngay Hop Le") {
    document.getElementById('resultb52').innerHTML = "Ngay Hop Le tiep theo la: " + ngaymoi + "-" + thangmoi + "-" + nammoi;
    }
    if (resultb5 != "Ngay Hop Le") {
        document.getElementById('resultb52').innerHTML = "Khong co ngay hop le tiep theo. "    
    }
}






    
  