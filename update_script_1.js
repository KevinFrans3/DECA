// var email = ["llliu@gmail.com", "aaron.babian@yahoo.com", "lucas.batties11@gmail.com", "gcarson1998@gmail.com", "Kobec891@gmail.com", "chenlawrencej@gmail.com", "mcheong.michelle@gmail.com", "minseo117@gmail.com", "dchu0518@gmail.com", "graceading@gmail.com", "guo.katie.kazoo@gmail.com", "jennyhan1999@gmail.com", "uhofland@gmail.com", "happyface.ca@gmail.com", "myhuang1000@gmail.com", "michaelmjmichael@gmail.com", "cheryl.kao.ck@gmail.com", "heiden.lee.jeff@gmail.com", "julielee1115@gmail.com", "ysldude@gmail.com", "audreyli.betty@gmail.com", "seanlin2000@gmail.com", "15aquajewel@gmail.com", "emilycocoa@gmail.com", "amitrao10@gmail.com", "Borasmussen321@gmail.com", "abschloss@gmail.com", "kaeschloss@rocketmail.com", "tjs.sears@gmail.com", "matnadroj@gmail.com", "alexandra@ting.org", "christopher@ting.org", "emiwong2@gmail.com", "happyknight123@gmail.com", "tywonder99@gmail.com", "danamzhao@gmail.com", "karen.h.zhu@gmail.com", "emilyshuangyuecao@gmail.com", "cassieachou@gmail.com", "toko.dougherty@gmail.com", "elliott.eve17@gmail.com", "kevin.frans@gmail.com", "adivganapathi@gmail.com", "misty.hong@gmail.com", "houdavid1999@gmail.com", "jamie.huang@gmail.com", "jikathleen467@gmail.com", "katzir.asaf@gmail.com", "joe1234lai@gmail.com", "holee4153@gmail.com", "kellen.liu@gmail.com", "w.liu1998@gmail.com", "lucha.dominik1432@gmail.com", "wonshil.prk@gmail.com", "samir.puranik@gmail.com", "simon.rufer@yahoo.com", "vidurthukral@gmail.com", "e.w314476@gmail.com", "bizzyizzy888@gmail.com", "leonard2378@gmail.com", "jlraymond.wu@gmail.com", "lenafye@gmail.com", "dianayun99@gmail.com", "sz24ph@gmail.com", "ztephanie.zhang@gmail.com", "celineshaw5@gmail.com"]
var email = ["jonathan.z99@gmail.com"];

for (var i = 0; i < email.length; i++){
    db.users.update({"local.email":email[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
}

