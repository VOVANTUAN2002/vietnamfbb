var height1 =document.getElementById('height');
var weight1= document.getElementById('weight');
var cal = document.getElementById('cal');
function calculate(height, weight) {
    if (height <=0 || isNaN(height) || isNaN(weight)) {
        alert('no calutate');
    }else{
        height = height/100;
        let bmi = weight/Math.pow(height , 2);
        return bmi;
    }
}
cal.onclick = function result (){
    var height = height1.value ;
    var weight = weight1.value ;
    var bmi = calculate(height,weight);

        if(bmi >= 18.5 && bmi <=24.9){
            alert('thiếu cân');
        }
        else if(bmi >= 25 && bmi <=29.9){
            alert('Bình thường ');
        }
        else if(bmi >= 30 && bmi <=34.9){
            alert('Thường cân');

        }
        else if(bmi >= 40 && bmi <=39.9){
            alert('Béo phì')
    }
}


    
