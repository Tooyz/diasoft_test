(() => {
    const $birthday = document.querySelector('[name="birthday"]'),
        $form = document.getElementById('date_form');
    $form.addEventListener('submit', e=> {
        e.preventDefault();
        const ts = new Date($birthday.value),
            age = calculateAge(ts);
        if ( age < 18 && age > 0){
            alert('Заемщику менее 18 лет!');
        } else if ( age > 60 ){
            alert('Заемщику более 60 лет!');
        }
    });

    function calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday.getTime(),
            ageDate = new Date(ageDifMs);
        return ageDate.getUTCFullYear() - 1970;
    }
})();