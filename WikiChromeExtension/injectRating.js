/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 12/12/12
 * Time: 15:54
 * To change this template use File | Settings | File Templates.
 */

var captions = ["Easy", "Normal", "Difficult"];
var dataToSubmit = [];

$("#mw-content-text > p").each(function(index, p){
    var i, ratingString = '<form id="ratingForm_' + index + '" class="ratingContainer">',
        starname = "star_" + index;

    for(i=0; i<3; i++)
    {
        ratingString += '<input name="' + starname + '" type="radio" value=' + (i+1) + ' class="star" title="' + captions[i] +'"/>';
    }
    ratingString += '<div id="ratingCaption_"' + index + '></div></form>';

    $(this).after(ratingString);
    $(this).css('margin-top', '1.5em');

    $("#ratingForm_" + index).ajaxForm({
        beforeSubmit: function(formData, jqForm, options){
            var queryString = $.param(formData);
            alert('About to submit: \n\n' + queryString);
            return true;
        },

        success: function(responseText, statusText, xhr, $form){
            $("#ratingForm_" + index).disable();
        }
    })
});

$("input.star").rating({
    required: true,
    callback: function(value){
        var index = $(this).attr("name").split("_")[1];

    }
});