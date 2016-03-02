1; //Source File: Control.ts 
2; //Author: Johanna Ponce
3; //Last Modified Date: March, 02, 2016 
4; //Last Modified by: Johanna Ponce
5; //GUI Controller for the Tower
/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(cubeOne_rotationSpeed, cubeTwo_rotationSpeed, cubeThree_rotationSpeed, cubeFour_rotationSpeed, cubeFive_rotationSpeed) {
            this.cubeOne_rotationSpeed = cubeOne_rotationSpeed;
            this.cubeTwo_rotationSpeed = cubeTwo_rotationSpeed;
            this.cubeThree_rotationSpeed = cubeThree_rotationSpeed;
            this.cubeFour_rotationSpeed = cubeFour_rotationSpeed;
            this.cubeFive_rotationSpeed = cubeFive_rotationSpeed;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map