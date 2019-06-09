$('#getAdvice').on('click', function () {
    $.ajax({
        method: 'GET',
        dataType: 'JSON',
        url: 'https://api.adviceslip.com/advice'
    }).done(
        function (data) {
            var result = '';
            console.log(data);
            result += '<p class="text-white"><i>"' + data.slip.advice + '"</i></p>';

            $('#favIcon').css('display', 'inline');
            $('#favText').css('display', 'inline');
            $('#result').html(result);

        }).always(function () {
            console.log('Always...');
        }).error(function () {
            console.log('Something went wrong!');
        });
})


$('#submit').on('click', function () {
    var firstname =
        $.ajax({
        method: 'GET',    
        dataType: 'JSON',
            url: 'database.json'
        }).done(
            function (data) {
                var user = $('#username').val();
                var password = $('#password').val();
                var userEntered = data.users[user];
                console.log(userEntered)
                if (userEntered != undefined) {
                    $('#username').removeClass('is-invalid')
                    if (password == data.users[user].password) {
                        $("#logIn").addClass('d-none')
                        var output = '';
                        for (let i = 0; i < userEntered.favorites.length; i++) {
                            var praf = userEntered.favorites[i].fav
                            console.log(praf)
                            output += '<p><i>-' + praf + '</i></p>'
                        }
                        console.log(output)
                        $('#output').html(output);

                    } else {
                        $('#password').addClass('is-invalid')
                    }
                } else {
                    $('#username').addClass('is-invalid')
                    $('#password').addClass('is-invalid')
                }



            })
})




