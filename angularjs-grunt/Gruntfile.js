module.exports = function(grunt) {
    //init初始化
    grunt.initConfig({
        //读取 package
        pkg : grunt.file.readJSON('package.json'),
        //合并插件的 设置
        concat : {
            options : {
                stripBanners: true,
                // 正则匹配文件
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },

            // 原始位置，输出位置
			basic_and_extras: {
				files: {
					//第三方库文件
					'app/bulid/lib.js': ['app/bower_components/angular/angular.js','app/bower_components/angular/angular-route.js'],

					//项目文件
					'app/bulid/app.js': ['app/app.js'],
					'app/bulid/view1.js': ['app/view1/view1.js'],
					'app/bulid/view2.js': ['app/view2/view2.js','app/view2/view2Service.js'],
					'app/bulid/webconfig.js': ['app/components/config/webconfig.js','app/components/config/webConfigProvider.js'],
					'app/bulid/version.js': ['app/components/version/version.js','app/components/version/interpolate-filter.js','app/components/version/version-directive.js'],
				},
			}

		    // dist : {
                // src: ['app/view1/view1.js'],
                // dest: 'app/bulid/view1.js'
            // },
			// extras: {
				// src: ['app/view2/view2.js','app/view2/view2Service.js'],
				// dest: 'app/bulid/view2.js',
			// }
        },
        //压缩插件的设置
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> '+
                         '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
			my_target: {
				files: {
					//第三方库文件
					'app/bulid/lib.min.js': ['app/bulid/lib.js'],

					//项目文件
					'app/bulid/app.min.js': ['app/bulid/app.js'],
					'app/bulid/view1.min.js': ['app/bulid/view1.js'],
					'app/bulid/view2.min.js': ['app/bulid/view2.js'],
					'app/bulid/webconfig.min.js': ['app/bulid/webconfig.js'],
					'app/bulid/version.min.js': ['app/bulid/version.js']
				}
			}
            //dist: {
            //    src: '<%= concat.dist.dest %>',
            //    dest: 'bulid/<%= pkg.name %>.min.js'
            //}
        }
    });
    //载入执行依赖
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //注册任务
    grunt.registerTask('default', ['concat', 'uglify']);
};
