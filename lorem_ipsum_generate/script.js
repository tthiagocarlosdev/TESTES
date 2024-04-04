$(document).ready(function()
	{
		$('#default').BaconIpsum();
		$('#custom').BaconIpsum({ type:'all-meat', paras:5, start_with_lorem:false });
		$('#one-sentence').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, sentences:1 });
		$('#no-tags').BaconIpsum({ type:'meat-and-filler', start_with_lorem:true, paras:1, no_tags: true });
	});