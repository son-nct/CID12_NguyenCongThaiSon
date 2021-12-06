class Clock {
  // dấu $ là biến dùng để khởi tạo các element trong html
  $container;
  $time;
  $btnStart;
  $btnPause;
  $btnStop;

  seconds;
  timeInterval;

  constructor() {
    // khởi tạo container có class là clock
    this.$container = document.createElement("div");
    this.$container.classList.add("clock");

    //khởi tạo elemnent time
    this.$time = document.createElement("span");
    this.$time.classList.add("time");
    this.$time.innerHTML = "00 : 00";

    // khởi tạo elemnt btn
    this.$btnStart = document.createElement("button");
    this.$btnStart.classList.add("clock__btnStart");
    this.$btnStart.innerHTML = "Start";

    this.$btnPause = document.createElement("button");
    this.$btnPause.classList.add("clock__btnPause");
    this.$btnPause.innerHTML = "Pause";

    this.$btnStop = document.createElement("button");
    this.$btnStop.classList.add("clock__btnStop");
    this.$btnStop.innerHTML = "Stop";

    //khởi tạo evt click cho từng btn
    this.$btnStart.addEventListener("click", this.start);
    this.$btnPause.addEventListener("click", this.pause);
    this.$btnStop.addEventListener("click", this.stop);

    // khởi tạo giá trị ban đầu cho biến js
    this.seconds = 0;
    this.timeInterval = null;
  }

  render() {
    this.$container.appendChild(this.$time);
    this.$container.appendChild(this.$btnStart);
    this.$container.appendChild(this.$btnPause);
    this.$container.appendChild(this.$btnStop);

    return this.$container;
  }

  start = () => {

    this.timeInterval = setInterval(() => {
      this.seconds++;
      this.updateTime();
    }, 1000);
  };

  pause = () => {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  };

  stop = () => {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
    this.seconds = 0;
    this.updateTime();
  };

  updateTime = () => {
    const m = Math.floor(this.seconds / 60);
    const s = Math.floor(this.seconds % 60);

    this.$time.innerHTML = m + " : " + s;
  };


  
}
