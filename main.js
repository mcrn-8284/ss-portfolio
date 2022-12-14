let counter, addBtn;
let n;

// function addCount() {
//     n ++;
//     counter.innerHTML = n;
// }
window.addEventListener("load", ()=> {
    counter = document.getElementById("counter");
    // addBtn = document.getElementById("addBtn");
    n = 0;
    addBtn.addEventListener("click", addCount);
});







// <--------------   サイドメニューのopen, close関数     -------------------->

function openMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const openBtn = document.querySelector('#openBtn');
    sideMenu.classList.toggle('open');
    sideMenu.classList.remove('close');
    openBtn.classList.toggle('hide');
    openBtn.classList.remove('show');
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const openBtn = document.querySelector('#openBtn');
    sideMenu.classList.remove('open');
    sideMenu.classList.toggle('close');
    openBtn.classList.toggle('show');
    openBtn.classList.remove('hide');
    // sideMenu.classList.toggle('close');
    // sideMenu.classList.remove('open');
};

// <--------------   レストランタイプの画像配列と切り替え処理     -------------------->
let restaurant_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/restaurant-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/restaurant-wing.jpg"]
);

function restaurantChangeImg(c) {
    
    const pikminImg = document.getElementsByClassName('restaurantPikminImg');
    if (pikminImg[c].getAttribute('src') == restaurant_pic_srcs[c][0]) {
        pikminImg[c].src = restaurant_pic_srcs[c][1];
        n ++;
    } else if (pikminImg[c].getAttribute('src') == restaurant_pic_srcs[c][1]) {
        pikminImg[c].src = restaurant_pic_srcs[c][0];
        n --;
    }

    counter.innerHTML = n;
}


// <--------------   カフェタイプの画像配列と切り替え処理の関数     -------------------->
let cafe_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/cafe-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/cafe-wing.jpg"]
);
function cafeChangeImg(c) {
    
    const pikminImg = document.getElementsByClassName('cafePikminImg');
    if (pikminImg[c].getAttribute('src') == cafe_pic_srcs[c][0]) {
        pikminImg[c].src = cafe_pic_srcs[c][1];
        n ++;
    } else if (pikminImg[c].getAttribute('src') == cafe_pic_srcs[c][1]) {
        pikminImg[c].src = cafe_pic_srcs[c][0];
        n --;
    }

    counter.innerHTML = n;
}

// <--------------   薬局タイプの画像配列と切り替え処理     -------------------->
let pharmacy_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/pharmacy-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/pharmacy-wing.jpg"]
);
function pharmacyChangeImg(c) {
    
    const pikminImg = document.getElementsByClassName('pharmacyPikminImg');
    if (pikminImg[c].getAttribute('src') == pharmacy_pic_srcs[c][0]) {
        pikminImg[c].src = pharmacy_pic_srcs[c][1];
        n ++;
    } else if (pikminImg[c].getAttribute('src') == pharmacy_pic_srcs[c][1]) {
        pikminImg[c].src = pharmacy_pic_srcs[c][0];
        n --;
    }
    counter.innerHTML = n;

}

// <--------------   水辺タイプの画像配列と切り替え処理     -------------------->
let river_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/river-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/river-wing.jpg"]
);
function riverChangeImg(c) {
    
    const pikminImg = document.getElementsByClassName('riverPikminImg');
    if (pikminImg[c].getAttribute('src') == river_pic_srcs[c][0]) {
        pikminImg[c].src = river_pic_srcs[c][1];
        n ++;
    } else if (pikminImg[c].getAttribute('src') == river_pic_srcs[c][1]) {
        pikminImg[c].src = river_pic_srcs[c][0];
        n --;
    }
    counter.innerHTML = n;
    
}

// <--------------   公園タイプの画像配列と切り替え処理     -------------------->
let park_pic_srcs = new Array(
    ["image/not-have-pikmin.jpg", "image/have-pikmins/park-red.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-yellow.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-blue.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-white.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-purple.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-rock.jpg"],
    ["image/not-have-pikmin.jpg","image/have-pikmins/park-wing.jpg"]
);
function parkChangeImg(c) {
    
    const pikminImg = document.getElementsByClassName('parkPikminImg');
    if (pikminImg[c].getAttribute('src') == park_pic_srcs[c][0]) {
        pikminImg[c].src = park_pic_srcs[c][1];
        n ++;
    } else if (pikminImg[c].getAttribute('src') == park_pic_srcs[c][1]) {
        pikminImg[c].src = park_pic_srcs[c][0];
        n --;
    }
    counter.innerHTML = n;
    
}

