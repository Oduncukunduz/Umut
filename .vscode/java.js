var x= true
// var y = true
 var arkaplan = document.body
// var isim = document.getElementById("username")
// var soyad = document.getElementById("soyad")
// var kulanıcı = []
function test(){
    if(x){
        document.getElementById('31').src='kunduz2.webp'
        x=false
        console.log("test1")
        arkaplan.style.backgroundImage="url('arkaplan.jpg')"
    
    }
    else{
        document.getElementById('31').src='kunduz.jpg'
        x=true
        console.log("test2")
    arkaplan.style.backgroundImage="url('arka.jpg')"
    }
    }
// function test1(){
// if(x){
//     document.getElementById('31').src='kunduz2.webp'
//     x=false
//     console.log("test1")
//     arkaplan.style.backgroundImage="url('ates')"

// }
// }
// function test2(){
//    if(x){ 
//     document.getElementById('31').src='kunduz.webp'
//     x=true
//     console.log("test2")
// arkaplan.style.backgroundImage="url('arkaplan.jpg')"
// }
// }

// function kayit(){
//     kulanıcı.push({kulanıcı:isim.value,şifre:soyad.value})
//     console.log(kulanıcı)


//      console.log(isim.value,soyad.value,"Kayıt Yaptığınıziçin teşşekür ederiz")
//      document.getElementById("kayıt").reset()

//     }
// function giris(){
//     console.log(kulanıcı[0].username)
//     kulanıcı.forEach(kulanıcıbilgisi => {
//         if(kulanıcıbilgisi.kulanıcı === isim.value && kulanıcıbilgisi.şifre === soyad.value ){
//             console.log("doğru giriş yaptınız")

//         }
//         else{
//             console.log("Kulanıcı adınızı yada şifreniz yanlış girdiniz")


//         }
//     })


    //  if(kulanıcı[0].kulanıcı === isim.value && kulanıcı[0].şifre === soyad.value ){

    //     console.log("Tebrikler Giriş yaptınız")
    //     document.getElementById("kayıt").reset()




    //  }











