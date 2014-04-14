function loadBanner(){
	$("#adContainerBanner").slideUp(1000);
		setTimeout(function(){
			//<![CDATA[
			LSM_Slot({
				site: '232101',
				adkey: '4cb',
				ad_size: '728x90',
				slot: 'slot94923',
				_render_div_id: 'adContainerBanner'
			});
		},1000);
		//]]>
	setTimeout(function(){$("#adContainerBanner").slideDown(1000);},5000);
};

function loadFullscreen(){
			//<![CDATA[
			LSM_Slot({
				site: '232101',
				adkey: '05d',
				ad_size: '720x300',
				slot: 'slot94944',
				_render_div_id: 'adContainerFullscreen'
			});
		//]]>
	$("#adContainerFullscreen").slideDown(1000);
	setTimeout(function(){$("#adContainerFullscreen").slideUp(1000);},5000);
};
