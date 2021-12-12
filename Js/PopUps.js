let list = document.querySelectorAll('#popButton');

list.forEach(function(e){
    e.addEventListener('click', function(){
        let desingPop = new DesignPop(e);
        let content = desingPop.setContainer(e);
        
        content.classList.add('popUp-Content-r');

        desingPop.popSetAttributes(content.classList);
        content.addEventListener('click', function(e){
            desingPop.popSetEvents(e.target, content);
        });
        if(content.querySelector('#overload')){
            content.querySelector('#overload').value = "";
        }
    });
});

class DesignPop{
    constructor(e) {
        this.e = e;
    }
    
    setTotalContainer(e){
        let buttonContainer = e;
        while(!buttonContainer.classList.contains('popUp-Container')){
            buttonContainer = buttonContainer.parentElement;
        }
        return buttonContainer;
    }

    setContainer(e){
        let buttonContainer = this.setTotalContainer(e);
        return buttonContainer.querySelector('.popUp-Content');
    }

    popSetAttributes(listclass){
        if(listclass.contains('popUp-center')){
            listclass.add('popUp-Content-center');
        }
    }

    popSetEvents(e, container){
        if((e.classList.contains('popUp-Content') || e.id == 'close') && !e.classList.contains('Unclose')){
            container.classList.remove('popUp-Content-r');
        }
        else if(e.id == 'submit'){
            let download = container.parentElement.querySelector('#download');
            download.value = container.querySelector('#overload').value;
            container.classList.remove('popUp-Content-r');
        }
        else if(e.id == 'autoSubmit'){
            let download = container.parentElement.querySelector('#download');
            download.value = e.value;
            container.classList.remove('popUp-Content-r');
        }
        else if(e.id == 'outautoSubmit'){
            let download = container.parentElement.querySelector('#download');
            download.innerHTML = e.value;
            container.classList.remove('popUp-Content-r');
        }
        else if(e.id == 'outSubmit'){
            let download = container.parentElement.querySelector('#download');
            download.innerHTML = container.querySelector('#overload').value;
            container.classList.remove('popUp-Content-r');
        }
    }
}
