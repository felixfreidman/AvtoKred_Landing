// Form Logic
let initContainer = document.getElementById("initSlide");
let yesForm = document.getElementById("yesForm");
let noForm = document.getElementById("noform");
let toYesForm = document.getElementById("yesFormTrans");
let toNoForm = document.getElementById("noFormTrans");
let creditSlide = document.getElementById("creditSlide");
let sendSlide = document.getElementById("sendSlide");
let toInitSlide = document.getElementById("toInitSlide");
let toSendSlide = document.getElementById("toSendSlide");
let toCreditSlide = document.getElementById("toCreditSlide");
toYesForm.addEventListener("click", () => {
    yesForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});

toNoForm.addEventListener("click", () => {
    noForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});

toInitSlide.addEventListener("click", () => {
    yesForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});

toSendSlide.addEventListener("click", () => {
    sendSlide.classList.toggle("js-hidden--Animated");
    creditSlide.classList.toggle("js-hidden--Animated");
});
toCreditSlide.addEventListener("click", () => {
    sendSlide.classList.toggle("js-hidden--Animated");
    creditSlide.classList.toggle("js-hidden--Animated");
});

$("#phone").inputmask();

// Credit Logic
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
$(document).ready(function() {
    $("#sliderCredit").slider({
        range: "min",
        animate: true,
        value: 500000,
        min: 100000,
        max: 8000000,
        step: 10000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderCreditInput").val("Сумма кредита: " + debtValue + " ₽");
        },
    });
    $("#sliderInvest").slider({
        range: "min",
        animate: true,
        value: 0,
        min: 0,
        max: 6400000,
        step: 10000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderInvestInput").val("Первоначальный взнос: " + debtValue + " ₽");
        },
    });
});

let creditInput = document.getElementById("sliderCreditInput");
let valueCreditInput = creditInput.value;
creditInput.addEventListener("focusin", () => {
    creditInput.value = "";
});

creditInput.addEventListener("focusout", () => {
    if (!creditInput.value) {
        creditInput.value = valueCreditInput;
    } else {
        $("#sliderCredit").slider("option", "value", creditInput.value);
        let updatedCreditInput = numberWithCommas(creditInput.value);
        creditInput.value = `Сумма кредита: ${updatedCreditInput} ₽`;
    }
});
let investInput = document.getElementById("sliderInvestInput");
let valueInvestInput = investInput.value;
investInput.addEventListener("focusin", () => {
    investInput.value = "";
});

investInput.addEventListener("focusout", () => {
    if (!investInput.value) {
        investInput.value = valueInvestInput;
    } else {
        $("#sliderInvest").slider("option", "value", investInput.value);
        let updatedInvestInput = numberWithCommas(investInput.value);
        investInput.value = `Первоначальный взнос: ${updatedInvestInput} ₽`;
    }
});

let pickerToggler = document.querySelector(".picker-display");
let pickerOptions = document.querySelector(".picker-display__options");
pickerToggler.addEventListener("click", () => {
    pickerOptions.classList.toggle("js-hidden--Animated");
});
document.addEventListener("mouseup", function(e) {
    if (!pickerToggler.contains(e.target)) {
        pickerOptions.classList.add("js-hidden--Animated");
    }
});

let options = document.querySelectorAll(".option");
options.forEach((option) => {
    option.addEventListener("click", () => {
        uncheckOptions();
        option.classList.add("checked");
        document.getElementById("pickerTime").textContent = option.textContent;
        document.getElementById(
            "timePicker"
        ).value = `Срок кредитования: ${option.textContent}`;
    });
});

function uncheckOptions() {
    options.forEach((option) => {
        if (option.classList.contains("checked")) {
            option.classList.remove("checked");
        }
    });
}

function autoCheckOptions(attachedString) {
    uncheckOptions();
    options.forEach((option) => {
        if (option.textContent.includes(attachedString)) {
            option.classList.add("checked");
        }
    });
}

let timeInput = document.getElementById("timePicker");
let valueTimeInput = timeInput.value;
timeInput.addEventListener("focusin", () => {
    timeInput.value = "";
});

timeInput.addEventListener("focusout", () => {
    if (!timeInput.value) {
        timeInput.value = valueTimeInput;
    } else {
        $("#sliderInvest").slider("option", "value", timeInput.value);
        let updatedTimeInput = numberWithCommas(timeInput.value);
        switch (updatedTimeInput) {
            case "1":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} год`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} год`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "2":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "3":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "4":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTime"
                ).textContent = ` ${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "5":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "6":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "7":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "8":
                timeInput.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTime"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
        }
    }
});