//  1. Syntax Percabangan if ( cuman punya percabangan if doang)

var totalBelanja = 80000;

if(totalBelanja > 1000){
    document.getElementById("if").innerHTML="selamat kamu mendapatkan tiket liburan ke korea";
} 

// 2. syntax Percabangan If Else 
var umurPengunjung = 17;
if(umurPengunjung >= 19){
    document.getElementById("ifElse").innerHTML="kamu boleh masuk wahana ini";
} else{
    document.getElementById("ifElse").innerHTML="Maaf kamu tidak bisa masuk wahana ini";
}


//3. percabangan if else if
var tiket = 1;

if(tiket >= 6) {
    document.getElementById("ifelseif").innerHTML="Dapat popcorn";
}
    else if(tiket >=4){
        document.getElementById("ifelseif").innerHTML="dapat makanan ringan";
    }
    else if(tiket>=2){
        document.getElementById("ifelseif").innerHTML="dapat permen";
    }
    else{
        document.getElementById("ifelseif").innerHTML="g dapet snack";
    }

    
    // 4. syntax percabangan switch case

    // cara pertama
    // var umurPengunjung = prompt ('masukan umur anda !');
//     var wahana;
//     // PROMPT => kyk aler untuk menampilkan kek jendela gtu kyk yg biasanay tiba" muncul allow di google tapi bisa nginput data

//     switch(true){
//         case umurPengunjung >= 18:
//     wahana = "boleh masuk kora-kora";
//     document.getElementById("sc").innerHTML= wahana;
//     break;

//     case umurPengunjung >= 16:
//     wahana = "boleh masuk flaying fox";
//     document.getElementById("sc").innerHTML= wahana;
//     break;
    
//     case umurPengunjung >= 14:
//     wahana = "boleh masuk tornado";
//     document.getElementById("sc").innerHTML= wahana;
//     break; 
//     // kek penutup biar g bisa kecampur sama kondisi di atasnya

//     default: (bila kondisi tersebut itdak terpenuhi)
//         wahana="terimakasih sudah berkunjung";
//         document.getElementById("sc").innerHTML= wahana;
// }

// cara kedua
// var nilai = prompt("masukkan nilai anda");
// var grade ="";

// switch(true){
//     case nilai > 90:
//         grade = "A+";
//         document.getElementById("sc").innerHTML = grade;
//         break;
        
    
//     case nilai > 80:
//         grade = "A";
//         document.getElementById("sc").innerHTML = grade;
//         break;

//     default:
//          grade = "F";
//         document.getElementById("sc").innerHTML = grade;

// } 

// 5. Percabangan ternary (?) 
// (versi simplenya dari ifelse)
var tanya = prompt("apakah serang ibu kota banten?");
// prompt => kyk alert (notification) tapi bisa nginput data

var jawaban = (tanya.toLocaleUpperCase()== "iya") ? "benar" : "salah";
// touppercase => otomatis huruf kapital masuk ke datanya
document.getElementById("ternary").innerHTML = jawaban;


// 6. Percabangan Nested {sarang percabangan}
var user ={
    nama: "zahraa",
    email: "zahra@gmail.com",
    password: "zahra160703",
    role: "admin"
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email);
    if(user.email == email){
        if(user.password == password){
            if (user.role == "admin"){
                window.open(url, "_blank");
                alert("selamat datang" + user.nama);
            } 
        }else{
            alert("tidak bisa masuk");
        }
    }else {
        alert("bukan admin woe")
    }

}