'use strict';

const model = {
    catsList: [{
        name: 'cat1',
        src: 'img/cat1.jpg',
        clicksCount: 0
    }, {
        name: 'cat2',
        src: 'img/cat2.jpg',
        clicksCount: 0
    }, {
        name: 'cat3',
        src: 'img/cat3.jpg',
        clicksCount: 0
    }, {
        name: 'cat4',
        src: 'img/cat4.jpg',
        clicksCount: 0
    }],
};



const controller = {
    init: () => {
        view.init();
    },
    getCats: () => {
        return model.catsList;
    }
};



const view = {
    init: () => {
        const list = document.querySelector('.list');
        const cats = controller.getCats();
        const catImg = document.getElementById('cat');
        const catName = document.querySelector('.cat-name');
        const clicks = document.querySelector('clicks');

        cats.forEach(element => {
            // Create the cats list menu
            const li = document.createElement('li');
            li.innerText = element.name;
            list.appendChild(li);

            // Change image on click
            li.addEventListener('click', () => {
                catImg.src = element.src;
                catImg.alt = element.src;
            });

            // Cat image event listener
            catImg.addEventListener('click', ((name) => {
                return function() {
                    catName.innerText = name;
                    console.log(name)
                }
            })(element.name));
        });
    },
};


controller.init();