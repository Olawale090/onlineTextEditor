"use strict";
// Tab list
var home = document.getElementById('home');
var insert = document.getElementById('insert');
const design = document.getElementById('design');

// Tray list
var homeTray = document.getElementById('homeTray');
var insertTray = document.getElementById('insertTray');
var designTray = document.getElementById('designTray');


// simple testRunning


class menuTab {
    constructor() {
        // Tab menu list
        this.home = document.getElementById('home');
        this.insert = document.getElementById('insert');
        this.design = document.getElementById('design');

        // menu tray list
        this.homeTray = document.getElementById('homeTray');
        this.insertTray = document.getElementById('insertTray');
        this.designTray = document.getElementById('designTray');
    }

    openHome() {
        this.homeTray.style.display = "block";
        this.insertTray.style.display = "none";
        this.designTray.style.display = "none";
    }

    openInsert() {
        this.insertTray.style.display = "block";
        this.homeTray.style.display = "none";
        this.designTray.style.display = "none";
    }

    openDesignTab() {
        this.designTray.style.display = "block";
        this.homeTray.style.display = "none"
        this.insertTray.style.display = "none";
    }


    menuSelect(target) {
        target.style.paddingTop = 3 + "px";
        target.style.height = 80 + '%';
        target.style.zIndex = 8;
        target.style.paddingBottom = 2 + "px";
        target.style.border = `solid ${1}px gray`;
        target.style.borderBottom = "none";
        target.style.backgroundColor = "white";
    }

    menuHide(target) {
        target.style.paddingTop = 3 + "px";
        target.style.paddingBottom = 2 + "px";
        target.style.border = "none";
    }

    exec() {
        alert('Operation succesful');
    }
}


var testing = new menuTab();

window.addEventListener('load', () => {
    testing.menuSelect(home);
}, false);

home.addEventListener('click', () => {
    testing.openHome();
    testing.menuSelect(home);
    testing.menuHide(insert);
}, false);

insert.addEventListener('click', () => {
    testing.openInsert();
    testing.menuSelect(insert);
    testing.menuHide(home);
    testing.menuHide(design);
}, false);

design.addEventListener('click', () => {
    testing.openDesignTab();
    testing.menuSelect(design);
    testing.menuHide(home);
    testing.menuHide(insert);
}, false);


export function add(a, b) {
    return a + b;
}