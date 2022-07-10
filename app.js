

//     let eid1st = document.getElementById("1stDay");
//     function eidFirstDay(){
//     let today = new Date(eid1st.value);
//     let firstDay = new Date("7/10/2022");
//     let diffInTime = firstDay.getTime() - today.getTime();
//     let diffInDays = diffInTime / (1000 * 3600 * 24);
//     console.log(diffInDays);
// }

// let eid2nd = document.getElementById("2ndDay");
//     function eidSecondDay(){
//     let today = new Date(eid2nd.value);
//     let firstDay = new Date("7/11/2022");
//     let diffInTime = firstDay.getTime() - today.getTime();
//     let diffInDays = diffInTime / (1000 * 3600 * 24);
//     console.log(diffInDays);
// }

// let eid3rd = document.getElementById("3rdDay");
//     function eidThirdDay(){
//     let today = new Date(eid3rd.value);
//     let firstDay = new Date("7/12/2022");
//     let diffInTime = firstDay.getTime() - today.getTime();
//     let diffInDays = diffInTime / (1000 * 3600 * 24);
//     console.log(diffInDays);
// }


function eid1st(){
var  time1 = setInterval(function firstDay(){
	
	var  today1 = new  Date().getTime();
	
	var  targetDate1 = new  Date("07/10/2022").getTime();
	
	var  diffInTime1 = targetDate1 - today1;
	
	var  days1 = Math.floor(diffInTime1 / (1000 * 3600 * 24));
	var  hours1 = Math.floor((diffInTime1 % (1000 * 3600 * 24)) / (1000 * 3600));
	var  minutes1 = Math.floor((diffInTime1 % (1000 * 3600 )) / (1000 * 60));
	var  seconds1 = Math.floor((diffInTime1 % (1000 * 60)) / 1000);

	
	document.getElementById("eidFirstDay").innerHTML = days1 + " Days " + hours1 + " Hrs " + minutes1 + " min " + seconds1 + " sec ";

	if(diffInTime1 < 0 ){
		clearInterval(time1);
		document.getElementById("eidFirstDay").innerHTML = "Welcome To 1st Day Of Eid Al-Adha";
	}
	}, 1000);
}

    // ===================================Eid Second Day====================


    function eid2nd(){
    var  time2 = setInterval(function secondDay(){
        
        var  today2 = new  Date().getTime();
        
        var  targetDate2 = new  Date("07/11/2022").getTime();
        
        var  diffInTime2 = targetDate2 - today2;
        
        var  days2 = Math.floor(diffInTime2 / (1000 * 3600 * 24));
        var  hours2 = Math.floor((diffInTime2 % (1000 * 3600 * 24)) / (1000 * 3600));
        var  minutes2 = Math.floor((diffInTime2 % (1000 * 3600 )) / (1000 * 60));
        var  seconds2 = Math.floor((diffInTime2 % (1000 * 60)) / 1000);
    
        document.getElementById("eidSecondDay").innerHTML = days2 + " Days " + hours2 + " Hrs " + minutes2 + " min " + seconds2 + " sec ";
    
        if(diffInTime2 < 0 ){
            clearInterval(time2);
            document.getElementById("eidSecondDay").innerHTML = "Welcome To 2nd Day Of Eid Al-Adha";
        }
        }, 1000);

    }



// ========================Eid Third Day================================



        function eid3rd(){   

        var  time3 = setInterval(function thirdDay(){
            
            var  today3 = new  Date().getTime();
            
            var  targetDate3 = new  Date("07/12/2022").getTime();
            
            
            var  diffInTime3 = targetDate3 - today3;
            
            var  days3 = Math.floor(diffInTime3 / (1000 * 3600 * 24));
            var  hours3 = Math.floor((diffInTime3 % (1000 * 3600 * 24)) / (1000 * 3600));
            var  minutes3 = Math.floor((diffInTime3 % (1000 * 3600 )) / (1000 * 60));
            var  seconds3 = Math.floor((diffInTime3 % (1000 * 60)) / 1000);
        
            document.getElementById("eidThirdDay").innerHTML = days3 + " Days " + hours3 + " Hrs " + minutes3 + " min " + seconds3 + " sec ";
        
            if(diffInTime3 < 0 ){
                clearInterval(time3);
                document.getElementById("eidThirdDay").innerHTML = "Welcome To 3rd Day Of Eid Al-Adha";
            }
            }, 1000);
        }