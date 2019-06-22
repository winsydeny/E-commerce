/**
 * touchstart
 * touchmove
 * touchend
 *
 * question:
 * 出现了当手触摸到屏幕的时候scroll的left被删除了(为了消除transition对我们的影响),当我们在一次移动的时候会继续出来回到它应该在的位置
 *
 *
 * TODO：
 * 1. speed:根据手滑动的快慢与时间的关系来决定即将在触发end的时候它继续移动的距离
 *
 *
 *
 * tips：左边就是指的屏幕的左边
 */

const Tomove = (target, scroll) => {
  target.addEventListener("touchstart", start, true);
  // 总scroll的长度
  const scrollWidth = scroll.clientWidth;

  const targetWidth = target.scrollWidth;
  //scrollBar
  const scrollBar = scroll.children[0];
  // 刚开始时的距离
  let startClient = null;
  let dist = null;
  //上一次的距离左边的距离
  let lastLeft = null;
  //

  let lastScrollBar = null;
  //开始接触
  function start(e) {
    // console.log(scroll.children[0]);
    // 上一次target的位置距离
    lastLeft = target.offsetLeft;

    lastScrollBar = scrollBar.style.left;

    //cancel last transition in css3
    target.classList.remove("animate-move");
    scrollBar.classList.remove("animate-move");

    // 开始位置
    startClient = e.targetTouches[0].clientX;
    target.addEventListener("touchmove", move, true);
    target.addEventListener("touchend", end, true);
  }
  //移动中
  function move(e) {
    const touch = e.targetTouches[0];
    const t = e.target;
    // 移动的距离
    dist = startClient - touch.clientX - lastLeft;
    // scrollbar移动的距离
    let scroll_dist = (dist * scrollWidth) / targetWidth;

    scroll.children[0].style.left = `${scroll_dist}px`;
    target.style.left = `${-dist}px`;
  }
  //离开屏幕
  function end(e) {
    const boundaryLeft = target.offsetLeft;
    const boundaryRight = target.clientWidth / 2 + boundaryLeft;

    target.classList.add("animate-move");
    scrollBar.classList.add("animate-move");

    if (boundaryLeft >= 0) {
      target.style.left = "0";
      scrollBar.style.left = "0";
    }
    if (boundaryRight <= 0) {
      target.style.left = "-" + target.clientWidth / 2 + "px";
      scrollBar.style.left = scrollWidth - scrollBar.clientWidth + "px";
    }
  }
};

export default Tomove;
