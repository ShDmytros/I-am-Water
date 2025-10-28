let result = document.getElementById("calculator_result")


function count(operation, id, min = 0){
    let val = document.getElementById(id) 

    if (operation == '+' && val.value >= min){
        val.value = +val.value + 1
        calc()
    }
    else if (operation == '-' && val.value > min){
        val.value = +val.value - 1
        calc()
    }
    else{
        val.value = min
    }
}

function calc(){
    let people = document.getElementById("number_of_people")

    let shower1 = document.getElementById("number_of_shower_per_day")
    let shower2 = document.getElementById("number_of_shower_duration")

    let bath = document.getElementById("number_of_bath_per_week")
    
    let flusher = document.getElementById("number_of_flusher_per_day")

    let laundry = document.getElementById("number_of_laundry_per_week")

    let washing_up = document.getElementById("number_of_washing_up_per_week")

    result.textContent =  people.value * (7 * ((shower1.value * 8 * shower2.value) + flusher.value * 8) + bath.value * 200) + laundry.value * 40 + washing_up.value * 10
}


// function countPeople(operation){
//     let number_of_people = document.getElementById('number_of_people') 

//     if (operation == '+' && number_of_people.value > 0){
//         number_of_people.value = +number_of_people.value + 1
//     }
//     else if (operation == '-' && number_of_people.value > 1){
//         number_of_people.value = +number_of_people.value - 1
//     }
//     else{
//         number_of_people.value = 1
//     }
// }
