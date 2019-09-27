import G6 from "@antv/g6";
export default function () {
  var _this = this

  var tooltipEl = null;
  var ERROR_COLOR = '#F5222D' // 特别节点颜色-红色

  // 定义节点的颜色表
  var colorMap = {
    default: { // 蓝色样式
      basicColor: '#2F54EB',
      fontColor: '#2F54EB',
      borderColor: '#2F54EB',
      bgColor: '#F3F6FD'
    },
    error: { // 红色
      basicColor: ERROR_COLOR,
      fontColor: '#FFF',
      borderColor: ERROR_COLOR,
      bgColor: '#E66A6C'
    },
    success: { // 绿色样式
      basicColor: '#52C41A',
      fontColor: '#52C41A',
      borderColor: '#52C41A',
      bgColor: '#F4FCEB'
    },
    ss: { // 橙色样式
      basicColor: '#FA8C16',
      fontColor: '#FA8C16',
      borderColor: '#FA8C16',
      bgColor: '#FCF4E3'
    },
    zz: {
      basicColor: '#722ED1', // 基本颜色-紫色
      fontColor: '#722ED1', // 文本颜色
      borderColor: '#722ED1',
      bgColor: '#F6EDFC' // 背景色
    }
  }
  var getNodeConfig = function getNodeConfig(node) {
    var status = node.status
    if (status && colorMap[status]) {
      return colorMap[status]
    } else {
      return colorMap.default
    }
  }
  // 折叠icon
  var COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
    return [
      ['M', x - r, y],
      ['a', r, r, 0, 1, 0, r * 2, 0],
      ['a', r, r, 0, 1, 0, -r * 2, 0],
      ['M', x - r + 4, y],
      ['L', x - r + 2 * r - 4, y]
    ]
  }
  // 展开Icon
  var EXPAND_ICON = function EXPAND_ICON(x, y, r) {
    return [
      ['M', x - r, y],
      ['a', r, r, 0, 1, 0, r * 2, 0],
      ['a', r, r, 0, 1, 0, -r * 2, 0],
      ['M', x - r + 4, y],
      ['L', x - r + 2 * r - 4, y],
      ['M', x - r + r, y - r + 4],
      ['L', x, y + r - 4]
    ]
  }
  // 节点基本方法
  var nodeBasicMethod = {
    createNodeBox: function createNodeBox(
      group,
      config,
      width,
      height,
      isRoot
    ) {
      /* 最外面的大矩形 */
      var container = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: width,
          height: height
        }
      })
      if (!isRoot) {
        /* 左边的小圆点 */
        // group.addShape('circle', {
        //   attrs: {
        //     x: 3,
        //     y: height / 2,
        //     r: 6,
        //     fill: config.basicColor
        //   }
        // })
      }
      /* 矩形 */
      group.addShape('rect', {
        attrs: {
          x: 3,
          y: 0,
          width: width - 19,
          height: height,
          fill: config.bgColor,
          stroke: config.borderColor,
          radius: 2,
          cursor: 'pointer'
        }
      })

      /* 左边的粗线 */
      group.addShape('rect', {
        attrs: {
          x: 3,
          y: 0,
          width: 3,
          height: height,
          fill: config.basicColor,
          radius: 1.5
        }
      })
      return container
    },
    /* 生成树上的 marker */
    createNodeMarker: function createNodeMarker(group, collapsed, x, y) {
      group.addShape('circle', {
        attrs: {
          x: x,
          y: y,
          r: 13,
          fill: 'rgba(47, 84, 235, 0.05)',
          opacity: 0,
          zIndex: -2
        },
        className: 'collapse-icon-bg'
      })
    },
    afterDraw: function afterDraw(cfg, group) {
      /* 操作 marker 的背景色显示隐藏 */
      var icon = group.findByClassName('collapse-icon')
      if (icon) {
        var bg = group.findByClassName('collapse-icon-bg')
        icon.on('mouseenter', function () {
          bg.attr('opacity', 1)
          graph.get('canvas').draw()
        })
        icon.on('mouseleave', function () {
          bg.attr('opacity', 0)
          graph.get('canvas').draw()
        })
      }
      // 添加动画
      var width=226;
      var height=74;
      var back1 = group.addShape('rect', {
        zIndex: -3,
        attrs: {
          x: 2,
          y: 0,
          width: width,
          height: height,
          fill: '#40a9ff',
          opacity: 0.6
        }
      });
      var back2 = group.addShape('rect', {
        zIndex: -2,
        attrs: {
          x: 2,
          y: 0,
          width: width,
          height: height,
          fill: '#40a9ff', // 为了显示清晰，随意设置了颜色
          opacity: 0.6
        }
      });

      var back3 = group.addShape('rect', {
        zIndex: -1,
        attrs: {
          x: 2,
          y: 0,
          width: width,
          height: height,
          fill: '#40a9ff',
          opacity: 0.6
        }
      });
      group.sort(); // 排序，根据zIndex 排序
      back1.animate({ // 逐渐放大，并消失
        width: width+10,
        height: height+10,
        opacity: 0.1,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, 0); // 无延迟

      back2.animate({ // 逐渐放大，并消失
        width: width+10,
        height: height+10,
        opacity: 0.1,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, 1000); // 1 秒延迟

      back3.animate({ // 逐渐放大，并消失
        width: width+10,
        height: height+10,
        opacity: 0.1,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, 2000); // 2 秒延迟

      /* ip 显示 */
      var ipBox = group.findByClassName('ip-box')
      if (ipBox) {
        /* ip 复制的几个元素 */
        var ipLine = group.findByClassName('ip-cp-line')
        var ipBG = group.findByClassName('ip-cp-bg')
        var ipIcon = group.findByClassName('ip-cp-icon')
        var ipCPBox = group.findByClassName('ip-cp-box')

        // var onMouseEnter = function onMouseEnter() {
        //   _this.ipHideTimer && clearTimeout(_this.ipHideTimer);
        //   ipLine.attr("opacity", 1);
        //   ipBG.attr("opacity", 1);
        //   ipIcon.attr("opacity", 1);
        //   graph.get("canvas").draw();
        // };
        // var onMouseLeave = function onMouseLeave() {
        //   _this.ipHideTimer = setTimeout(function () {
        //     ipLine.attr("opacity", 0);
        //     ipBG.attr("opacity", 0);
        //     ipIcon.attr("opacity", 0);
        //     graph.get("canvas").draw();
        //   }, 100);
        // };
        // ipBox.on("mouseenter", function () {
        //   onMouseEnter();
        // });
        // ipBox.on("mouseleave", function () {
        //   onMouseLeave();
        // });
        // ipCPBox.on("mouseenter", function () {
        //   onMouseEnter();
        // });
        // ipCPBox.on("mouseleave", function () {
        //   onMouseLeave();
        // });
        // ipCPBox.on("click", function () {});
      }
    },
    setState: function setState(name, value, item) {
      var hasOpacityClass = [
        'ip-cp-line',
        'ip-cp-bg',
        'ip-cp-icon',
        'ip-cp-box',
        'ip-box',
        'collapse-icon-bg'
      ]
      var group = item.getContainer()
      var childrens = group.get('children')
      graph.setAutoPaint(false)
      if (name === 'emptiness') {
        if (value) {
          childrens.forEach(function (shape) {
            if (hasOpacityClass.indexOf(shape.get('className')) > -1) {
              return
            }
            shape.attr('opacity', 0.4)
          })
        } else {
          childrens.forEach(function (shape) {
            if (hasOpacityClass.indexOf(shape.get('className')) > -1) {
              return
            }
            shape.attr('opacity', 1)
          })
        }
      }
      graph.setAutoPaint(true)
    }
  }

  /**
   * 计算字符串的长度
   * @param {string} str 指定的字符串
   */
  // var calcStrLen = function calcStrLen(str) {
  //   var len = 0;
  //   for (var i = 0; i < str.length; i++) {
  //     if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
  //       len++;
  //     } else {
  //       len += 2;
  //     }
  //   }
  //   return len;
  // };
  G6.registerNode(
    'card-node', {
      drawShape: function drawShape(cfg, group) {
        var config = getNodeConfig(cfg)
        var isRoot = cfg.type === 'root'
        var nodeError = cfg.nodeError
        /* 最外面的大矩形 */
        var container = nodeBasicMethod.createNodeBox(
          group,
          config,
          243,
          74
        )

        if (cfg.type !== 'root') {
          /* 上边的 type */
          group.addShape('text', {
            attrs: {
              text: cfg.type,
              x: 3,
              y: -10,
              fontSize: 12,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: 'rgba(0,0,0,0.65)'
            }
          })
        }

        var ipWidth = 0
        if (cfg.id) {
          /* ip start */
          /* ipBox */
          // ip矩形框配置
          var ipRect = group.addShape('rect', {
            attrs: {
              fill: nodeError ? null : '#FFF',
              stroke: nodeError ? 'rgba(255,255,255,0.65)' : null,
              radius: 2,
              cursor: 'pointer'
            }
          })

          /* ip */
          var ipText = group.addShape('text', {
            attrs: {
              text: cfg.id,
              x: 10,
              y: 19,
              fontSize: 12,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: nodeError ?
                'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.65)',
              cursor: 'pointer'
            }
          })

          var ipBBox = ipText.getBBox()
          /* ip 的文字总是距离右边 12px */
          ipText.attr({
            x: 224 - 12 - ipBBox.width
          })
          /* ipBox */
          ipRect.attr({
            x: 224 - 12 - ipBBox.width - 4,
            y: ipBBox.minY - 5,
            width: ipBBox.width + 8,
            height: ipBBox.height + 10
          })

          /* 在 IP 元素上面覆盖一层透明层，方便监听 hover 事件 */
          group.addShape('rect', {
            attrs: {
              stroke: '',
              cursor: 'pointer',
              x: 224 - 12 - ipBBox.width - 4,
              y: ipBBox.minY - 5,
              width: ipBBox.width + 8,
              height: ipBBox.height + 10,
              fill: '#fff',
              opacity: 0
            },
            className: 'ip-box'
          })

          /* copyIpLine */
          group.addShape('rect', {
            attrs: {
              x: 194,
              y: 7,
              width: 1,
              height: 24,
              fill: '#E3E6E8',
              opacity: 0
            },
            className: 'ip-cp-line'
          })
          /* copyIpBG */
          group.addShape('rect', {
            attrs: {
              x: 195,
              y: 8,
              width: 22,
              height: 22,
              fill: '#FFF',
              cursor: 'pointer',
              opacity: 0
            },
            className: 'ip-cp-bg'
          })
          /* copyIpIcon */
          group.addShape('image', {
            attrs: {
              x: 200,
              y: 13,
              height: 12,
              width: 10,
              img: 'https://os.alipayobjects.com/rmsportal/DFhnQEhHyPjSGYW.png',
              cursor: 'pointer',
              opacity: 0
            },
            className: 'ip-cp-icon'
          })
          /* 放一个透明的矩形在 icon 区域上，方便监听点击 */
          group.addShape('rect', {
            attrs: {
              x: 195,
              y: 8,
              width: 44,
              height: 22,
              fill: '#FFF',
              cursor: 'pointer',
              opacity: 0
            },
            className: 'ip-cp-box',
            tooltip: '复制IP'
          })

          var ipRectBBox = ipRect.getBBox()
          ipWidth = ipRectBBox.width
          /* ip end */
        }
        if (!cfg.root) {
          // 删除按钮
          var delRect = group.addShape('rect', {
            attrs: {
              operateCode: 'delete',
              fill: '#fff',
              stroke: '#0af',
              radius: 2,
              cursor: 'pointer'
            }
          })
          var delText = group.addShape('text', {
            attrs: {
              operateCode: 'delete',
              text: '删除',
              x: 10,
              y: 19,
              fontSize: 12,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#0af',
              cursor: 'pointer'
            }
          })
          var operateBBox = delRect.getBBox()
          delText.attr({
            x: 143,
            y: 55
          })
          /* operateBBox */
          delRect.attr({
            x: 135,
            y: 43,
            width: 40,
            height: 23
          })
        }
        // 编辑按钮
        var editRect = group.addShape('rect', {
          attrs: {
            operateCode: 'edit',
            fill: '#fff',
            stroke: '#0af',
            radius: 2,
            cursor: 'pointer'
          }
        })
        var editText = group.addShape('text', {
          attrs: {
            operateCode: 'edit',
            text: '编辑',
            x: 10,
            y: 19,
            fontSize: 12,
            textAlign: 'left',
            textBaseline: 'middle',
            fill: '#0af',
            cursor: 'pointer'
          }
        })
        editText.attr({
          x: 189,
          y: 56
          // x: 224 - ipBBox.width - 13,
          // y: ipBBox.minY + 42,
        })
        /* operateBBox */
        editRect.attr({
          x: 181,
          y: 43,
          // x: 224 - ipBBox.width - 22,
          // y: ipBBox.minY + 30,
          width: 40,
          height: 23
        })

        /* name */
        var nameText = group.addShape('text', {
          attrs: {
            text: cfg.name,
            x: 19,
            y: 19,
            fontSize: 14,
            fontWeight: 700,
            textAlign: 'left',
            textBaseline: 'middle',
            fill: config.fontColor,
            cursor: 'pointer'
            // tooltip: cfg.name,
          }
        })

        /* 下面的文字 */
        var remarkText = group.addShape('text', {
          attrs: {
            text: cfg.keyInfo,
            x: 19,
            y: 45,
            fontSize: 14,
            textAlign: 'left',
            textBaseline: 'middle',
            fill: config.fontColor,
            cursor: 'pointer'
          }
        })

        if (nodeError) {
          group.addShape('text', {
            attrs: {
              x: 191,
              y: 62,
              text: '⚠️',
              fill: '#000',
              fontSize: 18
            }
          })
        }

        var hasChildren = cfg.children && cfg.children.length > 0
        if (hasChildren) {
          nodeBasicMethod.createNodeMarker(group, cfg.collapsed, 236, 32)
        }
        return container
      },
      afterDraw: nodeBasicMethod.afterDraw,
      setState: nodeBasicMethod.setState
    },
    'single-shape'
  )
  //   定义线
  G6.registerEdge('VHV', {
    draw(cfg, group) {
      const startPoint = cfg.startPoint
      const endPoint = cfg.endPoint
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#0af',
          lineWidth: 2,
          endArrow: {
            path: 'M 10,0 L -10,-10 L -10,10 Z',
            d: 10
          },
          path: [
            ['M', startPoint.x, startPoint.y],
            ['L', startPoint.x, startPoint.y + 25],
            ['L', endPoint.x, startPoint.y + 25],
            ['L', endPoint.x, endPoint.y]
          ]
        }
      })
      return shape
    },
    setState(name, value, item) {
      const group = item.getContainer()
      const shape = group.get('children')[0] // 顺序根据 draw 时确定
      if (name === 'active') {
        if (value) {
          shape.attr('stroke', '#80deea')
        } else {
          shape.attr('stroke', '#0af')
        }
      }
      if (name === 'selected') {
        if (value) {
          shape.attr('lineWidth', 3)
        } else {
          shape.attr('lineWidth', 2)
        }
      }
    }
  })
}
