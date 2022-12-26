function display(val){
    document.getElementById("result").value += val;
}

function calculate(){
    var value = document.getElementById('result').value;//12/4=  bu hisse silinir ve sadece 3 deyeri gelir.
    var answer = eval(value); 
    //eval(12/4)=3 burada alinan 3 deyerini bize geri qaytarir. 12/4 islemini yerine yetiren metoddur.

    document.getElementById('result').value=answer;
}

function clearResult(){
    document.getElementById('result').value="";
}

