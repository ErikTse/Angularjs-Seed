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
            dist : {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        //ѹ�����������
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> '+
                         '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'public/assets/built.js',
                dest : 'public/assets/built.min.js'
            }
        }
    });
    //����ִ������
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //ע������ 
    grunt.registerTask('default', ['concat', 'uglify']);
};