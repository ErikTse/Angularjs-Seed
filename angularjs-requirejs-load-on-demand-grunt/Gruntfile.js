module.exports = function(grunt) {
    //init初始化
    grunt.initConfig({
        //读取 package
        pkg : grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "app", //根目录
                    mainConfigFile: "app/require-config.js",//配置文件路径
                    name: "require-config", // 程序入口
                    out: "app/build/<%= pkg.name %>.js", //输出文件
                    include: ['bower_components/requirejs/require'], //requirejs路径
                    optimize: "uglify", //压缩，"none"不压缩
                }
            }
        }

        //合并插件的 设置
        //concat : {
        //    options : {
        //        stripBanners: true,
        //        // 正则匹配文件
        //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        //                '<%= grunt.template.today("yyyy-mm-dd") %> */',
        //    },
			
        //    // 原始位置，输出位置
		//	basic_and_extras: {
		//		files: {
		//			//第三方库文件
		//			'app/bulid/lib.js': ['app/bower_components/angular/angular.js','app/bower_components/angular/angular-route.js'],
					
		//			//项目文件
		//			'app/bulid/app.js': ['app/app.js'],
		//			'app/bulid/view1.js': ['app/view1/view1.js'],
		//			'app/bulid/view2.js': ['app/view2/view2.js','app/view2/view2Service.js'],
		//			'app/bulid/webconfig.js': ['app/components/config/webconfig.js','app/components/config/webConfigProvider.js'],
		//			'app/bulid/version.js': ['app/components/version/version.js','app/components/version/interpolate-filter.js','app/components/version/version-directive.js'],
		//		},
		//	}
        //},
        //压缩插件的设置
        //uglify : {
        //    options : {
        //        banner : '/*! <%= pkg.name %> '+
        //                 '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
		//	my_target: {
		//		files: {
		//			//第三方库文件
		//			'app/bulid/lib.min.js': ['app/bulid/lib.js'],
					
		//			//项目文件
		//			'app/bulid/app.min.js': ['app/bulid/app.js'],
		//			'app/bulid/view1.min.js': ['app/bulid/view1.js'],
		//			'app/bulid/view2.min.js': ['app/bulid/view2.js'],
		//			'app/bulid/webconfig.min.js': ['app/bulid/webconfig.js'],
		//			'app/bulid/version.min.js': ['app/bulid/version.js']
		//		}
		//	}
        //}
    });
    //载入执行依赖
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    //注册任务 
    grunt.registerTask('default', ['requirejs']);
    //grunt.registerTask('default', ['concat', 'uglify']);
};