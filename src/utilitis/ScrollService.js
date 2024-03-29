import {TOTAL_SCREENS} from './commonUtils'
import { animationFrameScheduler, Subject } from 'rxjs'

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);

    }
    scrollToHireMe=()=>{
        let contactMeScreen = document.getElementById("Contact Me")
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    scrollToHome=()=>{
        let HomeScreen = document.getElementById("Home")
        if (!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementView= (elem, type)=>{
        let rec = elem.geBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
        let completeVisible = elementTop >= 0 && elementBottom <=window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisible;

                case "complete":
                return completeVisible
                default:
                return false
        }
    }

    checkCurrentScreenUnderViewport = (event)=>{
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDown = document.getElementById(screen.screen_name);
            if(!screenFromDown)
            continue;

            let fullyVisible = this.isElementInView(screenFromDown, "complete");
            let partiallyVisible = this.isElementInView(screenFromDown, "partial");

            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}

