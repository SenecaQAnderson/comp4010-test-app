import logo from './logo.svg';
import React, { useState } from 'react';
import {
  Button,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  Spinner
} from '@patternfly/react-core';
import './App.css';

function App() {
  const [isNavOpen, setNavOpen] = useState(true);
    const onNavToggle = () => {
        setNavOpen(!isNavOpen);
    }
    const logoProps = {
        href: 'https://patternfly.org',
        onClick: () => console.log('clicked logo'),
        target: '_blank'
      };

      const Header = (
        <PageHeader
          logo="Logo"
          logoProps={logoProps}
          headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
          showNavToggle
          isNavOpen={isNavOpen}
          onNavToggle={onNavToggle}
        />
      );
      const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;
  
      return (
        <div className="App">
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.light}>
            The PatternFly components used in this app are:
            <ul>
              <li>- Page</li>
              <li>- PageHeader</li>
              <li>- PageSidebar</li>
              <li>- PageSection</li>
              <li>- Button</li>
              <li>- Spinner</li>
            </ul>
            
            </PageSection>
          <PageSection variant={PageSectionVariants.light}>
            <Button variant="secondary">This button is useless!</Button>
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>
            <p>This spinner will spin forever</p>
            <Button variant="secondary">
              <Spinner isSVG size="xl"/>
            </Button>
          </PageSection>
        </Page>
        </div>
      );
}

export default App;
