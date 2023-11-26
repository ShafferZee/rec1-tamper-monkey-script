// ==UserScript==
// @name         rec1
// @namespace    https://secure.rec1.com/*
// @version      0.1
// @description  Clicks on specific elements on secure.rec1.com
// @author       ShafferZee
// @match        https://secure.rec1.com/*
// @match        http://localhost/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to get URL data
    function getData() {
        console.log('getting data');
        const urlParams = new URLSearchParams(window.location.search);
        const dataValue = urlParams.get('data');
        console.log('Value of ?data parameter:', dataValue);

        if (dataValue == 'don') {
            localStorage.setItem('email', '---@gmail.com');
            localStorage.setItem('pass', '---');
            localStorage.setItem('time', '07:00 PM');
        }
        if (dataValue == 'diem') {
            localStorage.setItem('email', '---@gmail.com');
            localStorage.setItem('pass', '---');
            localStorage.setItem('time', '08:00 PM');
        }
    }
    // Function to check for Login button
    function checkLoginButtonExists() {
        var targetElement = document.querySelector('.btn.btn-default.rec1-login-trigger.dropdown-toggle');

        if (targetElement) {
            console.log("Element exists!");
            return true;
        } else {
            console.log("Element does not exist!");
            return false;
        }
    }

    // Function to click Login/Create Account
    function clickLoginAccountButton() {
        var spans = document.getElementsByTagName('span');

        for (var i = 0; i < spans.length; i++) {
            if (spans[i].textContent.trim() === 'Log In/Create Account') {
                spans[i].click();
                console.log('Clicked on the element:', spans[i]);
                return;
            }
        }

        console.log('Element not found: <span>Court 1</span>');
    }

    // Function to enter in email credentials
    function enterEmail() {
        var inputField = document.getElementById('login-username');

        if (inputField) {
            inputField.value = localStorage.getItem('email');
            console.log('Entered in email address');
            return;
        }
    }

    // Function to enter in password credentials
    function enterPW() {
        var inputField = document.getElementById('login-password');

        if (inputField) {
            inputField.value = localStorage.getItem('pass');
            console.log('Entered in password');
            return;
        }
    }

    // Function to click the login button
    function clickLoginButton() {
        var loginButton = document.querySelector('.btn.btn-primary[data-icon="lock"]');

        if (loginButton) {
            loginButton.click();
            console.log('Clicked on the element:', loginButton);
            return;
        }
    }

    // Function to click on Facility Rentals
    function clickFacilityRentals() {
        var spans = document.getElementsByTagName('span');

        for (var i = 0; i < spans.length; i++) {
            if (spans[i].textContent.trim() === 'Facility Rentals') {
                spans[i].click();
                console.log('Clicked on the element:', spans[i]);
                return;
            }
        }

        console.log('Element not found: <span>Facility Rentals</span>');
    }

    // Function to click on Dragonfly Park Tennis Courts
    function clickDragonflyParkTennisCourts() {
        var divs = document.querySelectorAll('div.rec1-catalog-group-name.pull-left');

        for (var i = 0; i < divs.length; i++) {
            if (divs[i].textContent.includes('Dragonfly Park Tennis Courts')) {
                divs[i].click();
                console.log('Clicked on the element:', divs[i]);
                return;
            }
        }

        console.log('Element not found: Dragonfly Park Tennis Courts');
    }

    // Function to click on Court 1
    function clickCourt1() {
        var spans = document.getElementsByTagName('span');

        for (var i = 0; i < spans.length; i++) {
            if (spans[i].textContent.trim() === 'Court 1') {
                spans[i].click();
                console.log('Clicked on the element:', spans[i]);
                return;
            }
        }

        console.log('Element not found: <span>Court 1</span>');
    }

    // Function to check if adding 7 days to the current date results in the next month
    function isNextMonth() {
        const currentDate = new Date();
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 7);

        return nextDate.getMonth() !== currentDate.getMonth();
    }

    // Function to click on the specified element if next month
    function clickIfNextMonth() {
        const element = document.querySelector('.ui-icon.ui-icon-circle-triangle-e'); // Update the selector accordingly

        if (element && isNextMonth()) {
            element.click();
        }
    }

    // Function to click on the last <td> element with class "rec1-catalog-calendar-day-partial"
    function clickLastRec1CatalogCalendarDayPartial() {
        var tds = document.querySelectorAll('td.rec1-catalog-calendar-day-partial');

        if (tds.length > 0) {
            var lastTd = tds[tds.length - 1];
            lastTd.click();
            console.log('Clicked on the last element:', lastTd);
            return;
        }
        console.log('Element not found: <td class="rec1-catalog-calendar-day-partial">');
    }

    // Function to click on the last <td> element with class "rec1-catalog-calendar-day-available"
    function clickLastRec1CatalogCalendarDayAvailable() {
        var tds = document.querySelectorAll('td.rec1-catalog-calendar-day-available');

        if (tds.length > 0) {
            var lastTd = tds[tds.length - 1];
            lastTd.click();
            console.log('Clicked on the last element:', lastTd);
            return;
        }
        console.log('Element not found: <td class="rec1-catalog-calendar-day-available">');
    }

	// Function to click the dropdown time
	function clickDropdownTime() {
        var spans = document.getElementsByTagName('span');

        for (var i = 0; i < spans.length; i++) {
            if (spans[i].textContent.includes(':00')) {
                spans[i].click();
                console.log('Clicked on the element:', spans[i]);
                return;
            }
        }

        console.log('Element not found: <span> with :00');
    }

    // Function to click on the wanted time in the dropdown
    function checkWantedTime() {
        console.log('Checking for wanted time');
        var items = document.querySelectorAll('.selectmenu-item');

        for (var i = 0; i < items.length; i++) {
            if (items[i].textContent.includes(localStorage.getItem('time'))) {
                console.log('Found the element:', items[i]);
                return true
            }
        }

        console.log('Element not found: ', localStorage.getItem('time'));
        return false
    }

    // Function to click on the wanted time in the dropdown
    function clickWantedTime() {
        var items = document.querySelectorAll('.selectmenu-item');

        for (var i = 0; i < items.length; i++) {
            if (items[i].textContent.includes(localStorage.getItem('time'))) {
                items[i].click();
                console.log('Clicked on the element:', items[i]);
                return;
            }
        }

        console.log('Element not found: ', localStorage.getItem('time'));
    }

    // Function to click on Add To Cart
    function clickAddToCart() {
        var addToCartButton = document.querySelector('button.rec1-catalog-item-action[data-action="addToCart"][data-icon="cart-plus"]');

        if (addToCartButton) {
            addToCartButton.click();
            console.log('Clicked on the "Add To Cart" button');
        } else {
            console.log('Button not found: <button type="button" class="rec1-catalog-item-action btn btn-success" data-action="addToCart" data-icon="cart-plus"><i class="glyphicon flaticon-cart-plus"></i> <span>Add To Cart</span></button>');
        }
    }

	// Function to click on Checkout
	function clickCheckoutButton() {
		var checkoutButton = document.querySelector('a.btn.btn-primary.cart-checkout-button');

		if (checkoutButton) {
			checkoutButton.click();
			console.log('Clicked on the "Checkout" button');
		} else {
			console.log('Button not found: <a class="btn btn-primary cart-checkout-button"><i class="flaticon-cart-checkout"></i><span>Checkout</span></a>');
		}
	}

	// Function to check I Agree
    function checkCheckbox() {
        const checkbox = document.querySelector('input[name^="promptResponse[checkout]"]');
        if (checkbox) {
            checkbox.checked = true;
        }

        console.log('Check');
    }

    // Function to click Submit Responses
    function clickSubmitResponsesButton() {
        var submitButton = document.querySelector('button.btn.btn-success.btn-lg.checkout-continue-button');

        if (submitButton) {
            submitButton.click();
            console.log('Clicked on the "Submit Responses" button');
        } else {
            console.log('Button not found: <button class="btn btn-success btn-lg checkout-continue-button" data-target=".checkout-form" type="submit" data-icon-secondary="arrow-right2"><span>Submit Responses</span> <i class="glyphicon flaticon-arrow-right2"></i></button>');
        }
    }

    // Function to click Review Transaction
    // Needs rework?
    function clickReviewTransactionButton() {
        var reviewButton = $('button.btn.btn-success.btn-lg.checkout-continue-button[data-icon-secondary="arrow-right2"] span:contains("Review Transaction")');

        if (reviewButton.length > 0) {
            reviewButton.click();
            console.log('Clicked on the "Review Transaction" button');
        } else {
            console.log('Button not found: <button class="btn btn-success btn-lg checkout-continue-button" data-target=".checkout-form" type="submit" data-icon-secondary="arrow-right2"><span>Review Transaction</span> <i class="glyphicon flaticon-arrow-right2"></i></button>');
        }
    }

    // Function to click Complete Transaction
    // Needs rework?
    function clickCompleteTransactionButton() {
        var completeButton = $('button.btn.btn-success.btn-lg.checkout-continue-button[data-icon-secondary="arrow-right2"] span:contains("Complete Transaction")');

        if (completeButton.length > 0) {
            completeButton.click();
            console.log('Clicked on the "Complete Transaction" button');
        } else {
            console.log('Button not found: <button class="btn btn-success btn-lg checkout-continue-button" data-target=".checkout-form" type="submit" data-icon-secondary="arrow-right2"><span>Complete Transaction</span> <i class="glyphicon flaticon-arrow-right2"></i></button>');
        }
    }

    // Call the function when the page is fully loaded
    window.addEventListener('load', function() {
        function isCatalogPage() {
            return window.location.pathname.includes('/TX/Bridgeland-Community-Associations/catalog');
        }

        function isCheckoutPage() {
            return window.location.pathname.includes('TX/Bridgeland-Community-Associations/checkout/prompts');
        }

        function isPaymentPage() {
            return window.location.pathname.includes('/TX/Bridgeland-Community-Associations/checkout/payment');
        }

        function isConfirmPage() {
            return window.location.pathname.includes('/TX/Bridgeland-Community-Associations/checkout/confirm');
        }

        if (isCatalogPage() && checkLoginButtonExists()) {
            setTimeout(getData, 2000);
            setTimeout(clickLoginAccountButton, 4000);
            setTimeout(enterEmail, 5000);
            setTimeout(enterPW, 6000);
            setTimeout(clickLoginButton, 8000);
        }

        if (isCatalogPage() && !checkLoginButtonExists()) {
            setTimeout(clickFacilityRentals, 2000);
            setTimeout(clickDragonflyParkTennisCourts, 4000);
            setTimeout(clickCourt1, 6000);
            setTimeout(clickIfNextMonth, 7000);
            setTimeout(clickLastRec1CatalogCalendarDayPartial, 8000);
            setTimeout(clickLastRec1CatalogCalendarDayAvailable, 9000);
            setTimeout(clickDropdownTime, 10000);

            // Run checkWantedTime() after clickDropdownTime has executed
            setTimeout(function () {
                if (checkWantedTime()) {
                    setTimeout(clickWantedTime, 2000);
                    setTimeout(clickAddToCart, 4000);
                    setTimeout(clickCheckoutButton, 6000);
                } else {
                    return;
                }
            }, 12000);
        }

        if (isCheckoutPage()) {
            setTimeout(checkCheckbox, 2000);
            setTimeout(clickSubmitResponsesButton, 4000);
            setTimeout(clickReviewTransactionButton, 6000);
        }

        if (isPaymentPage()) {
            setTimeout(clickReviewTransactionButton, 2000);
        }

        if (isConfirmPage()) {
            setTimeout(clickCompleteTransactionButton, 2000);
        }
    });
})();
