$('#getAdvice').on('click', function () {
    $.ajax({
        method: 'GET',
        dataType: 'JSON',
        url: 'https://api.adviceslip.com/advice'
    }).done(
        function (data) {
            var result = '';
            console.log(data);
            var advice = data.slip.advice
            result += '<p class="text-white"><i>"' + advice + '"</i></p>';

            $('#save').css('display', 'inline');
            $('#report').css('display', 'inline');

            $('#result').html(result);
            $('#save').prop("disabled", true);
            $('#save').removeAttr("disabled");
            $('#save').removeClass('disabled');
            $('#report').removeAttr("disabled");
            $('#report').removeClass('disabled');
            $('#thanks').css('display', 'none');
            $('#reportForm').css('display', 'none');

        }).always(function () {
            console.log('Always...');
        }).error(function () {
            console.log('Something went wrong!');
        });
})

$('#save').on('click', function () {
    $('#savedAdvices').css('display', 'inline');
    var advice = '<p><i>';
    advice += $('#result').text();
    advice += '</i></p>';
    console.log(advice);
    $('#showSaved').append(advice);
    $('#save').addClass('disabled');
    $('#save').attr('disabled', true);
})

$('#report').on('click', function () {
    $('#reportForm').css('display', 'block');

})

$('#sendReport').on('click', function () {
    adviceReported = $('#result').text();
    $('#reportForm').css('display', 'none');
    $('#report').addClass('disabled');
    $('#report').attr('disabled', true);
    $('#thanks').css('display', 'block');
    $('#reason').val('');
})