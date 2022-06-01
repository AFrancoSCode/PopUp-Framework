class Modal{
    expose(container){
        this.closeElements(container);
        container.classList.add("p-Animation");
        container.classList.add("c-Modal-v");
    }

    setProperties(container){
        // Establecer botones de cierre
        let modalExit = container.querySelectorAll('.Modal-exit');
        modalExit.forEach((e) => {
            e.innerHTML = '✕';
            e.setAttribute("close", "");
        });
        // Establecer ancho maximo
        let modalSize = container.querySelector('.Modal[size]');
        if(modalSize !== null){
            modalSize.setAttribute("style", `max-width:${modalSize.getAttribute('size')}px`);
        }
    }

    closeElements(container){
        let elem = container.querySelectorAll('[close]');
        elem.forEach((elemClose) => {
            elemClose.addEventListener('click', (e) => {
                if(e.target.getAttribute('close') !== null){
                    container.classList.add('p-Animation-r');
                    setTimeout(function(){
                        container.classList.remove('p-Animation-r');
                        container.classList.remove('p-Animation');
                        container.classList.remove('c-Modal-v');
                    }, 300);
                }
            });
        });
    }
}

let modalListAccioner = document.querySelectorAll('.a-Modal');
const modal = new Modal;
modalListAccioner.forEach((button) => {
    const container = document.querySelector(`#${button.id}.c-Modal`)
    modal.setProperties(container);
    button.addEventListener('click', () => {
        modal.expose(container);
    });
});