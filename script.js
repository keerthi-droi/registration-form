$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#response').html(response);
            },
            error: function () {
                $('#response').html('<p style="color:red;">There was an error processing your request.</p>');
            }
        });
    });
});
