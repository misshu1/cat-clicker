'use strict';

const model = {
    catsList: [{
        name: 'June',
        src: 'img/cat1.jpg',
        clicksCount: 0,
    }, {
        name: 'Jully',
        src: 'img/cat2.jpg',
        clicksCount: 0,
    }, {
        name: 'Johana',
        src: 'img/cat3.jpg',
        clicksCount: 0,
    }, {
        name: 'Julia',
        src: 'img/cat4.jpg',
        clicksCount: 0,
    }],
};



const controller = {
    init: () => {
        view.variables();
        view.init();
        view.render();
    },
    getCats: () => {
        return model.catsList;
    },
    counter(add) {
        add.clicksCount++;
    },
};



const view = {
    variables: () => {
        const list = document.querySelector('.list');
        const cats = controller.getCats();
        const catImg = document.querySelector('#cat');
        const catName = document.querySelector('.cat-name');
        const clicks = document.querySelector('.clicks');
        return {
            list: list,
            cats: cats,
            catImg: catImg,
            catName: catName,
            clicks: clicks,
        }
    },

    init: () => {
        const selector = view.variables();
        selector.cats.forEach(element => {
            // Create the cats list menu
            const li = document.createElement('li');
            li.innerText = element.name;
            selector.list.appendChild(li);

            // Change image on click
            li.addEventListener('click', () => {
                selector.catImg.src = element.src;
                selector.catImg.alt = element.src;
                selector.catName.innerText = element.name;
                selector.clicks.innerText = element.clicksCount;
            });
        });



    },

    render: () => {
        // Cat image event listener
        const selector = view.variables();
        selector.catImg.addEventListener('click', element => {
            for (let i = 0; i < selector.cats.length; i++) {
                if (element.target.getAttribute('src') === selector.cats[i].src) {
                    controller.counter(selector.cats[i]);
                    selector.clicks.innerText = selector.cats[i].clicksCount;
                };
            };
        });
    },
}

controller.init();