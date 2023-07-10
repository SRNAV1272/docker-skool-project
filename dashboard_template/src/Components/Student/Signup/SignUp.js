import { useContext, useEffect } from "react";
import { SetContext } from "./Reducer";
import { Outlet, useNavigate } from "react-router-dom";

export default function Signup() {

    const { currentStep } = useContext(SetContext)

    var numSteps = 3;
    const navigate = useNavigate()

    useEffect(() => {                       // eslint-disable-next-line
        navigate('/signup/basic_info')      // eslint-disable-next-line
    }, [])                                  // eslint-disable-next-line

    useEffect(() => {               // eslint-disable-next-line
        nextStep()                  // eslint-disable-next-line
    }, [currentStep])               // eslint-disable-next-line

    function nextStep() {
        if (currentStep.step > numSteps) {
            // currentStep.step = 1;
        }
        var stepper = document.getElementById('stepper1');
        var steps = stepper.getElementsByClassName('step');

        Array.from(steps).forEach((step, index) => {
            let stepNum = index + 1;
            if (stepNum === currentStep.step) {
                addClass(step, 'editing');
            } else {
                removeClass(step, 'editing');
            }
            if (stepNum < currentStep.step) {
                addClass(step, 'done');
            } else {
                removeClass(step, 'done');
            }
        })
    }


    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }

    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }

    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div class="stepper-horizontal" id="stepper1">
                            <div class="step edting">
                                <div class="step-circle"><span>1</span></div>
                                <div class="step-title">Create an account !</div>
                                <div class="step-bar-left"></div>
                                <div class="step-bar-right"></div>
                            </div>
                            <div class="step">
                                <div class="step-circle"><span>2</span></div>
                                <div class="step-title">Address</div>
                                <div class="step-bar-left"></div>
                                <div class="step-bar-right"></div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="row">
                    <Outlet />
                </div>
            </div >
        </>
    )
}