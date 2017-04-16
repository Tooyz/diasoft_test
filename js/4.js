(() => {
    const $checkbox = document.getElementById('married'),
        $partnerBlock = document.getElementById('partner_block');
    $checkbox.addEventListener('change', function() {
        const val = this.checked;
        [].slice.call($partnerBlock.children)
            .forEach(($e)=>(val?$e.removeAttribute('hidden'):$e.setAttribute('hidden', 'true')));
    });
})();