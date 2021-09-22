import React, { useState } from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

function Navbar () {
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
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
          <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
          <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
        </Page>
      );
}

export default Navbar;