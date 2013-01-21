    <div class="box-social" > 
<!-- AddThis Button BEGIN -->

<a class="addthis_button_facebook_like" fb:like:layout="box_count" addthis:url="<?php the_permalink(); ?>"></a>
<a class="addthis_button_tweet" tw:count="vertical" addthis:url="<?php the_permalink(); ?>" addthis:title="<?php the_title(); ?>" ></a>
<a class="addthis_button_google_plusone" g:plusone:size="tall"></a>
<a class="addthis_counter"></a>

    </div>

	
<?php 
function the_permalink()
{
echo "";
}
function the_title()
{
echo "";
}
function the_content()
{
echo "";
}
?>



 		function append_social_plugin(){
// Init addthis
			
				var script = 'http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-50f0d339351ee0af';
				if (window.addthis){
				    window.addthis = null;
				}
				$.getScript( script, function(){ addthis.init(); } );
				

		}
		
		
		function getBlockSingle(id,urlPath){
    if(typeof(window.history.pushState) == "undefined"){
        window.location = urlPath;
    }else{
        if(id != "" && id>0){
            var randomnumber=Math.floor(Math.random()*11);
            prikaziSpinner2();
            $.ajax({
                type: 'POST',
                url: 'getPostById.php?'+randomnumber,
                data: { article_id: id},
                success: function( data ) {
			
append_social_plugin();//social network box changer via Ajax Addthis
 $('#article').html(data);
						
			
                    ukloniSpinner2();

                    window.history.pushState("somedata","", urlPath);
                }
            });
        }
    }
}