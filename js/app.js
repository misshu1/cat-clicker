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
    variables: () => {
        const list = document.querySelector('.list');
        const cats = controller.getCats();
        const catImg = document.querySelector('#cat');
        const catName = document.querySelector('.cat-name');
        const clicks = document.querySelector('.clicks');
        const button = document.querySelector('.button');
        const admin = document.querySelector('.admin');
        const submit = document.querySelector('.submit');
        return {
            list: list,
            cats: cats,
            catImg: catImg,
            catName: catName,
            clicks: clicks,
            button: button,
            admin: admin,
            submit: submit,
        }
    },
    init: () => {
        controller.variables();
        view.init();
        view.render();
        view.admin();
    },
    getCats: () => {
        return model.catsList;
    },
    counter(add) {
        add.clicksCount++;
    },
};



const view = {
    init: () => {
        const selector = controller.variables();
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
        const selector = controller.variables();
        selector.catImg.addEventListener('click', element => {
            for (let i = 0; i < selector.cats.length; i++) {
                if (element.target.getAttribute('src') === selector.cats[i].src) {
                    controller.counter(selector.cats[i]);
                    selector.clicks.innerText = selector.cats[i].clicksCount;
                };
            };
        });
    },
    admin: () => {
        // Change the cat image, name and clicks from admin menu
        const selector = controller.variables();
        const div = document.createElement('div');
        div.innerHTML = `<fieldset>
        <legend align="right">Admin</legend>
        <div class="center">
            <div class="input-label">
                <p><label for="name">Cat Name</label></p>
                <p> <label for="url">Img URL</label></p>
                <p><label for="clicks-count">Clicks</label></p>
            </div>
            <div class="input-text">
                <p> <input type="text" name="Cat Name" id="name" style="width: 100%"></p>
                <p> <input type="text" name="Img URL" id="url" style="width: 100%"></p>
                <p> <input type="number" name="Clicks" id="clicks-count" style="width: 100%"></p>
            </div>
        </div>
        <div class="sub"><button class="cancel">Cancel</button><button class="submit">Submit</button>
        </div>
    </fieldset>`;

        selector.button.addEventListener('click', () => {
            selector.admin.insertAdjacentElement('afterbegin', div);
            const cancel = document.querySelector('.cancel');
            cancel.addEventListener('click', () => {
                selector.admin.innerHTML = '';
            });
        });
    },
}

controller.init();