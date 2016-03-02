/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        
        public cubeOne_rotationSpeed: number;
        public cubeTwo_rotationSpeed: number;
        public cubeThree_rotationSpeed: number;
        public cubeFour_rotationSpeed: number;
        public cubeFive_rotationSpeed: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(cubeOne_rotationSpeed: number, cubeTwo_rotationSpeed: number, cubeThree_rotationSpeed: number, cubeFour_rotationSpeed: number, cubeFive_rotationSpeed: number) {
           this.cubeOne_rotationSpeed = cubeOne_rotationSpeed;
            this.cubeTwo_rotationSpeed = cubeTwo_rotationSpeed;
            this.cubeThree_rotationSpeed = cubeThree_rotationSpeed;
             this.cubeFour_rotationSpeed = cubeFour_rotationSpeed;
              this.cubeFive_rotationSpeed = cubeFive_rotationSpeed;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
