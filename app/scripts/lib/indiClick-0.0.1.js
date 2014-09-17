(function () {
    'use strict';

    function angularIndiClick(angular) {

        var directiveId = 'indiClick';
        return angular.module('angular-indi-click', [])
          .directive(directiveId, ['$parse', function ($parse) {
            var directive = {
                link: link,
                restrict: 'A'
            };
            return directive;
            function link(scope, element, attr) {
                var fn = $parse(attr[directiveId]),
                target = element[0];

                element.on('click', function (event) {
                    scope.$apply(function () {
                        var height = element.height(),
    //                    oldWidth = element.width(),
                        opts = {
                            length: Math.round(height / 3),
       //                     radius: Math.round(height / 5),
                            width: Math.round(height / 10),
                            color: element.css("color"),
      //                      left: -5
                        }; // customize this "resizing and coloring" algorithm
                        attr.$set('disabled', true);
       //                 element.width(oldWidth + oldWidth / 2); // make room for spinner

                        var spinner = new Spinner(opts).spin(target);
                        // expects a promise
                        // http://docs.angularjs.org/api/ng.$q
                        var ret = fn(scope, { $event: event });
                        if (angular.isDefined(ret) && angular.isDefined(ret.then)) {
                            ret.then(function (res) {
        //                        element.width(oldWidth); // restore size
                                attr.$set('disabled', false);
                                spinner.stop();
                                return res;
                            }, function (res) {
         //                       element.width(oldWidth); // restore size
                                attr.$set('disabled', false);
                                spinner.stop();
                            });
                        } else {
                            attr.$set('disabled', false);
                            spinner.stop();
                            return ret;
                        }                        
                    });
                });
            }
        }]);
    }
    if (typeof define === 'function' && define.amd) {
        define('angular-indi-click', ['angular'], angularIndiClick);
    } else {
        angularIndiClick(angular);
    }
})();
