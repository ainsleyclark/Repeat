/**
 * repeater.js
 * All custom JS for repeater block stored here.
 * @author Ainsley Clark
 * @author URL:   https://www.reddico.co.uk
 * @author Email: ainsley@reddico.co.uk
 */

/**
 * Global Variables
 */
let template,
    addButton,
    removeButton;

/**
 * Repeater Constructor
 * @param options
 * @constructor
 */
function Repeater(options) {

    template = options.template;
    addButton = document.querySelector(options.addButton);
    removeButton = document.querySelector(options.removeButton);

    if (template === '' || template === null || template === undefined) {
        console.error('Repeater: Template not defined');
    }

    // if (addButton === null) {
    //     console.error('Repeater: Add button is not defined');
    // }
    //
    // if (removeButton === null) {
    //     console.error('Repeater: Remove button is not defined');
    // }
}

Repeater.prototype.getValues = function() {



};



const repeater = new Repeater({
    template: 'jjj',
    addButton: '.repeater-add',
    removeButton: '.repeater-remove'
});

function repeaterInit() {

    console.log(Repeater.template);
    let addBtn = document.querySelectorAll('.repeater-add');

    addBtn.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();

            let template = `
                 <tr class="repeater-field">
                    <td class="repeater-number">
                        <div class="d-flex justify-content-center repeater-number-cont">
                            1
                        </div>
                    </td>
                    <td class="repeater-input">
                        <div class="input-cont">
                            <input type="text">
                        </div>
                    </td>
                    <td class="repeater-action repeater-remove">
                        <i class="material-icons">remove_circle_outline</i>
                    </td>
                </tr>`;

            let container = document.querySelector(btn.getAttribute('data-repeater')),
                el = htmlToElements(template)[1];

            removeBlock(el);

            container.parentElement.insertBefore(el, container);

            updateNumber();

        });
    });
};

/**
 *
 */
let removeBlock = (el) => {
    let btn = el.querySelector('.repeater-remove');
    btn.addEventListener('click', event => {
        event.preventDefault();
        btn.closest('.repeater-field').remove();
        updateNumber();
    });
};

/**
 *
 */
let updateNumber = () => {
    let fields = document.querySelectorAll('.repeater-field');

    fields.forEach((field, index) => {
        let test = Array.from(field.parentNode.children).indexOf(field);
        let number = field.querySelector('.repeater-number-cont');
        number.innerHTML = test;
    });
};


/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
let htmlToElements = (html) => {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


