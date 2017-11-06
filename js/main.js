$(document).ready(function(){

  let controller = new ScrollMagic.Controller();

  $('.trans-element').each(function(){
    let stackScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: .90,
      reverse: false
    })
    .setClassToggle(this, 'fade-in')
    // .addIndicators({
    //   name: 'stack visibility',
    //   colorTrigger: 'black',
    //   colorStart: '#2c9117',
    //   colorEnd: '#b01515'
    // })
    .addTo(controller);

    })
})
