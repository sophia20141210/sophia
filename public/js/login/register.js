/**
 * Created by Administrator on 2016/12/16 0016.
 */
var $selectTitle = $('.form-cell-input');
var $selectList = $('.select-list');
$selectTitle.on('tap', function(){
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function(){
    var $self = $(this);
    var $parent = $self.parent('.select-list');
    var text = $self.text();
    var val = $self.data('val');
    console.log(text, val);
    $parent.siblings('.form-cell-input').text(text).data('val', val);
    $parent.hide();
});
