// main page
let page = document.querySelector('.paper');

//button list
let bold = document.getElementById('boldBtn');
let italic = document.getElementById("italicBtn");
let underline = document.getElementById("underlineBtn");
let strikethrough = document.getElementById("strikeBtn");
let subscript = document.getElementById("subscriptBtn");
let superscript = document.getElementById("superscriptBtn");
let alignRight = document.getElementById("alignRight");
let alignCenter = document.getElementById("alignCenter");
let alignLeft = document.getElementById("alignLeft");
let justify = document.getElementById("justify");
let fontName = document.querySelector(".fontName");
let fontColorBtn = document.querySelector(".colortemplate");
let fontSize = document.querySelector(".fontsize");
let bulletBtn = document.querySelector(".unorderedList");
let bulletNumBtn = document.querySelector(".orderedList");
let paragraphBtn = document.querySelector(".paragraph");
let forecolor = document.querySelector(".forecolor");
let copyBtn = document.querySelector(".copy");
let cutBtn = document.querySelector(".cut");
let pasteBtn = document.querySelector(".paste");




class homePanel {
    constructor() {
        this.error = "error message is for your advantage";

    }

    // Page design mode
    design() {
        iframe.document.designMode = 'On';
        console.log(iframe.value);
    }

    edit(command) {
        page.contentDocument.execCommand(command, false, null);
    }

    editArgs(command, data) {
        page.contentDocument.execCommand(command, false, data);
    }

    setPage() {

        homePanelEdit.design();

    }

}

var homePanelEdit = new homePanel();
homePanelEdit.setPage();

class homePanelButtons extends homePanel {
    constructor() {
        super();
    }

    boldText() {
        bold.addEventListener('click', () => {
            homePanelEdit.edit('bold');
        }, false);
    }

    italize() {
        italic.addEventListener('click', () => {
            homePanelEdit.edit('italic');
        }, false);
    }

    underlineText() {
        underline.addEventListener('click', () => {
            homePanelEdit.edit('underline');
        }, false);
    }

    strikeThrough() {
        strikethrough.addEventListener('click', () => {
            homePanelEdit.edit('strikeThrough');
        }, false);
    }

    subscriptText() {
        subscript.addEventListener('click', () => {
            homePanelEdit.edit('subscript');
        }, false);
    }

    superscriptText() {
        superscript.addEventListener('click', () => {
            homePanelEdit.edit('superscript');
        }, false);
    }

    alignLeftText() {
        alignLeft.addEventListener('click', () => {
            homePanelEdit.edit('justifyLeft');
        }, false);
    }

    alignCenterText() {
        alignCenter.addEventListener('click', () => {
            homePanelEdit.edit('justifyCenter');
        }, false);
    }

    alignRightText() {
        alignRight.addEventListener('click', () => {
            homePanelEdit.edit('justifyRight');
        }, false);
    }

    justifyText() {
        justify.addEventListener('click', () => {
            homePanelEdit.edit('justifyFull');
        }, false);
    }

    textFontName() {
        fontName.addEventListener('change', () => {
            homePanelEdit.editArgs('fontName', fontName.value);
        }, false);
    }

    fontColor() {
        fontColorBtn.addEventListener('change', () => {
            homePanelEdit.editArgs('foreColor', fontColorBtn.value);
        }, false);
    }

    textFontSize() {
        fontSize.addEventListener('change', () => {
            homePanelEdit.editArgs('fontSize', fontSize.value + "pt");
        }, false);
    }

    paragraph() {
        paragraphBtn.addEventListener('click', () => {
            homePanelEdit.edit('insertParagraph');
        }, false);
    }

    backgroundColor() {
        forecolor.addEventListener('change', () => {
            homePanelEdit.editArgs('backColor', forecolor.value);
        }, false);
    }


    bullet() {
        try {
            bulletBtn.addEventListener('click', () => {
                homePanelEdit.edit('insertUnorderedList');
            }, false);
        } catch (error) {
            alert(error);
        }

    }


    numbering() {
        try {
            bulletNumBtn.addEventListener('click', () => {
                homePanelEdit.edit('insertOrderedList');
            }, false);
        } catch (error) {
            alert(error);
        }

    }

    copyText() {
        copyBtn.addEventListener('click', () => {
            homePanelEdit.edit('copy');
        }, false);
    }

    cutText() {
        cutBtn.addEventListener('click', () => {
            homePanelEdit.edit('cut');
        }, false);
    }

    pasteText() {
        pasteBtn.addEventListener('click', () => {
            homePanelEdit.edit('paste');
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
homeButtons.textFontName();
homeButtons.textFontSize();
homeButtons.fontColor();
homeButtons.bullet();
homeButtons.numbering();
homeButtons.paragraph();
homeButtons.backgroundColor();
homeButtons.copyText();
homeButtons.cutText();
homeButtons.pasteText();



import { add } from './mainJs.js';

alert(add(6, 7));

// (function() {
//     // iframe.document.designMode = 'On';
//     page.contentEditable = true;
// })()

// page.addEventListener('selectstart', () => {
//     alert("text selected");
// }, false);