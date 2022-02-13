"use strict";

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }
// $("#userPhone").inputmask();
// let swiperGreet = new Swiper("#formSwiper", {
//     navigation: {
//         nextEl: ".swiper-pagination-btn--next",
//         prevEl: ".swiper-pagination-btn--prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: false,
//     effect: "cube",
//     speed: 300,
//     watchSlidesProgress: true,
//     watchVisibility: true,
//     disableOnInteraction: true,
//     noSwiping: true,
// });
// swiperGreet.allowTouchMove = false;
// $(document).ready(function() {
//     // $("#formSliderDebt").slider({
//     //     range: "min",
//     //     animate: true,
//     //     value: 500000,
//     //     min: 100000,
//     //     max: 4350000,
//     //     step: 1000,
//     //     slide: function(event, ui) {
//     //         let debtValue = ui.value;
//     //         debtValue = numberWithCommas(debtValue);
//     //         $("#debtInput").val(debtValue);
//     //     },
//     // });
//     $("#sliderDebt").slider({
//         range: "min",
//         animate: true,
//         value: 400000,
//         min: 100000,
//         max: 8000000,
//         slide: function(event, ui) {
//             let debtValue = ui.value;
//             debtValue = numberWithCommas(debtValue);
//             $("#sliderDebtInput").val(debtValue + " ₽");
//         },
//         // slide: function(event, ui) {
//         //     let debtMoney = $("#sliderDebt").slider("value");
//         //     let debtDeposit = $("#sliderDeposit").slider("value");
//         //     const debtTimeRadios = document.querySelectorAll(".controller-input");
//         //     let objectDebtTime = [...debtTimeRadios].filter((radio) => {
//         //         if (radio.checked) {
//         //             return radio;
//         //         }
//         //     });
//         //     let debtTime = objectDebtTime[0].id;
//         //     let updatedDebtTime = debtTime.replace("month", "");
//         //     switch (updatedDebtTime) {
//         //         case "05":
//         //             updatedDebtTime = 0.5;
//         //             break;
//         //     }
//         //     let coeficient = 3.9 / 1200.0;
//         //     updatedDebtTime = parseInt(updatedDebtTime);
//         //     debtMoney = parseInt(debtMoney);
//         //     debtDeposit = parseInt(debtDeposit);
//         //     debtMoney -= debtDeposit;
//         //     let monthPayment =
//         //         debtMoney *
//         //         coeficient *
//         //         Math.floor(
//         //             Math.pow(1 + coeficient, updatedDebtTime) /
//         //             (Math.pow(1 + coeficient, updatedDebtTime) - 1)
//         //         );
//         //     $;
//         //     $("#depositHalf").text(Math.floor((debtMoney * 0.8) / 2));
//         //     $("#depositMax").text(Math.floor(debtMoney * 0.8));
//         //     let updatedMaxValue = parseInt($("#depositMax").text());
//         //     $("#sliderDeposit").slider("option", "max", updatedMaxValue);
//         //     $("#interestResult").text(Math.floor(monthPayment) + " ₽");
//         // },
//     });
//     $("#sliderYear").slider({
//         range: "min",
//         animate: true,
//         value: 3,
//         min: 0,
//         max: 8,
//         slide: function(event, ui) {
//             let debtValue = ui.value;
//             debtValue = numberWithCommas(debtValue);
//             $("#sliderYearInput").val(debtValue);
//             updateDatesOfInput();
//         },
//     });
//     $("#sliderInvest").slider({
//         range: "min",
//         animate: true,
//         value: 0,
//         min: 0,
//         max: $("#sliderDebt").slider("option", "value") * 0.8,
//         slide: function(event, ui) {
//             let debtValue = ui.value;
//             debtValue = numberWithCommas(debtValue);
//             $("#sliderInvestInput").val(debtValue + " ₽");
//             let debtValueMax = $("#sliderDebt").slider("option", "value") * 0.8;
//             console.log(debtValueMax);
//             $("#sliderInvest").slider("option", "max", debtValueMax);
//         },
//     });
//     $("#sliderDebtUncertain").slider({
//         range: "min",
//         animate: true,
//         value: 400000,
//         min: 100000,
//         max: 8000000,
//         slide: function(event, ui) {
//             let debtValue = ui.value;
//             debtValue = numberWithCommas(debtValue);
//             $("#sliderDebtUncertainInput").val(debtValue + " ₽");
//         },
//     });
//     $("#sliderYearUncertain").slider({
//         range: "min",
//         animate: true,
//         value: 3,
//         min: 0,
//         max: 8,
//         slide: function(event, ui) {
//             let debtValue = ui.value;
//             debtValue = numberWithCommas(debtValue);
//             $("#sliderYearInput").val(debtValue);
//             updateDatesOfInput();
//         },
//     });
//     // $("#sliderDeposit").slider({
//     //     range: "min",
//     //     animate: true,
//     //     value: 40000,
//     //     min: 0,
//     //     max: 80000,
//     //     slide: function(event, ui) {
//     //         let debtMoney = $("#sliderDebt").slider("value");
//     //         let debtDeposit = $("#sliderDeposit").slider("value");
//     //         const debtTimeRadios = document.querySelectorAll(".controller-input");
//     //         let objectDebtTime = [...debtTimeRadios].filter((radio) => {
//     //             if (radio.checked) {
//     //                 return radio;
//     //             }
//     //         });
//     //         let debtTime = objectDebtTime[0].id;
//     //         let updatedDebtTime = debtTime.replace("month", "");
//     //         switch (updatedDebtTime) {
//     //             case "05":
//     //                 updatedDebtTime = 0.5;
//     //                 break;
//     //         }
//     //         let coeficient = 3.9 / 1200.0;
//     //         updatedDebtTime = parseInt(updatedDebtTime);
//     //         debtMoney = parseInt(debtMoney);
//     //         debtDeposit = parseInt(debtDeposit);
//     //         debtMoney -= debtDeposit;
//     //         let monthPayment = Math.floor(
//     //             debtMoney *
//     //             coeficient *
//     //             (Math.pow(1 + coeficient, updatedDebtTime) /
//     //                 (Math.pow(1 + coeficient, updatedDebtTime) - 1))
//     //         );
//     //         $("#interestResult").text(Math.floor(monthPayment) + " ₽");
//     //         // var k = 3.9 / 1200.0;
//     //         // sum = price * k * (Math.pow(1 + k, srok) / (Math.pow(1 + k, srok) - 1));
//     //     },
//     // });
//     // $("#debtInput").val($("#sliderDebt").slider("option", "value"));
//     // $("#debtInput").change(function() {
//     //     $("#formSliderDebt").slider("value", $(this).val());
//     // });
//     // $("#formSliderTime").slider({
//     //     range: "min",
//     //     animate: true,
//     //     value: 3,
//     //     min: 1,
//     //     max: 8,
//     //     step: 1,
//     //     slide: function(event, ui) {
//     //         let timeValue = ui.value;
//     //         switch (timeValue) {
//     //             case 1:
//     //                 timeValue = `${timeValue} год`;
//     //                 break;
//     //             case 2:
//     //                 timeValue = `${timeValue} года`;
//     //                 break;
//     //             case 3:
//     //                 timeValue = `${timeValue} года`;
//     //                 break;
//     //             case 4:
//     //                 timeValue = `${timeValue} года`;
//     //                 break;
//     //             default:
//     //                 timeValue = `${timeValue} лет`;
//     //         }
//     //         $("#timeInput").val(timeValue);
//     //     },
//     // });
//     // $("#timeInput").val($("#formSliderTime").slider("option", "value"));
//     // let timeValue = $("#timeInput").val();
//     // switch (timeValue) {
//     //     default: timeValue = `${timeValue} года`;
//     // }
//     // $("#timeInput").val(timeValue);
//     // $("#timeInput").change(function() {
//     //     $("#formSliderTime").slider("value", $(this).val());
//     // });
//     // $("#formSliderInvest").slider({
//     //     range: "min",
//     //     animate: true,
//     //     value: 30000,
//     //     min: 10000,
//     //     max: 500000,
//     //     step: 5000,
//     //     slide: function(event, ui) {
//     //         let debtValue = ui.value;
//     //         debtValue = numberWithCommas(debtValue);
//     //         $("#incomeInput").val(debtValue);
//     //     },
//     // });
//     // $("#incomeInput").val($("#formSliderInvest").slider("option", "value"));
//     // $("#incomeInput").change(function() {
//     //     $("#formSliderInvest").slider("value", $(this).val());
//     // });
//     // $("#formSliderInvest").slider({
//     //     range: "min",
//     //     animate: true,
//     //     value: 100000,
//     //     min: 0,
//     //     max: 400000,
//     //     step: 1000,
//     //     slide: function(event, ui) {
//     //         let debtValue = ui.value;
//     //         debtValue = numberWithCommas(debtValue);
//     //         $("#investInput").val(debtValue);
//     //     },
//     // });
//     // $("#investInput").val($("#formSliderInvest").slider("option", "value"));
//     // $("#investInput").change(function() {
//     //     $("#formSliderInvest").slider("value", $(this).val());
//     // });
// });
// function updateDatesOfInput() {
//     let yearInput = document.getElementById("sliderYearInput");
//     let updatedYear = yearInput.value;
//     updatedYear = updatedYear.replace(" года", "");
//     switch (updatedYear) {
//         case "0":
//             yearInput.value = "6 месяцев";
//             break;
//         case "1":
//             yearInput.value = "1 год";
//             break;
//         case "2":
//             yearInput.value = "2 года";
//             break;
//         case "3":
//             yearInput.value = "3 года";
//             break;
//         case "4":
//             yearInput.value = "4 года";
//             break;
//         default:
//             yearInput.value = `${yearInput.value} лет`;
//             break;
//     }
// }
// const userNameInput = document.getElementById("userName");
// const userPhoneInput = document.getElementById("userPhone");
// $(document).ready(function() {
//     $(".form-layout__submit").addClass("button--disabled");
//     $("#userName").keyup(function() {
//         if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
//             $(".form-layout__submit").removeClass("button--disabled");
//         }
//     });
//     $("#userPhone").keyup(function() {
//         if ($(this).val().length != 0 && $("#userName").val().length != 0) {
//             $(".form-layout__submit").removeClass("button--disabled");
//         }
//     });
// });
// // $(document).ready(function() {
// //     $("#formApply").submit(function() {
// //         if (!hasNumber($("#userName").val())) {
// //             $("#userName").addClass("input-warning");
// //             $(".form-layout__submit").addClass("button--disabled");
// //             console.log("Added");
// //         }
// //     });
// // });
// let buttonSubmit = document.getElementById("applyformSubmit");
// buttonSubmit.addEventListener("click", (event) => {
//     if (hasNumber(document.getElementById("userName").value)) {
//         document.getElementById("userName").classList.add("input-warning");
//         buttonSubmit.classList.add("button--disabled");
//         event.preventDefault();
//     } else {
//         window.location.href = "http://localhost:3000/ThankYou.html";
//     }
// });
// document.getElementById("formApply").addEventListener("submit", (event) => {
//     buttonSubmit.removeEventListener("click");
//     window.location.href = "http://localhost:3000/ThankYou.html";
// });
// function hasNumber(myString) {
//     return /\d/.test(myString);
// }
// // JQUERY TOUCH PATCH
// /*!
//  * jQuery UI Touch Punch 0.2.3
//  *
//  * Copyright 2011–2014, Dave Furfero
//  * Dual licensed under the MIT or GPL Version 2 licenses.
//  *
//  * Depends:
//  *  jquery.ui.widget.js
//  *  jquery.ui.mouse.js
//  */
// (function($) {
//     // Detect touch support
//     $.support.touch = "ontouchend" in document;
//     // Ignore browsers without touch support
//     if (!$.support.touch) {
//         return;
//     }
//     var mouseProto = $.ui.mouse.prototype,
//         _mouseInit = mouseProto._mouseInit,
//         _mouseDestroy = mouseProto._mouseDestroy,
//         touchHandled;
//     /**
//      * Simulate a mouse event based on a corresponding touch event
//      * @param {Object} event A touch event
//      * @param {String} simulatedType The corresponding mouse event
//      */
//     function simulateMouseEvent(event, simulatedType) {
//         // Ignore multi-touch events
//         if (event.originalEvent.touches.length > 1) {
//             return;
//         }
//         event.preventDefault();
//         var touch = event.originalEvent.changedTouches[0],
//             simulatedEvent = document.createEvent("MouseEvents");
//         // Initialize the simulated mouse event using the touch event's coordinates
//         simulatedEvent.initMouseEvent(
//             simulatedType, // type
//             true, // bubbles
//             true, // cancelable
//             window, // view
//             1, // detail
//             touch.screenX, // screenX
//             touch.screenY, // screenY
//             touch.clientX, // clientX
//             touch.clientY, // clientY
//             false, // ctrlKey
//             false, // altKey
//             false, // shiftKey
//             false, // metaKey
//             0, // button
//             null // relatedTarget
//         );
//         // Dispatch the simulated event to the target element
//         event.target.dispatchEvent(simulatedEvent);
//     }
//     /**
//      * Handle the jQuery UI widget's touchstart events
//      * @param {Object} event The widget element's touchstart event
//      */
//     mouseProto._touchStart = function(event) {
//         var self = this;
//         // Ignore the event if another widget is already being handled
//         if (
//             touchHandled ||
//             !self._mouseCapture(event.originalEvent.changedTouches[0])
//         ) {
//             return;
//         }
//         // Set the flag to prevent other widgets from inheriting the touch event
//         touchHandled = true;
//         // Track movement to determine if interaction was a click
//         self._touchMoved = false;
//         // Simulate the mouseover event
//         simulateMouseEvent(event, "mouseover");
//         // Simulate the mousemove event
//         simulateMouseEvent(event, "mousemove");
//         // Simulate the mousedown event
//         simulateMouseEvent(event, "mousedown");
//     };
//     /**
//      * Handle the jQuery UI widget's touchmove events
//      * @param {Object} event The document's touchmove event
//      */
//     mouseProto._touchMove = function(event) {
//         // Ignore event if not handled
//         if (!touchHandled) {
//             return;
//         }
//         // Interaction was not a click
//         this._touchMoved = true;
//         // Simulate the mousemove event
//         simulateMouseEvent(event, "mousemove");
//     };
//     /**
//      * Handle the jQuery UI widget's touchend events
//      * @param {Object} event The document's touchend event
//      */
//     mouseProto._touchEnd = function(event) {
//         // Ignore event if not handled
//         if (!touchHandled) {
//             return;
//         }
//         // Simulate the mouseup event
//         simulateMouseEvent(event, "mouseup");
//         // Simulate the mouseout event
//         simulateMouseEvent(event, "mouseout");
//         // If the touch interaction did not move, it should trigger a click
//         if (!this._touchMoved) {
//             // Simulate the click event
//             simulateMouseEvent(event, "click");
//         }
//         // Unset the flag to allow other widgets to inherit the touch event
//         touchHandled = false;
//     };
//     /**
//      * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
//      * This method extends the widget with bound touch event handlers that
//      * translate touch events to mouse events and pass them to the widget's
//      * original mouse event handling methods.
//      */
//     mouseProto._mouseInit = function() {
//         var self = this;
//         // Delegate the touch handlers to the widget's element
//         self.element.bind({
//             touchstart: $.proxy(self, "_touchStart"),
//             touchmove: $.proxy(self, "_touchMove"),
//             touchend: $.proxy(self, "_touchEnd"),
//         });
//         // Call the original $.ui.mouse init method
//         _mouseInit.call(self);
//     };
//     /**
//      * Remove the touch event handlers
//      */
//     mouseProto._mouseDestroy = function() {
//         var self = this;
//         // Delegate the touch handlers to the widget's element
//         self.element.unbind({
//             touchstart: $.proxy(self, "_touchStart"),
//             touchmove: $.proxy(self, "_touchMove"),
//             touchend: $.proxy(self, "_touchEnd"),
//         });
//         // Call the original $.ui.mouse destroy method
//         _mouseDestroy.call(self);
//     };
// })(jQuery);
// Form Logic
var initContainer = document.getElementById("initSlide");
var yesForm = document.getElementById("yesForm");
var noForm = document.getElementById("noform");
var toYesForm = document.getElementById("yesFormTrans");
var toNoForm = document.getElementById("noFormTrans");
var creditSlide = document.getElementById("creditSlide");
var sendSlide = document.getElementById("sendSlide");
var toInitSlide = document.getElementById("toInitSlide");
var toSendSlide = document.getElementById("toSendSlide");
var toCreditSlide = document.getElementById("toCreditSlide");
var toInitSlideFromNo = document.getElementById("toInitSlideFromNo");
var toCreditSlideFromNo = document.getElementById("toCreditSlideFromNo");
var typeSlide = document.getElementById("typeSlide");
var uncertainCreditSlide = document.getElementById("uncertainCreditSlide");
var toTypeSlide = document.getElementById("toTypeSlide");
var toUncertainSendSlide = document.getElementById("toUncertainSendSlide");
var uncertainSendSlide = document.getElementById("uncertainSendSlide");
var toUncertainCreditSlide = document.getElementById("toUncertainCreditSlide");
toYesForm.addEventListener("click", function () {
  yesForm.classList.toggle("js-hidden--Animated");
  initContainer.classList.toggle("js-hidden--Animated");
});
$(toYesForm).on("click", function () {
  $(window).scrollTop($("#yesForm").offset().top);
});
toNoForm.addEventListener("click", function () {
  noForm.classList.toggle("js-hidden--Animated");
  initContainer.classList.toggle("js-hidden--Animated");
});
$(toNoForm).on("click", function () {
  $(window).scrollTop($("#noform").offset().top);
});
toInitSlide.addEventListener("click", function () {
  yesForm.classList.toggle("js-hidden--Animated");
  initContainer.classList.toggle("js-hidden--Animated");
});
$(toInitSlide).on("click", function () {
  $(window).scrollTop($("#initSlide").offset().top);
});
toSendSlide.addEventListener("click", function () {
  sendSlide.classList.toggle("js-hidden--Animated");
  creditSlide.classList.toggle("js-hidden--Animated");
});
$(toSendSlide).on("click", function () {
  $(window).scrollTop($("#yesForm").offset().top);
});
toCreditSlide.addEventListener("click", function () {
  sendSlide.classList.toggle("js-hidden--Animated");
  creditSlide.classList.toggle("js-hidden--Animated");
});
$(toCreditSlide).on("click", function () {
  $(window).scrollTop($("#yesForm").offset().top);
});
toInitSlideFromNo.addEventListener("click", function () {
  initContainer.classList.toggle("js-hidden--Animated");
  noForm.classList.toggle("js-hidden--Animated");
});
$(toInitSlideFromNo).on("click", function () {
  $(window).scrollTop($("#initSlide").offset().top);
});
toCreditSlideFromNo.addEventListener("click", function () {
  typeSlide.classList.toggle("js-hidden--Animated");
  uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toCreditSlideFromNo).on("click", function () {
  $(window).scrollTop($("#noform").offset().top);
});
toTypeSlide.addEventListener("click", function () {
  typeSlide.classList.toggle("js-hidden--Animated");
  uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toTypeSlide).on("click", function () {
  $(window).scrollTop($("#noform").offset().top);
});
toUncertainSendSlide.addEventListener("click", function () {
  uncertainSendSlide.classList.toggle("js-hidden--Animated");
  uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toUncertainSendSlide).on("click", function () {
  $(window).scrollTop($("#noform").offset().top);
});
toUncertainCreditSlide.addEventListener("click", function () {
  uncertainSendSlide.classList.toggle("js-hidden--Animated");
  uncertainCreditSlide.classList.toggle("js-hidden--Animated");
});
$(toUncertainCreditSlide).on("click", function () {
  $(window).scrollTop($("#noform").offset().top);
});
$("#phone").inputmask();
$("#phoneUncertain").inputmask(); // Slide Logic

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

$(document).ready(function () {
  $("#sliderCredit").slider({
    range: "min",
    animate: true,
    value: 500000,
    min: 100000,
    max: 8000000,
    step: 10000,
    slide: function slide(event, ui) {
      var debtValue = ui.value;
      debtValue = numberWithCommas(debtValue);
      $("#sliderCreditInput").val("Сумма кредита: " + debtValue + " ₽");
    }
  });
  $("#sliderInvest").slider({
    range: "min",
    animate: true,
    value: 0,
    min: 0,
    max: 6400000,
    step: 10000,
    slide: function slide(event, ui) {
      var debtValue = ui.value;
      debtValue = numberWithCommas(debtValue);
      $("#sliderInvestInput").val("Первоначальный взнос: " + debtValue + " ₽");
    }
  });
});
var creditInput = document.getElementById("sliderCreditInput");
var valueCreditInput = creditInput.value;
creditInput.addEventListener("focusin", function () {
  creditInput.value = "";
});
creditInput.addEventListener("focusout", function () {
  if (!creditInput.value) {
    creditInput.value = valueCreditInput;
  } else {
    $("#sliderCredit").slider("option", "value", creditInput.value);
    var updatedCreditInput = numberWithCommas(creditInput.value);
    creditInput.value = "\u0421\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430: ".concat(updatedCreditInput, " \u20BD");
  }
});
var investInput = document.getElementById("sliderInvestInput");
var valueInvestInput = investInput.value;
investInput.addEventListener("focusin", function () {
  investInput.value = "";
});
investInput.addEventListener("focusout", function () {
  if (!investInput.value) {
    investInput.value = valueInvestInput;
  } else {
    $("#sliderInvest").slider("option", "value", investInput.value);
    var updatedInvestInput = numberWithCommas(investInput.value);
    investInput.value = "\u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441: ".concat(updatedInvestInput, " \u20BD");
  }
});
var pickerToggler = document.querySelector(".picker-display");
var pickerOptions = document.querySelector(".picker-display__options");
pickerToggler.addEventListener("click", function () {
  pickerOptions.classList.toggle("js-hidden--Animated");
});
document.addEventListener("mouseup", function (e) {
  if (!pickerToggler.contains(e.target)) {
    pickerOptions.classList.add("js-hidden--Animated");
  }
});
var options = document.querySelectorAll(".option");
options.forEach(function (option) {
  option.addEventListener("click", function () {
    uncheckOptions();
    option.classList.add("checked");
    document.getElementById("pickerTime").textContent = option.textContent;
    document.getElementById("timePicker").value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(option.textContent);
  });
});

function uncheckOptions() {
  options.forEach(function (option) {
    if (option.classList.contains("checked")) {
      option.classList.remove("checked");
    }
  });
}

function autoCheckOptions(attachedString) {
  uncheckOptions();
  options.forEach(function (option) {
    if (option.textContent.includes(attachedString)) {
      option.classList.add("checked");
    }
  });
}

var timeInput = document.getElementById("timePicker");
var valueTimeInput = timeInput.value;
timeInput.addEventListener("focusin", function () {
  timeInput.value = "";
});
timeInput.addEventListener("focusout", function () {
  if (!timeInput.value) {
    timeInput.value = valueTimeInput;
  } else {
    $("#sliderInvest").slider("option", "value", timeInput.value);
    var updatedTimeInput = numberWithCommas(timeInput.value);

    switch (updatedTimeInput) {
      case "1":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434");
        autoCheckOptions(updatedTimeInput);
        break;

      case "2":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "3":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "4":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTime").textContent = " ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "5":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "6":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "7":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "8":
        timeInput.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTime").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;
    }
  }
});
var radioLabels = document.querySelectorAll(".radio-label");
radioLabels.forEach(function (label) {
  label.addEventListener("click", function () {
    var labelValue = label.getAttribute("for");
    labelValue = labelValue.replace("Type", "");
    var imageToShow = document.getElementById(labelValue);
    hideAllImages();
    imageToShow.classList.toggle("js-hidden--Animated");
  });
});
var imagesToShow = document.querySelectorAll(".radio-image");

function hideAllImages() {
  imagesToShow.forEach(function (image) {
    if (!image.classList.contains("js-hidden--Animated")) {
      image.classList.add("js-hidden--Animated");
    }
  });
}

$(document).ready(function () {
  $("#sliderCreditUncertain").slider({
    range: "min",
    animate: true,
    value: 500000,
    min: 100000,
    max: 8000000,
    step: 10000,
    slide: function slide(event, ui) {
      var debtValue = ui.value;
      debtValue = numberWithCommas(debtValue);
      $("#sliderCreditInputUncertain").val("Желаемая cумма кредита: " + debtValue + " ₽");
    }
  });
  $("#sliderInvestUncertain").slider({
    range: "min",
    animate: true,
    value: 0,
    min: 0,
    max: 6400000,
    step: 10000,
    slide: function slide(event, ui) {
      var debtValue = ui.value;
      debtValue = numberWithCommas(debtValue);
      $("#sliderInvestInputUncertain").val("Первоначальный взнос: " + debtValue + " ₽");
    }
  });
});
var creditInputUncertain = document.getElementById("sliderCreditInputUncertain");
var valueCreditInputUncertain = creditInput.value;
creditInputUncertain.addEventListener("focusin", function () {
  creditInputUncertain.value = "";
});
creditInputUncertain.addEventListener("focusout", function () {
  if (!creditInputUncertain.value) {
    creditInputUncertain.value = valueCreditInputUncertain;
  } else {
    $("#sliderCreditUncertain").slider("option", "value", creditInputUncertain.value);
    var updatedCreditInput = numberWithCommas(creditInputUncertain.value);
    creditInputUncertain.value = "\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430: ".concat(updatedCreditInput, " \u20BD");
  }
});
var investInputUncertain = document.getElementById("sliderInvestInputUncertain");
var valueInvestInputUncertain = investInput.value;
investInputUncertain.addEventListener("focusin", function () {
  investInputUncertain.value = "";
});
investInputUncertain.addEventListener("focusout", function () {
  if (!investInputUncertain.value) {
    investInputUncertain.value = valueInvestInputUncertain;
  } else {
    $("#sliderInvestUncertain").slider("option", "value", investInputUncertain.value);
    var updatedInvestInput = numberWithCommas(investInputUncertain.value);
    investInputUncertain.value = "\u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441: ".concat(updatedInvestInput, " \u20BD");
  }
});
var pickerTogglerUncertain = document.querySelector(".display--uncertain");
var pickerOptionsUncertain = document.querySelector(".display__options--uncertain");
pickerTogglerUncertain.addEventListener("click", function () {
  pickerOptionsUncertain.classList.toggle("js-hidden--Animated");
});
document.addEventListener("mouseup", function (e) {
  if (!pickerTogglerUncertain.contains(e.target)) {
    pickerOptionsUncertain.classList.add("js-hidden--Animated");
  }
});
var optionsUncertain = document.querySelectorAll(".option--uncertain");
optionsUncertain.forEach(function (option) {
  option.addEventListener("click", function () {
    uncheckOptions();
    option.classList.add("checked");
    document.getElementById("pickerTimeUncertain").textContent = option.textContent;
    document.getElementById("timePickerUncertain").value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(option.textContent);
  });
});
var timeInputUncertain = document.getElementById("timePickerUncertain");
var valueTimeInputUncertain = timeInput.value;
timeInputUncertain.addEventListener("focusin", function () {
  timeInputUncertain.value = "";
});
timeInputUncertain.addEventListener("focusout", function () {
  if (!timeInputUncertain.value) {
    timeInputUncertain.value = valueTimeInputUncertain;
  } else {
    $("#sliderInvestUncertain").slider("option", "value", timeInputUncertain.value);
    var updatedTimeInput = numberWithCommas(timeInputUncertain.value);

    switch (updatedTimeInput) {
      case "1":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434");
        autoCheckOptions(updatedTimeInput);
        break;

      case "2":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "3":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "4":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        document.getElementById("pickerTimeUncertain").textContent = " ".concat(updatedTimeInput, " \u0433\u043E\u0434\u0430");
        autoCheckOptions(updatedTimeInput);
        break;

      case "5":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "6":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "7":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;

      case "8":
        timeInputUncertain.value = "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(updatedTimeInput, " \u043B\u0435\u0442");
        document.getElementById("pickerTimeUncertain").textContent = "".concat(updatedTimeInput, " \u043B\u0435\u0442");
        autoCheckOptions(updatedTimeInput);
        break;
    }
  }
});