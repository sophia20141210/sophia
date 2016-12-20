/**
 * Created by Administrator on 2016/12/16 0016.
 */
$('.end_one').on('tap', function(){
    var $self = $(this);
    var $end_text=$('.one')
    if($self.hasClass('active_one')){
        $self.removeClass('active_one').addClass('end_one');
        $(".end_texts").addClass('one');
    } else{
        $self.removeClass('end_one').addClass('active_one');
        $(".end_texts").removeClass('one');
    }
});