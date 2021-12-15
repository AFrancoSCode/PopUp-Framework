let list = document.querySelectorAll('#p-Button');

list.forEach(function(e){
    e.addEventListener('click', function(){
        let pop = new Pop();
        pop.initializePop(e);
        // initializePop(e);
    });
});

class Pop{    
    
    initializePop(e){
        let pop = new Pop();
        let content = pop.setTotalContainer(e);
        let contentPop = pop.setPopContainer(e);
    
        pop.popSetAttributes(contentPop.classList);
    
        contentPop.addEventListener('click', function(e){
            pop.popSetEvents(e.target, contentPop);
        });
        if(content.querySelector('#p-overload')){
            content.querySelector('#p-overload').value = "";
        }
    }    

    setTotalContainer(e){
        let buttonContainer = e;
        while(!buttonContainer.classList.contains('p-Container')){
            buttonContainer = buttonContainer.parentElement;
        }
        return buttonContainer;
    }
    setPopContainer(e){
        let buttonContainer = this.setTotalContainer(e);
        return buttonContainer.querySelector('.p-Content');
    }
    popSetAttributes(listclass){
        if(!listclass.contains('.p-Content-v')){
            listclass.add('p-Content-v');
        }
        if(listclass.contains('.p-Content-v')){

        }
    }
    popSetEvents(e, container){
        if(e.getAttribute('closepop') != null){
            this.close(container);
        }
        if(e.id == 'p-Submit'){
            let download = container.parentElement.querySelector('#p-download');
            download.value = container.querySelector('#p-overload').value;
            this.close(container);
        }
        if(e.id == 'p-autoSubmit'){
            let download = container.parentElement.querySelector('#p-download');
            download.value = e.value;
            this.close(container);
        }
        if(e.id == 'p-outSubmit'){
            let download = container.parentElement.querySelector('#p-download');
            download.innerHTML = container.querySelector('#p-overload').value;
            this.close(container);
        }
    }

    close(container){
        if(container.classList.contains('p-Animation')){
            container.classList.add('p-Animation-r');
            setTimeout(function(){
                container.classList.remove('p-Content-v');
                container.classList.remove('p-Animation-r');
            }, 300);
        }
        else{
            container.classList.remove('p-Content-v');
        }
    }
}

setTimeout(function(){
    let pop = new Pop();
    pop.initializePop(document.querySelector('#p-offhand'));
}, 3000);

// window.addEventListener('click',
//     function(){
//     let pop = new Pop();
//     pop.initializePop(document.querySelector('#p-offhand'));
//     }
// );