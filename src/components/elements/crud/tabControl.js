/* eslint-disable */
import React from 'react'
 
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const TabControl = ({tabNames,views}) =>{
    return <>
        <Tabs theme = "round">
        <TabNav>
          {tabNames.map((v) => <TabNavItem key = "tab control"> <h2>{v}</h2> </TabNavItem>)}
        </TabNav>
        {console.log(views)}
        <TabContent>
            {views.map((v) => <TabPanel key = "tab views">{v()}</TabPanel>)}
        </TabContent>
      </Tabs>
    </>
}

export default TabControl