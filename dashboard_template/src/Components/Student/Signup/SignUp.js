import { useContext, useEffect, useReducer, useState } from "react";
import UpdateState, { SetContext, initialState } from "./Reducer";
import { Outlet, useNavigate } from "react-router-dom";

export default function Signup() {

    const { currentStep } = useContext(SetContext)

    var numSteps = 3;
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/signup/basic_info')
    }, [])

    useEffect(() => {
        nextStep()
    }, [currentStep])

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
                            <div class="step">
                                <div class="step-circle"><span>3</span></div>
                                <div class="step-title">Contacts</div>
                                <div class="step-bar-left"></div>
                                <div class="step-bar-right"></div>
                            </div>
                            {/* <div class="step">
                                <div class="step-circle"><span>4</span></div>
                                <div class="step-title">Reporting Info</div>
                                <div class="step-optional">Optional</div>
                                <div class="step-bar-left"></div>
                                <div class="step-bar-right"></div>
                            </div> */}
                        </div>
                        {/* <button className="btn border-primary" onClick={() => setCurrentStep({ payload: 'increase' })}>update</button> */}
                    </div >
                </div >
                <div className="row">
                    <Outlet />
                </div>
            </div >
        </>
    )
}