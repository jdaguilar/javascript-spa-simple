import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const clickButton = divElement.querySelector('#clickButton')
    clickButton.addEventListener('click', () => {
        alert('Clikeable!!')
    })

    return divElement
};