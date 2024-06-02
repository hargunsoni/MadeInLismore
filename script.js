function navigateTo(page) {
    window.location.href = page;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("Description")) {
        document.getElementById("Description").style.display = "block";
    }
});










//third page second try 
document.getElementById('buy-now').addEventListener('click', function() {
    // Navigate to the checkout page
    window.location.href = 'checkout.html';
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab to open
document.getElementById("Description").style.display = "block";


//fourth page 
document.getElementById('buy-now').addEventListener('click', function() {
    // Navigate to the checkout page
    window.location.href = 'checkout.html';
});

document.getElementById('checkout-button').addEventListener('click', function() {
    // Navigate to the checkout page
    window.location.href = 'checkout.html';
});

document.getElementById('my-cart').addEventListener('click', function() {
    // Navigate to the checkout page
    window.location.href = 'checkout.html';
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab to open
document.getElementById("Description").style.display = "block";

