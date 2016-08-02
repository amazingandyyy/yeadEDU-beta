'use strict';

var app = angular.module('yeahEduApp');

app.controller('indexCtrl', function($scope, $state, $timeout) {
    console.log('indexCtrl loaded!');
    $('.menu .mobileScrollableContainer a.item').popup({
        position: 'bottom center'
    });

    navbarListener();
    mobileScrollableContainerListener();

    function navbarListener() {
        $('.menu .item').click(menuItemClicked);

        function menuItemClicked() {
            $('.menu .item').removeClass('active');
            $(this).not('.header').addClass('active');
        }
    }

    function mobileScrollableContainerListener() {
        var mobileScrollableContainerChildrenArray = $('.mobileScrollableContainer').find('.item').not('.header');
        var length = mobileScrollableContainerChildrenArray.length;
        var totalWidth = 0;
        var itemWidth = 0;
        for (var i = 0; i < length; i++) {
            itemWidth = $(mobileScrollableContainerChildrenArray[i]).innerWidth();
            totalWidth += itemWidth;
            // console.log('mobileScrollableContainerChildrenArray totalWidth: ', totalWidth);
        };
        // console.log('mobileScrollableContainerChildrenArray totalWidth final: ', totalWidth);

        $('.mobileScrollableContainer').css('min-width', totalWidth);

    }

});
app.controller('homeCtrl', function($scope, $state) {
    console.log('homeCtrl loaded!');
});
app.controller('homeSectionCtrl', function($scope, $state, $timeout) {
    console.log('homeSectionCtrl loaded!');
    $('.intro_section .ui.progress').visibility({
        onTopVisible: function(calculations) {
            $(this).progress();
        },
        onTopPassed: function(calculations) {},
        onUpdate: function(calculations) {}
    });
    $('.intro_section #example').visibility({
        onTopVisible: function(calculations) {
            createChart();
            $(document).bind("kendo:skinChange", createChart);
        }
    });
    // $('.intro_sectionChart table').visibility({
    //     onTopVisible: function(calculations) {
    //         console.log(calculations);
    //         $(this).css('transform', 'scale(2.3) rotate(12deg) translateY(30px)');
    //     }
    // });

    function createChart() {
        var data = [{
            "source": "GPA/在校成绩",
            "percentage": 50
        }, {
            "source": "自传/七篇短文",
            "percentage": 25
        }, {
            "source": "志愿者服务经历",
            "percentage": 6.25,
            "explode": true
        }, {
            "source": "实习/工作经历",
            "percentage": 6.25,
            "explode": true
        }, {
            "source": "获奖/荣誉经历",
            "percentage": 6.25,
            "explode": true
        }, {
            "source": "社团活动参与",
            "percentage": 6.25,
            "explode": true
        }];
        $("#chart").kendoChart({
            legend: {
                position: "bottom",
                visible: false
            },
            dataSource: {
                data: data
            },
            labels: {
                visible: true
            },
            series: [{
                type: "pie",
                field: "percentage",
                categoryField: "source",
                explodeField: "explode"
            }],
            seriesColors: ["#0C8D7A", "#4DB6CC", "#34B3A0"],
            tooltip: {
                visible: true,
                template: "${ category } 占比 ${ value }%"
            }
        });
    };
});
app.controller('jumbotronTitleCtrl', function($scope, $state, $interval, $timeout, $location) {
    console.log('jumbotronTitleCtrl loaded!');
    $('.ui.huge.header.title').addClass('animated flipInX');

    $scope.titleSolgan = '我们从Berkeley走出来，要带更多人走进';
    var titleSolgans = ['绝不花俏，保证专业', '靠实力转学，是我们的哲学', '提早准备是致胜关键', '我们一定要全力以赴', '我们从Cal走出来，要带更多人go bear'];
    var index = 0;
    $('.ui.large.header.titleSolgan').addClass('animated fadeIn');
    // $timeout(function() {
    //     $('.ui.large.header.titleSolgan').addClass('animated fadeOut');
    // }, 3000);
    // if($location.$$path === '/'){
    $interval(readTitleSlogan, 5000, 50);
    // }else{
    // $interval.cancel();
    // }

    function readTitleSlogan() {
        // $('.ui.large.header.titleSolgan').removeClass('animated fadeIn fadeOut');
        // $timeout(function() {
        //     $('.ui.large.header.titleSolgan').addClass('animated fadeIn');
        // }, 0);
        // // console.log(index % 5);
        // $scope.titleSolgan = titleSolgans[index % 5];
        // $timeout(function() {
        //     $('.ui.large.header.titleSolgan').addClass('animated fadeOut');
        // }, 4000);
        // index++;
        // console.log('index: ', index);

    }
});

app.controller('PageController', function($scope) {
    console.log('PageController loaded!');
});
app.controller('longtermCtrl', function($scope) {
    console.log('longtermCtrl loaded!');
});


app.controller('applicationCtrl', function() {
    console.log('applicationCtrl loaded!');
});

app.controller('resourceCtrl', function($scope, $state, SweetAlert) {
    console.log('resourceCtrl loaded!');

    $scope.showAlert = () => {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "You want to go home?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, go home!",
            closeOnConfirm: true
        }, function(isConfirm) {
            if (isConfirm) {
                $state.go('home');
            }
        });
    };
    app.controller('aboutCtrl', function() {
        console.log('aboutCtrl loaded!');
    });
});
