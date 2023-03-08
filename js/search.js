// 元素获取
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');

// 搜索的关键词
var arr = ['tibet', 'culture', 'thangka', 'arts', 'picture', 'pictures', 'heritage', 'songtsen gampo'];

var uls = ['http://www.tibet.cn/', 'https://www.greattibettour.com/tibetan-culture', 'https://artsandculture.google.com/story/NAUxeCJ7__hKJA?hl=zh-CN', 'http://en.chinaculture.org/focus/focus/2013cdgjfyj/2011-05/25/content_463863.htm', 'https://en.wikipedia.org/wiki/Songtsen_Gampo']

// 按钮点击
btn.onclick = function () {
    if (inp.value !== '') {
        let url = uls[link(inp.value)];
        if (url !== undefined && url !== '')
            open(url, '_blank');
    }
    inp.value = '';
}

// 链接返回
function link(value) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (value.toLowerCase() === item && i < 2) {
            num = i;
            break;
        } else if (value.toLowerCase() === item && i < 6) {
            num = 2;
            break;
        } else if (value.toLowerCase() === item && i < arr.length) {
            num = i - 3;
            break;
        }
    }
    return num;
}