function myFunction() {
	document.oncontextmenu=function(e){return true;}
	context.attach('html', [
		{header: '右键导航菜单'},
		{text: '在线工具', subMenu: [
			{text: '测速网', href: 'https://www.speedtest.cn/', target:'_blank'},
			{text: '[微零微]-Windows/Office全系列激活', href: 'https://v0v.bid/', target:'_blank'},
			{text: '文件转换器', href: 'https://convertio.co/zh/', target:'_blank'},
			{text: '加密解密', href: 'https://www.sojson.com/encrypt.html', target:'_blank'},
			{text: '图文工具', subMenu: [
				{text: '动画字幕', href: 'https://as2.bitinn.net/', target:'_blank'},
				{text: '字体生成', href: 'http://www.ssjjss.com/', target:'_blank'},
				{text: '在线PS', href: 'https://www.photopea.com/', target:'_blank'},
				{text: '在线抠图', href: 'https://www.remove.bg/zh/', target:'_blank'},
				{text: '改图鸭', href: 'https://www.gaituya.com/', target:'_blank'},
				{text: '照片面部修复', href: 'https://www.restorephotos.io/restore', target:'_blank'},
				{text: '照片修复', href: 'https://huggingface.co/spaces/Xintao/GFPGAN', target:'_blank'}
			]},
			{text: '影音工具', subMenu: [
				{text: '声音分离', href: 'https://vocalremover.org/zh/', target:'_blank'},
				{text: '音轨移除器', href: 'https://www.lalal.ai/zh-hans/', target:'_blank'}
			]},
		]},
		{text: '网盘存储', subMenu: [
			{text: '百度网盘', href: 'https://pan.baidu.com/', target:'_blank'},
			{text: '阿里云盘', href: 'https://www.aliyundrive.com/', target:'_blank'},
			{text: '123云盘', href: 'https://www.123pan.com/', target:'_blank'},
			{text: '钛盘', href: 'https://tmp.link/', target:'_blank'},
			{text: 'UsersDrive', href: 'https://usersdrive.com/', target:'_blank'},
			{text: 'FileDoge', href: 'https://filedoge.com/', target:'_blank'}
		]},
		{divider: true},
		{text: '视频网站', subMenu: [
			{text: '腾讯视频', href: 'https://v.qq.com/', target:'_blank'},
			{text: '爱奇艺', href: 'https://www.iqiyi.com/', target:'_blank'},
			{text: '哔哩哔哩', href: 'https://www.bilibili.com/', target:'_blank'},
			{text: 'B站视频下载', href: 'https://xbeibeix.com/api/bilibili/', target:'_blank'}
		]},
		{text: '资源素材', subMenu: [
			{text: 'PICKFREE - 免费资源导航', href: 'http://www.pickfree.cn/', target:'_blank'},
			{text: '图影素材', subMenu: [
				{text: 'Pixabay', href: 'https://pixabay.com/zh/', target:'_blank'},
				{text: 'Pexels', href: 'https://www.pexels.com/zh-cn/', target:'_blank'},
				{text: 'CC零图片网', href: 'https://www.cc0.cn/image/', target:'_blank'},
				{text: 'Awesome Wallpapers', href: 'https://wallhaven.cc/', target:'_blank'},
				{text: 'Mixkit', href: 'https://mixkit.co/', target:'_blank'},
				{text: 'videvo', href: 'https://www.videvo.net/', target:'_blank'}
			]},
			{text: '图标素材', subMenu: [
				{text: '免费设计素材资源库', href: 'https://www.y3q.net/', target:'_blank'}
			]},
			{text: '模板素材', subMenu: [
				{text: '新CG儿', href: 'https://www.newcger.com/', target:'_blank'},
				{text: 'AE模板精品站', href: 'https://www.adobeae.com/', target:'_blank'},
				{text: '书生CG资源站', href: 'https://c4dsky.com/', target:'_blank'},
				{text: 'shareAE', href: 'https://www.shareae.cn/', target:'_blank'},
				{text: '龋齿一号', href: 'http://www.gfxcamp.com/', target:'_blank'},
				{text: 'CG爱好者网', href: 'http://www.cgahz.com/', target:'_blank'}
			]},
			{text: '影视资源', subMenu: [
				{text: '音范丝', href: 'https://www.yinfans.me/', target:'_blank'},
				{text: '4K世界', href: 'https://www.4ksj.com/', target:'_blank'},
				{text: '80s电影网', href: 'https://www.80sgod.com/', target:'_blank'},
				{text: '天空资源网 tkzy9.com', href: 'https://tiankongzy.com/', target:'_blank'},
				{text: '百度资源站', href: 'https://bdzy.com/', target:'_blank'},
				{text: 'u酷资源站', href: 'https://www.ukuzy.com/', target:'_blank'}
			]},
			{text: '文档资源', subMenu: [
				{text: '点点下载', href: 'https://www.torrent.org.cn/', target:'_blank'},
				{text: '自媒体全网搜索引擎', href: 'http://www.51taojinge.com/', target:'_blank'},
				{text: '知识检索', href: 'https://pixabay.com/zh/', target:'_blank'}
			]},
		]},
		{text: '编程开发', subMenu: [
			{text: '精易论坛', href: 'https://bbs.125.la/', target:'_blank'},
			{text: '吾爱破解', href: 'https://www.52pojie.cn/', target:'_blank'},
			{text: 'GitHub #', href: 'https://github.com/', target:'_blank'},
			{header: '尚未添加', subMenu: [
				{text: 'header', href: '', target:'_blank'}
			]},
		]},
		{divider: true},
		{text: '内部网站', subMenu: [
			{header: '尚未添加', href: '', target:'_blank'},
			{header: '尚未添加', href: '', target:'_blank'},
			{header: '尚未添加', href: '', target:'_blank'}
		]},
		{divider: true},
		{text: '关于', action: function(e){
			document.oncontextmenu=function(e){return false;}
			e.preventDefault();
			context.destroy('html');
			//alert('html contextual menu destroyed!');
		}}
	]);
}

$(document).ready(function (){
	
	context.init({preventDoubleContext: false});
	
	context.attach('.inline-menu', [
		{header: 'Options'},
		{text: 'Open', href: '#'},
		{text: 'Open in new Window', href: '#'},
		{divider: true},
		{text: 'Copy', href: '#'},
		{text: 'Dafuq!?', href: '#'}
	]);
	
	context.attach('#download', [
		
		{header: 'Download'},
		{text: 'The Script', subMenu: [
			{header: 'Requires jQuery'},
			{text: 'context.js', href: 'http://contextjs.com/context.js', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Download', this.pathname, this.innerHTML]);
			}}
		]},
		{text: 'The Styles', subMenu: [
		
			{text: 'context.bootstrap.css', href: 'http://contextjs.com/context.bootstrap.css', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Bootstrap CSS Download', this.pathname, this.innerHTML]);
			}},
			
			{text: 'context.standalone.css', href: 'http://contextjs.com/context.standalone.css', target:'_blank', action: function(e){
				_gaq.push(['_trackEvent', 'ContextJS Standalone CSS Download', this.pathname, this.innerHTML]);
			}}
		]},
		{divider: true},
		{header: 'Meta'},
		{text: 'The Author', subMenu: [
			{header: '@jakiestfu'},
			{text: 'Website', href: 'http://jakiestfu.com/', target: '_blank'},
			{text: 'Forrst', href: 'http://forrst.com/people/jakiestfu', target: '_blank'},
			{text: 'Twitter', href: 'http://twitter.com/jakiestfu', target: '_blank'},
			{text: 'Donate?', action: function(e){
				e.preventDefault();
				$('#donate').submit();
			}}
		]},
		{text: 'Hmm?', subMenu: [
			{header: 'Well, thats lovely.'},
			{text: '2nd Level', subMenu: [
				{header: 'You like?'},
				{text: '3rd Level!?', subMenu: [
					{header: 'Of course you do'},
					{text: 'MENUCEPTION', subMenu: [
						{header:'FUCK'},
						{text: 'MAKE IT STOP!', subMenu: [
							{header: 'NEVAH!'},
							{text: 'Shieeet', subMenu: [
								{header: 'WIN'},
								{text: 'Dont Click Me', href: 'http://omglilwayne.com/', target:'_blank', action: function(){
									_gaq.push(['_trackEvent', 'ContextJS Weezy Click', this.pathname, this.innerHTML]);
								}}
							]}
						]}
					]}
				]}
			]}
		]}
	]);
	
	context.settings({compress: true});

	//context.attach('html', [
	
	$(document).on('mouseover', '.me-codesta', function(){
		$('.finale h1:first').css({opacity:0});
		$('.finale h1:last').css({opacity:1});
	});
	
	$(document).on('mouseout', '.me-codesta', function(){
		$('.finale h1:last').css({opacity:0});
		$('.finale h1:first').css({opacity:1});
	});
	
});