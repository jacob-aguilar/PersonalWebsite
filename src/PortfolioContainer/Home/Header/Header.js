import React, { useState } from 'react'
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilitis/commonUtils'
import ScrollService from '../../../utilitis/ScrollService'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


export const Header = () => {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions]= useState(false)

    const updateCurrentScreen = (currentScreen)=>{
        if (!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)
        return
    }
    let currentScreenSubscriptions = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

  return (
    <div>

    </div>
  )
}
