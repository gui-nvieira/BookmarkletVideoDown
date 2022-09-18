javascript:
(window.location.href.indexOf("youtube.com") > -1 || window.location.href.indexOf("youtu.be") > -1) ?
    function(){window.location.href = "https://deturl.com/?url=" + window.location.href}()
    : 
    (window.location.href.indexOf("reddit.com") > -1) ?
    (function(){window.location.href = "https://redditsave.com/info?url=" + window.location.href})()
    :
    (window.location.href.indexOf("twitter.com") > -1 ) ? 
    (function(){window.location.href = "https://www.savetweetvid.com/downloader?url=" + window.location.href})()
    :  
    (window.location.href.indexOf("vidmax.com") > -1 ) ?
    (function(){window.location.href = "https://9xbuddy.org/process?url=" + window.location.href})()
    :   
    (window.location.href.indexOf("liveleak.com") > -1 ) ?
    (function(){window.location.href = "https://www.tubeoffline.com/downloadFrom.php?host=LiveLeak&video=https%3A%2F%2F" + window.location.href})()
    :   
    (window.location.href.indexOf("dailymotion.com") > -1 ) ?
    (function(){window.location.href = "https://dmvideo.download/?url=" + window.location.href})()
    :
    (window.location.href.indexOf("metacafe.com") > -1 ) ?
    (function(){window.location.href = "https://keepv.id/?url=" + window.location.href})()
    :
    (window.location.href.indexOf("facebook.com") > -1 ) ?
    (function(){window.location.href=window.location.href.replace('www.facebook','mbasic.facebook')})()
    :
    (function(){window.location.href = "https://www.savethevideo.com/pt/home?url=" + window.location.href})();
