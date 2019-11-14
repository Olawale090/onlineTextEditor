// these codes is meant for the file tab menu

var file_button = document.querySelector('#file');
var back_to_page = document.querySelector('svg[id="file_back_to_page"]');

class file_tab {
    constructor() {
        // this.file_button = document.querySelector('.file');
        this.file_tab = document.querySelector('.file_tab');
        this.document_formats = document.querySelector('.document_formats');
    }

    show_file_tab() {
        this.file_tab.style.width = 15 + '%';
        this.file_tab.style.fontSize = 15 + 'px';
        this.file_tab.style.opacity = 1;
        this.document_formats.style.width = 75 + '%';
        this.document_formats.style.opacity = 1;
        this.document_formats.style.fontSize = 15 + 'px';
    }

    hide_file_tab() {
        this.file_tab.style.width = 0;
        this.file_tab.style.fontSize = 0;
        this.file_tab.style.opacity = 0;
        this.document_formats.style.width = 0;
        this.document_formats.style.opacity = 0;
        this.document_formats.style.fontSize = 0;
    }

    // new page method and switching the templates
    // open page method
    // save page method
    // save page as method
    // print page method
    // export page method
    // help page method
    // details about the present page or document

}

const file = new file_tab();


file_button.addEventListener('click', () => {
    file.show_file_tab();
}, false);

back_to_page.addEventListener('click', () => {
    file.hide_file_tab();
}, false);