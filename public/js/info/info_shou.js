/**
 * Created by Administrator on 2016/12/20 0020.
 */

$('.info-one').on('tap', function(){
    var $self = $(this);
    if($self.hasClass('active-info')){
        console.log('up');
        $self.removeClass('active-info').addClass('info-one');
    } else{
        console.log('down');
        $self.removeClass('info-one').addClass('active-info');
    }
});
