$(document).ready(function () {
    // 向き
    var sides = ["left", "top", "right", "bottom"];
 
    // サイドバーの初期化
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({side: cSide});
    }
 
    // ボタンのクリックにより...
    $(".btn[data-action]").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
        return false;
    });
});

$(document).on('click',function(e) {
    if(!$(e.target).closest('.sidebar.left').length) {
      // ターゲット要素外をクリックした時の操作
      var $this = $(".btn[data-action]");
      var action = $this.attr("data-action");
      var side = $this.attr("data-side");
      $(".sidebar." + side).trigger("sidebar:" + action);
      return false;
    } else {
      // ターゲット要素をクリックした時の操作
      
    }
 });