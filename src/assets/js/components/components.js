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
let toInitSlideFromNo = document.getElementById("toInitSlideFromNo");
let toCreditSlideFromNo = document.getElementById("toCreditSlideFromNo");
let typeSlide = document.getElementById("typeSlide");
let uncertainCreditSlide = document.getElementById("uncertainCreditSlide");
let toTypeSlide = document.getElementById("toTypeSlide");
let toUncertainSendSlide = document.getElementById("toUncertainSendSlide");
let uncertainSendSlide = document.getElementById("uncertainSendSlide");
let toUncertainCreditSlide = document.getElementById("toUncertainCreditSlide");

toYesForm.addEventListener("click", () => {
    yesForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});
$(toYesForm).on("click", function() {
    $(window).scrollTop($("#yesForm").offset().top);
});
toNoForm.addEventListener("click", () => {
    noForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});
$(toNoForm).on("click", function() {
    $(window).scrollTop($("#noform").offset().top);
});
toInitSlide.addEventListener("click", () => {
    yesForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});
$(toInitSlide).on("click", function() {
    $(window).scrollTop($("#initSlide").offset().top);
});
toSendSlide.addEventListener("click", () => {
    sendSlide.classList.toggle("js-hidden--Animated");
    creditSlide.classList.toggle("js-hidden--Animated");
});
$(toSendSlide).on("click", function() {
    $(window).scrollTop($("#yesForm").offset().top);
});
toCreditSlide.addEventListener("click", () => {
    sendSlide.classList.toggle("js-hidden--Animated");
    creditSlide.classList.toggle("js-hidden--Animated");
});
$(toCreditSlide).on("click", function() {
    $(window).scrollTop($("#yesForm").offset().top);
});
toInitSlideFromNo.addEventListener("click", () => {
    initContainer.classList.toggle("js-hidden--Animated");
    noForm.classList.toggle("js-hidden--Animated");
});
$(toInitSlideFromNo).on("click", function() {
    $(window).scrollTop($("#initSlide").offset().top);
});
toCreditSlideFromNo.addEventListener("click", () => {
    typeSlide.classList.toggle("js-hidden--Animated");
    uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toCreditSlideFromNo).on("click", function() {
    $(window).scrollTop($("#noform").offset().top);
});
toTypeSlide.addEventListener("click", () => {
    typeSlide.classList.toggle("js-hidden--Animated");
    uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toTypeSlide).on("click", function() {
    $(window).scrollTop($("#noform").offset().top);
});
toUncertainSendSlide.addEventListener("click", () => {
    uncertainSendSlide.classList.toggle("js-hidden--Animated");
    uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toUncertainSendSlide).on("click", function() {
    $(window).scrollTop($("#noform").offset().top);
});
toUncertainCreditSlide.addEventListener("click", () => {
    uncertainSendSlide.classList.toggle("js-hidden--Animated");
    uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toUncertainCreditSlide).on("click", function() {
    $(window).scrollTop($("#noform").offset().top);
});

$("#phone").inputmask();
$("#phoneUncertain").inputmask();

// Slide Logic
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

let radioLabels = document.querySelectorAll(".radio-label");
radioLabels.forEach((label) => {
    label.addEventListener("click", () => {
        let labelValue = label.getAttribute("for");
        labelValue = labelValue.replace("Type", "");
        let imageToShow = document.getElementById(labelValue);
        hideAllImages();
        imageToShow.classList.toggle("js-hidden--Animated");
    });
});

let imagesToShow = document.querySelectorAll(".radio-image");

function hideAllImages() {
    imagesToShow.forEach((image) => {
        if (!image.classList.contains("js-hidden--Animated")) {
            image.classList.add("js-hidden--Animated");
        }
    });
}

$(document).ready(function() {
    $("#sliderCreditUncertain").slider({
        range: "min",
        animate: true,
        value: 500000,
        min: 100000,
        max: 8000000,
        step: 10000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderCreditInputUncertain").val(
                "Желаемая cумма кредита: " + debtValue + " ₽"
            );
        },
    });
    $("#sliderInvestUncertain").slider({
        range: "min",
        animate: true,
        value: 0,
        min: 0,
        max: 6400000,
        step: 10000,
        slide: function(event, ui) {
            let debtValue = ui.value;
            debtValue = numberWithCommas(debtValue);
            $("#sliderInvestInputUncertain").val(
                "Первоначальный взнос: " + debtValue + " ₽"
            );
        },
    });
});

let creditInputUncertain = document.getElementById(
    "sliderCreditInputUncertain"
);
let valueCreditInputUncertain = creditInput.value;
creditInputUncertain.addEventListener("focusin", () => {
    creditInputUncertain.value = "";
});

creditInputUncertain.addEventListener("focusout", () => {
    if (!creditInputUncertain.value) {
        creditInputUncertain.value = valueCreditInputUncertain;
    } else {
        $("#sliderCreditUncertain").slider(
            "option",
            "value",
            creditInputUncertain.value
        );
        let updatedCreditInput = numberWithCommas(creditInputUncertain.value);
        creditInputUncertain.value = `Желаемая сумма кредита: ${updatedCreditInput} ₽`;
    }
});
let investInputUncertain = document.getElementById(
    "sliderInvestInputUncertain"
);
let valueInvestInputUncertain = investInput.value;
investInputUncertain.addEventListener("focusin", () => {
    investInputUncertain.value = "";
});

investInputUncertain.addEventListener("focusout", () => {
    if (!investInputUncertain.value) {
        investInputUncertain.value = valueInvestInputUncertain;
    } else {
        $("#sliderInvestUncertain").slider(
            "option",
            "value",
            investInputUncertain.value
        );
        let updatedInvestInput = numberWithCommas(investInputUncertain.value);
        investInputUncertain.value = `Первоначальный взнос: ${updatedInvestInput} ₽`;
    }
});

let pickerTogglerUncertain = document.querySelector(".display--uncertain");
let pickerOptionsUncertain = document.querySelector(
    ".display__options--uncertain"
);
pickerTogglerUncertain.addEventListener("click", () => {
    pickerOptionsUncertain.classList.toggle("js-hidden--Animated");
});
document.addEventListener("mouseup", function(e) {
    if (!pickerTogglerUncertain.contains(e.target)) {
        pickerOptionsUncertain.classList.add("js-hidden--Animated");
    }
});

let optionsUncertain = document.querySelectorAll(".option--uncertain");
optionsUncertain.forEach((option) => {
    option.addEventListener("click", () => {
        uncheckOptions();
        option.classList.add("checked");
        document.getElementById("pickerTimeUncertain").textContent =
            option.textContent;
        document.getElementById(
            "timePickerUncertain"
        ).value = `Срок кредитования: ${option.textContent}`;
    });
});

let timeInputUncertain = document.getElementById("timePickerUncertain");
let valueTimeInputUncertain = timeInput.value;
timeInputUncertain.addEventListener("focusin", () => {
    timeInputUncertain.value = "";
});

timeInputUncertain.addEventListener("focusout", () => {
    if (!timeInputUncertain.value) {
        timeInputUncertain.value = valueTimeInputUncertain;
    } else {
        $("#sliderInvestUncertain").slider(
            "option",
            "value",
            timeInputUncertain.value
        );
        let updatedTimeInput = numberWithCommas(timeInputUncertain.value);
        switch (updatedTimeInput) {
            case "1":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} год`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} год`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "2":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "3":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "4":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} года`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = ` ${updatedTimeInput} года`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "5":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "6":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "7":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
            case "8":
                timeInputUncertain.value = `Срок кредитования: ${updatedTimeInput} лет`;
                document.getElementById(
                    "pickerTimeUncertain"
                ).textContent = `${updatedTimeInput} лет`;
                autoCheckOptions(updatedTimeInput);
                break;
        }
    }
});