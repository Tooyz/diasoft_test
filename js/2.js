'use strict';

(() => {
    const $name = document.querySelector('[name="name"]'),
        $surname = document.querySelector('[name="surname"]'),
        $secondName = document.querySelector('[name="second_name"]'),
        $form = document.getElementById('person_form');

    $form.addEventListener('submit', (e) => {
        const name = $name.value.charAt(0).toUpperCase(),
            surname = $surname.value,
            secondName = $secondName.value.charAt(0).toUpperCase(),
            date = new Date().toLocaleDateString();
        alert(`Здравствуйте, ${surname} ${name}.${secondName}.! Сегодня ${date}`);
        e.preventDefault();
    });
})();