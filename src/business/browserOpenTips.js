function _closeEvent() {
    _close();
}

function _initEvents(remove) {
    var closeDoms = document.getElementsByClassName('feopen-close');
    for (var i = 0, len = closeDoms.length; i < len; i++) {
        remove ? closeDoms[i].removeEventListener('click', _closeEvent, false) :
            closeDoms[i].addEventListener('click', _closeEvent, false);
    }
}

function _open(contentHtml) {
    var maskDiv = document.createElement('div');
    maskDiv.className = "feopen_mask"
    maskDiv.style.position = 'fixed';
    maskDiv.style.opacity = '.6';
    maskDiv.style.background = "#f6f6f6";
    maskDiv.style.width = '100%';
    maskDiv.style.top = '0';
    maskDiv.style.bottom = '0';
    maskDiv.style.left = '0';
    maskDiv.style.zIndex = '1000';

    var contentDiv = document.createElement('div');
    contentDiv.className = "feopen_content";
    contentDiv.style.position = 'absolute';
    contentDiv.style.zIndex = '1001';
    contentDiv.style.top = '0';
    contentDiv.style.left = '0';
    var template = '<button class="feopen-close">Close</button>';
    if(contentHtml){
        if(/^#/.test(contentHtml)){
            //contentHtml表示template Id
            template =  document.querySelector(contentHtml).innerHTML;
        }else{
            template = contentHtml;
        }
    }
    contentDiv.innerHTML = template;

    document.body.appendChild(maskDiv);
    document.body.appendChild(contentDiv);
    _initEvents();
}

function _close() {
    _initEvents(true);
    var contentDivs = document.getElementsByClassName('feopen_content');
    for (var i = 0, len = contentDivs.length; i < len; i++) {
        document.body.removeChild(contentDivs[i]);
    }
    var maskDivs = document.getElementsByClassName('feopen_mask');
    for (var i = 0, len = maskDivs.length; i < len; i++) {
        document.body.removeChild(maskDivs[i]);
    }
}
module.exports.open = _open;
module.exports.close = _close;