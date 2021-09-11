(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"category-new-product-support-news.html":"A list of posts in category &ldquo;New Product Support News&rdquo;","trpfrd-episode-two-hand-traps-and-floodgates.html":"￼\n\nIn this episode we discuss the prevalence of floodgates and hand traps in the current meta, their effectiveness and competitiveness in the current ","category-combos.html":"A list of posts in category &ldquo;Combos&rdquo;","archive-september-2021.html":"Archives for September 2021","category-podcasts.html":"A list of posts in category &ldquo;Podcasts&rdquo;","category-tutorials.html":"A list of posts in category &ldquo;Tutorials&rdquo;","synchro-eldlich-in-2021-combos-and-deck-profiles.html":"￼\n\nAn in-depth look at what Synchro Eldlich looks like in 2021 post Jet Synchron\/O-Lion\/Linkross ban. The deck still has a decent amount of consistenc","category-videos.html":"A list of posts in category &ldquo;Videos&rdquo;","trpfrd-episode-1-new-dark-magician-support.html":"￼\n\nIn this episode we discuss some of the latest cards that have fallen or risen in price over the last few weeks with our market watch segment, takin","category-apple.html":"A list of posts in category &ldquo;Apple&rdquo;","category-deck-porfiles.html":"A list of posts in category &ldquo;Deck Porfiles&rdquo;","category-work.html":"A list of posts in category &ldquo;Work&rdquo;","category-humor.html":"A list of posts in category &ldquo;Humor&rdquo;","category-deck-profiles.html":"A list of posts in category &ldquo;Deck Profiles&rdquo;","category-personal.html":"A list of posts in category &ldquo;Personal&rdquo;"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();