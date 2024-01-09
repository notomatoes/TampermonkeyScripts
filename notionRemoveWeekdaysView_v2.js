// ==UserScript==
// @name         删除notion的week视图的周末v2
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove a specific div element using MutationObserver
// @match        https://www.notion.so/huopijiu/374b961cc07e47d0b76922377836b7e5?v=1f594d7515204f4c84f0bff4db4e3460
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义要删除的div的XPath
    var xpath = '//*[@id="notion-app"]/div/div[1]/div/div[1]/main/div/div[5]/div/div/div/div[3]/div/div[6]';
    var dataBlockId = '374b961c-c07e-47d0-b769-22377836b7e5';
    var styleId = 'div[style="flex-grow: 1; flex-basis: 0px; text-align: center; font-size: 12px; height: 24px; color: rgba(255, 255, 255, 0.282);"]'



    // 创建 MutationObserver 实例
    var observer = new MutationObserver(function(mutationsList, observer) {
        // 使用XPath选择器获取要删除的元素
        var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element && element.getAttribute('data-block-id') === dataBlockId) {
            element.remove();
        }

        var divElements = document.querySelectorAll(styleId);

        // 检查是否找到了满足条件的div元素
        if (divElements.length > 5) {
            // 删除最后两个div元素
            divElements[divElements.length - 1].remove();
            divElements[divElements.length - 2].remove();
        }


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
                element.style.left = 'calc(20%)';
            } else if (originalLeft === 'calc(28.5714%)') {
                element.style.left = 'calc(40%)';
            } else if (originalLeft === 'calc(42.8571%)') {
                element.style.left = 'calc(60%)';
            } else if (originalLeft === 'calc(57.1429%)') {
                element.style.left = 'calc(80%)';
            } else if (originalLeft === 'calc(71.4286%)') {
                element.style.left = 'calc(80%)';
            }
        }
    });

    // 配置 MutationObserver 以监视子节点的变化
    var config = { childList: true, subtree: true };

    // 开始观察目标节点
    observer.observe(document, config);
})();
