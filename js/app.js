const name_input = document.querySelector('#input-name');
const start_screen = document.querySelector('#start-screen');

const getGameInfo=() =>  JSON.parse(localStorage.getItem('game'));



const init = () =>{


    const game = getGameInfo();

    document.querySelector('#btn-continue').style.display = game ? 'grid' : 'none';

}

init();