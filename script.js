document.getElementById('giftBox').addEventListener('click', function() {
    var lid = document.querySelector('.lid');
    lid.style.animation = 'lidOpen 1s forwards';

    setTimeout(function() {
        var message = document.getElementById('message');
        message.style.display = 'block';
        message.style.animation = 'fadeIn 2s forwards';
    }, 1000);
});