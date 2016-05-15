/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict
	
	var embedObjects = {
		"Idea": {
			width: 400,
			height: 400,
			src: "IDEA/build/Idea/ideav3.swf",
			base: "IDEA/build/Idea/",
			title: "Idea",
			description: "A simple 2d action game."
		}
	}
	
	function embedSWFString(src, width, height, base){
		//return "<embed src='"+src+"' width='"+width+"' height='"+height+"' base='"+base+"' />";
		
		//parameter of the swf
		var params="<param name='movie' value='"+src+"'/>\n";
		params+="<param name='base' value='"+base+"'/>\n";
		params+="<param name='codebase' value='"+base+"'/>\n";
		params+="<param name='allowNetworking' value='all'/>\n";
		params+="<param name='allowScriptAccess' value='always'/>\n";
		params+="<param name='menu' value='false'/>\n";
		
		//normal
		var str="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='"+width+"' height='"+height+"'>\n";
		str+=params;
		
		//handling for ie
		str+="<!--[if !IE]>-->\n";
		str+="<object type='application/x-shockwave-flash' data='"+src+"' width='"+width+"' height='"+height+"'>\n";
			str+=params;
			str+="<!--<![endif]-->\n";
			
			//in case they don't have flash
			str+="<a href='http://www.adobe.com/go/getflash'>\n";
			str+="<img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'/>\n";
			str+="</a>\n";
			
			//more ie handling
		str+="<!--[if !IE]>-->\n";
			str+="</object>\n";
		str+="<!--<![endif]-->\n";
		
		//end
		str+="</object>\n";


		return str;
	}
	
	function embedObject(id) {
		var obj = embedObjects[id];
		if (!obj) {
			return unEmbed();
		}
		var embedTarget = $('#embedTarget');
		embedTarget.html(embedSWFString(obj.src, obj.width, obj.height, obj.base));
		$('#embedTitle').html(obj.title);
		embedTarget.width(obj.width);
		$('#embedParagraph').html(obj.description);
		var demoSection = $('#demo');
		demoSection.removeClass("hidden");
		$('html, body').stop().animate({
            scrollTop: (demoSection.offset().top - 50)
        }, 1250, 'easeInOutExpo');
	}
	
	function unEmbed() {
		var embedTarget = $('#embedTarget');
		embedTarget.html("");
		$('#embedTitle').html("");
		$('#embedParagraph').html("");
		$('#demo').addClass("hidden");
	}
	
	function getURLHash() {
		var url = window.location.href;
		var idx = url.lastIndexOf("#");
		if (idx == -1) {
			return "";
		}
		return url.substr(idx + 1);
	}

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
	
    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
	var hash = getURLHash();
	if (embedObjects[hash]){
		embedObject(hash);
	}

})(jQuery); // End of use strict


