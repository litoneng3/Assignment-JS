// https://github.com/litoneng3/Assignment-JS


// kilometerToMeter function starts

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer >= 0) {
        return meter;
    }
    else {
        return "distance can't be negative";
    }
}
var totalMeter = kilometerToMeter(0);


// kilometerToMeter function ends

// budgetCalculator function starts

function budgetCalculator(watch, phone, calculator) {
    if (watch >= 0 && phone >= 0 && calculator >= 0) {
        var totalCost = watch * 50 + phone * 100 + calculator * 500;
        return totalCost;
    }
    else {
        return "Number of watch, phone and calculator can't be negative";
    }

}
var totalCost = budgetCalculator(1, 2, -4);
console.log(totalCost);

// budgetCalculator function ends

// hotelCost function starts

function hotelCost(days) {
    var totalCost = 0;
    if (days >= 0) {
        if (days <= 10) {
            totalCost = days * 100;
        }
        else if (days <= 20) {
            firstTenDays = 10 * 100;
            var remaining = days - 10;
            var secondTenDays = remaining * 80;
            totalCost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = days - 20;
            var remainingDays = remaining * 50;
            totalCost = firstTenDays + secondTenDays + remainingDays;
        }
        return totalCost;
    }
    else {
        return "days can't be negative";
    }

}
var totalCost = hotelCost(-25);
console.log(totalCost);

// hotelCost function ends

// megaFriend function starts

function megaFriend(friend) {
    var longestName = friend[0];
    if (friend.length > 0) {
        for (var i = 0; i < friend.length; i++) {
            var Name = friend[i];
            var len = Name.length;
            if (len > longestName.length) {
                longestName = Name;
            }

        }
        return longestName;
    }
    else {
        return "distance can't be negative";
    }

}

var friends = ["Liton", "Sumona", "Kamrunnahar", "Kamruzzamann", "shamsuddin", "shdfsghsfghfjsfjdhhgs"];
var l = megaFriend(friends);
console.log(l);

// megaFriend function ends