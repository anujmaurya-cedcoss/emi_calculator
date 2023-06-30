$(document).ready(function () {
    function calculate() {
        const amount = $("#amount").val();
        const interest = $("#interest").val();
        const period = $("#period").val();

        if (amount > 0 && interest >= 0 && period > 0) {
            return amount * (1 + interest * period);
        } else {
            return -1;
        }
    }
    $("#calculate").click(function () {

        // a = p(1 + r*t), emi = a/t
        const period = $("#period").val();
        let total_amount = calculate();
        let emi = 1*total_amount / (12 * period);
        if (total_amount != -1) {
            $output = `The calculated EMI per month is ${emi}`;
            $("#result").html($output);
            $("#error").html("");
        } else {
            $("#error").html("Please enter correct values");
            $("#result").html("");
        }
    })

    $("#reset").click(function () {
        $("#amount").val("");
        $("#interest").val("");
        $("#period").val("");
        $("#result").html("");
    });

    $("#details").click(function () {
        // show the details
        const period = $("#period").val();
        let total_amount = calculate();
        let emi = 1*total_amount / (12 * period);
        if(total_amount != -1) {
            $output = `The calculated EMI per month is ${emi}<br>
                    Total amount is ${total_amount}
            `;
            $("#result").html($output);
            $("#error").html("");
        }
    });
});
