let list = document.querySelectorAll('#p-Button');

list.forEach(function(e){
    e.addEventListener('click', function(){
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
    });
});

class Pop{
    setTotalContainer(e){
        let buttonContainer = e;
        while(!buttonContainer.classList.contains('p-Container')){
            buttonContainer = buttonContainer.parentElement;
        }
        return buttonContainer;
    }
    setPopContainer(e){
        let buttonContainer = this.setTotalContainer(e);
        // if(buttonContainer.querySelector('.p-Slim')){
        //     return buttonContainer.querySelector('.p-Slim');
        // }
        return buttonContainer.querySelector('.p-Content');
    }
    popSetAttributes(listclass){
        if(!listclass.contains('.p-Content-v')){
            listclass.add('p-Content-v');
            // if(listclass.contains('p-Slim')){
            //     listclass.add('p-Slim-v');
            // }
            // else if(listclass.contains('p-Content')){
            //     listclass.add('p-Content-v');
            // }
        }
        if(listclass.contains('p-Temp')){
            setTimeout(function(){
                listclass.remove('p-Content-v');
            }, 3500);
        }
    }
    popSetEvents(e, container){
        if(e.id == 'p-Close'){
            container.classList.remove('p-Content-v');
        }
        if(e.id == 'p-Submit'){
            let download = container.parentElement.querySelector('#p-download');
            download.value = container.querySelector('#p-overload').value;
            container.classList.remove('p-Content-v');
        }
        if(e.id == 'p-autoSubmit'){
            let download = container.parentElement.querySelector('#p-download');
            download.value = e.value;
            container.classList.remove('p-Content-v');
        }
        // if(e.id == 'p-outautoSubmit'){
        //     let download = container.parentElement.querySelector('#p-download');
        //     download.innerHTML = e.value;
        //     container.classList.remove('p-Content-v');
        // }
        if(e.id == 'p-outSubmit'){
            let download = container.parentElement.querySelector('#p-download');
            download.innerHTML = container.querySelector('#p-overload').value;
            container.classList.remove('p-Content-v');
        }
    }
}