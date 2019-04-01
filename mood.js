window.onload = function() {
    const emoji = document.querySelector('div');
    emoji.innerText = store.getState().mood;

    document.querySelector('#sad').addEventListener('click', function(){
        store.dispatch({type: 'SAD'});
    })

    document.querySelector('#shy').addEventListener('click', function(){
        store.dispatch({type: 'SHY'});
    })

    /**
     * this runs after state change
     */

    store.subscribe(() => {
        let face = store.getState().mood;
        emoji.innerText = face;
    });

}