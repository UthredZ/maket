new Choices('#model', {
    searchEnabled: false,
    itemSelectText: ''
})

new Choices('#color', {
    searchEnabled: false,
    itemSelectText: '',
});

$('#form-order').on('submit', function(event){
    event.preventDefault();

    $.ajax({
        url:'http://jsonplaceholder.typicode.com/posts' ,
        method: 'POST' ,
        dataType:'html',
        data: $('#from-order').serialize(),
        succes:function(data){
            console.log(data);
            $('#from-order').html('Спасибо! Ваша заявка успешно отправлена!');
            $('#from_submit').hide();
        }
    })
})