// main page
let page = document.querySelector('.paper');

//button list


class homePanel {
    constructor() {
        this.error = "error message is for your advantage";
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
        this.fontName = document.querySelector(".fontName");
        this.fontColorBtn = document.querySelector(".colortemplate");
        this.fontSize = document.querySelector(".fontsize");
        this.bulletBtn = document.querySelector(".unorderedList");
        this.bulletNumBtn = document.querySelector(".orderedList");
        this.paragraphBtn = document.querySelector(".paragraph");
        this.forecolor = document.querySelector(".forecolor");
        this.copyBtn = document.querySelector(".copy");
        this.cutBtn = document.querySelector(".cut");
        this.pasteBtn = document.querySelector(".paste");
        this.lineheight = document.querySelector('.setLineheight');
        // this.lineBreak = document.querySelector('.setLineheight');

    }

    // Page design mode
    design() {
        iframe.document.designMode = 'On';
        // console.log(iframe.value);
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

    appload() {
        window.addEventListener('load', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('fontSize', 3);
            this.fontName.value = 'Calibri';
            this.fontSize.value = 3;
            iframe.document.body.style.lineHeight = 2;
        }, false);
    }

    boldText() {
        this.bold.addEventListener('click', () => {
            homePanelEdit.edit('bold');
        }, false);
    }

    italize() {
        this.italic.addEventListener('click', () => {
            homePanelEdit.edit('italic');
            document.querySelector('#italicBtn').style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    underlineText() {
        this.underline.addEventListener('click', () => {
            homePanelEdit.edit('underline');
            document.querySelector('#underlineBtn').style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    strikeThrough() {
        this.strikethrough.addEventListener('click', () => {
            homePanelEdit.edit('strikeThrough');
            document.querySelector('#strikeBtn ').style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    subscriptText() {
        this.subscript.addEventListener('click', () => {
            homePanelEdit.edit('subscript');
            this.subscript.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    superscriptText() {
        this.superscript.addEventListener('click', () => {
            homePanelEdit.edit('superscript');
            this.superscript.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    alignLeftText() {
        this.alignLeft.addEventListener('click', () => {
            homePanelEdit.edit('justifyLeft');
            this.alignLeft.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    alignCenterText() {
        this.alignCenter.addEventListener('click', () => {
            homePanelEdit.edit('justifyCenter');
            this.alignCenter.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    alignRightText() {
        this.alignRight.addEventListener('click', () => {
            homePanelEdit.edit('justifyRight');
            this.alignRight.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    justifyText() {
        this.justify.addEventListener('click', () => {
            homePanelEdit.edit('justifyFull');
            this.justify.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    textFontName() {
        this.fontName.addEventListener('change', () => {
            homePanelEdit.editArgs('fontName', this.fontName.value);
        }, false);
    }

    fontColor() {
        this.fontColorBtn.addEventListener('change', () => {
            homePanelEdit.editArgs('foreColor', this.fontColorBtn.value);
        }, false);
    }

    textFontSize() {
        this.fontSize.addEventListener('change', () => {
            homePanelEdit.editArgs('fontSize', this.fontSize.value);
        }, false);
    }

    paragraph() {
        this.paragraphBtn.addEventListener('click', () => {
            homePanelEdit.edit('insertParagraph');
            this.paragraphBtn.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    backgroundColor() {
        this.forecolor.addEventListener('change', () => {
            homePanelEdit.editArgs('backColor', this.forecolor.value);
        }, false);
    }


    bullet() {
        try {
            this.bulletBtn.addEventListener('click', () => {
                homePanelEdit.editArgs('insertUnorderedList');
                iframe.document.body.style.lineHeight = 2;
                this.bulletBtn.style.backgroundColor = 'rgb(231, 229, 229)';
            }, false);
        } catch (error) {
            alert(error);
        }

    }


    numbering() {
        try {
            this.bulletNumBtn.addEventListener('click', () => {
                homePanelEdit.edit('insertOrderedList');
                this.bulletNumBtn.style.backgroundColor = 'rgb(231, 229, 229)';
            }, false);
        } catch (error) {
            alert(error);
        }

    }

    copyText() {
        this.copyBtn.addEventListener('click', () => {
            homePanelEdit.edit('copy');
            document.querySelector('#copy').style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }

    cutText() {
        try {
            this.cutBtn.addEventListener('click', () => {
                homePanelEdit.edit('cut');
                this.cutBtn.style.backgroundColor = 'rgb(231, 229, 229)';
            }, false);
        } catch (error) {
            alert(error);
        }
    }

    pasteText() {
        try {
            this.pasteBtn.addEventListener('click', () => {
                homePanelEdit.edit('insertHTML');
                this.pasteBtn.style.backgroundColor = 'rgb(231, 229, 229)';
            }, false);
        } catch (error) {
            alert(error);
        }

    }

    lineheightText() {
        this.lineheight.addEventListener('click', () => {
            homePanelEdit.edit('insertLineBreak');
            this.lineheight.style.backgroundColor = 'rgb(231, 229, 229)';
        }, false);
    }
}


var homeButtons = new homePanelButtons();
homeButtons.appload();
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


class styles extends homePanelButtons {
    constructor() {
        super();

        this.normalStyleBtn = document.querySelector('#normal');
        this.nospacingStyleBtn = document.querySelector('#nospacing');
        this.heading1StyleBtn = document.querySelector('#heading1');
        this.heading2StyleBtn = document.querySelector('#heading2');
        this.titleStyleBtn = document.querySelector('#title');
        this.subtitleStyleBtn = document.querySelector('#subtitle');
        this.subtleStyleBtn = document.querySelector('#subtle');
        this.mainEmphasis = document.querySelector('#mainemphasis');
        this.intenseEmphasisBtn = document.querySelector('#intenseemphasis');
        this.strongBtn = document.querySelector('#strong');
    }

    normal() {
        this.normalStyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('foreColor', 'black');
            homePanelEdit.editArgs('fontSize', 4);
            this.fontSize.value = 4;
            this.fontName.value = 'Calibri';
        }, false);
    }

    heading1() {
        this.heading1StyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('fontSize', 8);
            homePanelEdit.editArgs('foreColor', 'rgb(84, 137, 235)');
            this.fontSize.value = 8;
            this.fontName.value = 'Calibri';
        }, false);
    }

    heading2() {
        this.heading2StyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('fontSize', 6);
            homePanelEdit.editArgs('foreColor', 'rgb(84, 137, 235)');
            this.fontSize.value = 6;
            this.fontName.value = 'Calibri';
        }, false);
    }

    title() {
        this.titleStyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('fontSize', 6);
            homePanelEdit.editArgs('foreColor', 'black');
            homePanelEdit.edit('justifyLeft');
            this.fontSize.value = 6;
            this.fontName.value = 'Calibri';

        }, false);
    }

    subtitle() {
        this.subtitleStyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontName', 'Calibri');
            homePanelEdit.editArgs('fontSize', 3);
            homePanelEdit.editArgs('foreColor', 'gray');
            this.fontSize.value = 3;
            this.fontName.value = 'Calibri';

        }, false);
    }

    subtle() {
        this.subtleStyleBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontSize', 3);
            homePanelEdit.edit('italic');
            homePanelEdit.editArgs('foreColor', 'gray');
            this.fontSize.value = 3;
            this.fontName.value = 'Calibri';
        }, false);
    }

    emphasis() {
        this.mainEmphasis.addEventListener('click', () => {
            homePanelEdit.editArgs('fontSize', 3);
            homePanelEdit.edit('italic');
            homePanelEdit.editArgs('foreColor', 'black');
            this.fontSize.value = 3;
            this.fontName.value = 'Calibri';
        }, false);
    }

    intenseEmphasis() {
        this.intenseEmphasisBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('fontSize', 3);
            homePanelEdit.edit('italic');
            homePanelEdit.editArgs('foreColor', 'rgb(84, 137, 235)');
            this.fontSize.value = 3;
            this.fontName.value = 'Calibri';
        }, false);
    }

    strong() {
        this.strongBtn.addEventListener('click', () => {
            homePanelEdit.editArgs('foreColor', 'black');
            homePanelEdit.editArgs('fontSize', 3);
            homePanelEdit.edit('bold');
            document.querySelector('svg[id="boldBtn"]').style.backgroundColor = 'rgb(231, 229, 229)';
            this.fontSize.value = 3;
            this.fontName.value = 'Calibri';
        }, false);
    }

}

let styleMethods = new styles();

styleMethods.heading1();
styleMethods.heading2();
styleMethods.normal();
styleMethods.title();
styleMethods.subtitle();
styleMethods.subtle();
styleMethods.emphasis();
styleMethods.intenseEmphasis();
styleMethods.strong();