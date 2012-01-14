(function($) {
    function parse(feed, container) {
        if (feed.entries.length > 0) {
            $(feed.entries).each(function(key, entry){
                var author = entry.author;
                var title = entry.title;
                var link = entry.link;
                var content = entry.contentSnippet;
                //convert special chars and remove unnecessary "   ..." from content
                var description = $('<a />').html(content).text().trim().replace(new RegExp("[\n ]+...$"),'')

                var li_entry = $('<li />').text(title)
                var div_entry = $('<a />').append(li_entry)
                div_entry.attr('href', link);
                div_entry.attr('target', '_blank');
                div_entry.attr('title', description);
                $(container).append(div_entry);
            });
        }
    }

    $.fn.extend({
        activities:
            function(options) {
                var defaults = {
                    'username':'bernardofire',
                }

                return this.each(function() {
                    var container = $(this)
                    $.ajax({
                        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://github.com/' + defaults.username + '.atom'),
                        async: true,
                        dataType: 'json',
                        success: function(data) {
                            parse(data.responseData.feed, container);
                        }
                    });
                });
        }
    });
})(jQuery);
