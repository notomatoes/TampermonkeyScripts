// ==UserScript==
// @name         删除notion的week视图的周末
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove a specific div element using XPath
// @match        https://www.notion.so/huopijiu/374b961cc07e47d0b76922377836b7e5*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // 等待一段时间后执行脚本

    setInterval(function() {
        // 定义要删除的div的XPath
        var xpath = '//*[@id="notion-app"]/div/div[1]/div/div[1]/main/div/div[5]/div/div/div/div[3]/div/div[6]';

        // 使用XPath选择器获取要删除的元素
        var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var dataBlockId = '374b961c-c07e-47d0-b769-22377836b7e5'
        if (element && element.getAttribute('data-block-id') === dataBlockId) {
        element.remove();
        }
    }, 500);



    setInterval(function() {
  // 获取所有具有指定类的元素
 var elements = document.querySelectorAll('.notion-selectable.notion-page-block.notion-collection-item');

  // 遍历元素并修改样式
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.width = 'calc(20%)';
        // 获取原始的left属性值
  var originalLeft = element.style.left;

  // 根据原始值进行修改
  if (originalLeft === 'calc(14.2857%)') {
    element.style.left = 'calc(0%)';
  } else if (originalLeft === 'calc(28.5714%)') {
    element.style.left = 'calc(20%)';
  } else if (originalLeft === 'calc(42.8571%)') {
    element.style.left = 'calc(40%)';
  } else if (originalLeft === 'calc(57.1429%)') {
    element.style.left = 'calc(60%)';
  } else if (originalLeft === 'calc(71.4286%)') {
    element.style.left = 'calc(80%)';
  }
  }
}, 500); // 每隔5秒执行一次修改样式的操作
})();
