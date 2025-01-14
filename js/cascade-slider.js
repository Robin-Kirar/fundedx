// Based on a Pen by Russell *ttps://codepen.io/Pycb/pen/wWRrjg*
//Using jQuery 'Cascade Slider jQuery Plugin' by jqueryscript.net 'https://www.jqueryscript.net/demo/Minimal-3D-Image-Rotator-with-jQuery-CSS3-Cascade-Slider/'
;(function ($) {
  $.fn.cascadeSlider = function (opt) {
    var $this = this,
      itemClass = opt.itemClass || 'cascade-slider_item',
      $item = $this.find('.' + itemClass),
      itemCount = $item.length

    var defaultIndex = 0
    var autoRotateInterval = opt.autoRotateInterval || 3000 // Default 3 seconds

    // Initialize the slider
    changeIndex(defaultIndex)

    // Auto-rotate
    setInterval(function () {
      var nowIndex = $item.index($this.find('.now'))
      if (nowIndex === itemCount - 1) {
        changeIndex(0)
      } else {
        changeIndex(nowIndex + 1)
      }
    }, autoRotateInterval)

    function changeIndex(nowIndex) {
      // Clear all classes
      $this.find('.now').removeClass('now')
      $this.find('.next').removeClass('next')
      $this.find('.prev').removeClass('prev')

      if (nowIndex === itemCount - 1) {
        $item.eq(0).addClass('next')
      }
      if (nowIndex === 0) {
        $item.eq(itemCount - 1).addClass('prev')
      }

      $item.each(function (index) {
        if (index === nowIndex) {
          $item.eq(index).addClass('now')
        }
        if (index === nowIndex + 1) {
          $item.eq(index).addClass('next')
        }
        if (index === nowIndex - 1) {
          $item.eq(index).addClass('prev')
        }
      })
    }
  }
})(jQuery)

// Initialize the cascade slider
$('#cascade-slider').cascadeSlider({
  itemClass: 'cascade-slider_item',
  autoRotateInterval: 5000, // 3 seconds (adjust as needed)
})
