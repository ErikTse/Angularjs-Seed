module.exports = function(grunt) {
    //init��ʼ��
    grunt.initConfig({
        //��ȡ package
        pkg : grunt.file.readJSON('package.json'),
        //�ϲ������ ����
        concat : {
            options : {
                stripBanners: true,
                // ����ƥ���ļ�
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },

            // ԭʼλ�ã����λ��
			basic_and_extras: {
				files: {
					//���������ļ�
					'app/bulid/lib.js': ['app/bower_components/angular/angular.js','app/bower_components/angular/angular-route.js'],

					//��Ŀ�ļ�
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
        //ѹ�����������
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> '+
                         '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
			my_target: {
				files: {
					//���������ļ�
					'app/bulid/lib.min.js': ['app/bulid/lib.js'],

					//��Ŀ�ļ�
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
    //����ִ������
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //ע������
    grunt.registerTask('default', ['concat', 'uglify']);
};
