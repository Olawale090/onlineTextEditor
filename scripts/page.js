class homePanel {
    constructor() {
        // main page
        this.page = document.getElementById('page');

        //button list
        this.bold = document.getElementById('boldBtn');
        this.italic = document.getElementById("italicBtn");
        this.underline = document.getElementById("underlineBtn");
        this.strikethrough = document.getElementById("strikeBtn");
        this.subscript = document.getElementById("subscriptBtn");
        this.superscript = document.getElementById("superscriptBtn");
        this.bold = document.getElementById('boldBtn');
        this.italic = document.getElementById("italicBtn");
        this.underline = document.getElementById("underlineBtn");
        this.strikethrough = document.getElementById("strikeBtn");
        this.subscript = document.getElementById("subscriptBtn");
        this.superscript = document.getElementById("superscriptBtn");
        this.alignRight = document.getElementById("alignRight");
        this.alignCenter = document.getElementById("alignCenter");
        this.alignLeft = document.getElementById("alignLeft");
        this.justify = document.getElementById("justify");
    }

    // Page design mode
    design() {
        this.page.contentDocument.designMode = 'On';
        this.page.contentEditable = true;
    }

    edit(command) {
        this.page.contentDocument.execCommand(command, false, null);
    }

    setPage() {
        this.page.addEventListener('load', () => {
            homePanelEdit.design();
        }, false);
    }

}

var homePanelEdit = new homePanel();
homePanelEdit.setPage();


class homePanelButtons extends homePanel {
    constructor() {
        super();
    }

    boldText() {
        this.bold.addEventListener('click', () => {
            homePanelEdit.edit('bold');
        }, false);
    }

    italize() {
        this.italic.addEventListener('click', () => {
            homePanelEdit.edit('italic');
        }, false);
    }

    underlineText() {
        this.underline.addEventListener('click', () => {
            homePanelEdit.edit('underline');
        }, false);
    }

    strikeThrough() {
        this.strikethrough.addEventListener('click', () => {
            homePanelEdit.edit('strikeThrough');
        }, false);
    }

    subscriptText() {
        this.subscript.addEventListener('click', () => {
            homePanelEdit.edit('subscript');
        }, false);
    }

    superscriptText() {
        this.superscript.addEventListener('click', () => {
            homePanelEdit.edit('superscript');
        }, false);
    }

    alignLeftText() {
        this.alignLeft.addEventListener('click', () => {
            homePanelEdit.edit('justifyLeft');
        }, false);
    }

    alignCenterText() {
        this.alignCenter.addEventListener('click', () => {
            homePanelEdit.edit('justifyCenter');
        }, false);
    }

    alignRightText() {
        this.alignRight.addEventListener('click', () => {
            homePanelEdit.edit('justfyRight');
        }, false);
    }

    justifyText() {
        this.justify.addEventListener('click', () => {
            homePanelEdit.edit('justifyFull');
            alert("justified");
        }, false);
    }
}

var homeButtons = new homePanelButtons();
homeButtons.boldText();
homeButtons.italize();
homeButtons.underlineText();
homeButtons.strikeThrough();
homeButtons.subscriptText();
homeButtons.superscriptText();
homeButtons.alignCenterText();
homeButtons.alignRightText();
homeButtons.alignLeftText();
homeButtons.justifyText();



import { add } from './mainJs.js';

//alert(add(6, 7));                                                                                                                                             1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwb  