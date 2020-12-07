<template>
  <div>
    <div class="bbox">
      <div class="box"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
    <div class="shoppingcart" id="shoppingcart">
      <a class="shoppingcart_btn">
        <i class="icon-shoppingcart"></i>
        <span>购物车</span>
      </a>
    </div>
    <div class="dv" id="dv"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.isdary("dv");
    this.isdary("shoppingcart");

    $.fn.extend({
      lzhDrag: function (obj) {
        let max_left =
            $(this).offsetParent().outerWidth() - $(this).outerWidth(),
          max_top =
            $(this).offsetParent().outerHeight() - $(this).outerHeight();
        $(this).on("mousedown", (event) => {
          let ele_x = event.offsetX,
            ele_y = event.offsetY;
          obj.startDown && obj.startDown();
          $(document).on("mousemove", (e) => {
            obj.startMove && obj.startMove();
            e.preventDefault();
            let left = e.clientX - ele_x,
              top = e.clientY - ele_y;
            left = left < 0 ? 0 : left;
            top = top < 0 ? 0 : top;
            left = left > max_left ? max_left : left;
            top = top > max_top ? max_top : top;
            $(this).css({
              left,
              top,
            });
          });
        });
        $(document).on("mouseup", () => {
          $(document).off("mousemove");
          obj.overMove && obj.overMove();
        });
        return this;
      },
    });
    $(".box")
      .lzhDrag({
        startDown: function () {
          console.log("down");
        },
        startMove: function () {
          console.log("startmove");
        },
        overMove: function () {
          console.log("move");
        },
      })
      .html("box1");

    $(".box2")
      .lzhDrag({
        startDown: function () {
          console.log("down");
        },
        startMove: function () {
          console.log("startmove");
        },
        overMove: function () {
          console.log("move");
        },
      })
      .html("box2");

    $(".box3")
      .lzhDrag({
        startDown: function () {
          console.log("down");
        },
        startMove: function () {
          console.log("startmove");
        },
        overMove: function () {
          console.log("move");
        },
      })
      .html("box3");
  },
  methods: {
    isdary2() {
      //IE下的拖拽
      var box = document.getElementById("shoppingcart");
      box.onmousedown = function (e) {
        e = e || window.event;
        //点击时，鼠标距离元素左 上的距离
        var boxLeft = e.screenX - box.offsetLeft; //e.clientX:鼠标距离文档左边的距离  box.offsetLeft:元素距离左边的距离
        var boxTop = e.screenY - box.offsetTop; //setCapture()/releaseCapture()这两个方式是IE特有的可//以捕获鼠标滑动到窗口外的事件
        if (typeof box.setCapture == "object") {
          //IE
          debugger;
          box.onmousemove = mouseMove;
          box.onmouseup = mouseUp;
          box.setCapture();
        } else {
          window.onmousemove = mouseMove;
          window.onmouseup = mouseUp;
        }
        box.style.cursor = "move";
        function mouseMove(e) {
          e = e || window.event;
          //计算元素记录文档的左，上的距离
          var L = e.screenX - boxLeft;
          var T = e.screenY - boxTop;

          if (L <= 0) {
            //超出左边界
            L = 0;
          } else if (
            L >
            document.documentElement.clientWidth - box.offsetWidth
          ) {
            //超出右边界
            L = document.documentElement.clientWidth - box.offsetWidth;
          }

          if (T <= 0) {
            //超出上边界
            T = 0;
          } else if (
            T >
            document.documentElement.scrollHeight - box.offsetHeight
          ) {
            //超出下边界
            T = document.documentElement.scrollHeight - box.offsetHeight;
          }

          box.style.left = L + "px";
          box.style.top = T + "px";
        }

        function mouseUp() {
          if (typeof box.releaseCapture == "object") {
            //IE
            box.releaseCapture();
          }

          this.onmousemove = null;
          this.onmouseup = null;
          box.style.cursor = "default";
        }
      };
    },
    //谷歌下正常 IE 下有误差
    isdary(elementId) {
      //获取元素
      var dv = document.getElementById(elementId);
      var mouseClientX = 0;
      var mouseClientY = 0;
      var elementLeft = 0;
      var elementTop = 0;
      var isDown = false;
      dv.style.position = "absolute";
      //鼠标按下事件
      dv.onmousedown = function (e) {
        debugger;
        //获取x坐标和y坐标
        mouseClientX = e.clientX;
        mouseClientY = e.clientY;

        //获取左部和顶部的偏移量
        elementLeft = dv.offsetLeft;
        elementTop = dv.offsetTop;
        //开关打开
        isDown = true;
        //设置样式
        dv.style.cursor = "move";
      };
      //鼠标移动
      window.onmousemove = function (e) {
        if (isDown == false) {
          return;
        }
        //获取x和y
        var newMouseClientX = e.clientX;
        var newMouseClientY = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        var newElementLeft = newMouseClientX - (mouseClientX - elementLeft);
        var newElementTop = newMouseClientY - (mouseClientY - elementTop);

        dv.style.left = newElementLeft + "px";
        dv.style.top = newElementTop + "px";
      };

      //鼠标抬起事件
      dv.onmouseup = function () {
        //开关关闭
        isDown = false;
        dv.style.cursor = "default";
      };
    },
  },
};
</script>

<style>
.shoppingcart {
  position: fixed;
  left: 90%;
  top: 90%;
}
.shoppingcart_btn {
  color: #fff;
  background: #ff7300;
  opacity: 0.2;
  padding: 20px;
  border-radius: 5px;
}
.shoppingcart_btn:hover {
  opacity: 0.3;
}
.dv {
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
}

.bbox {
  background-color: #3b51a2;
}
.box,
.box2,
.box3 {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  background-color: #323c6c;
}
.box2 {
  background-color: #4aaf59;
}
.box3 {
  background-color: #f19a4e;
}
</style>