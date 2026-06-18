'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from "next/image";
import ConstructionIcon from '@mui/icons-material/Construction';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import styles from '@/styles/home/sectionTabs.module.css';
import Link from 'next/link';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const tabData = [
  {
    label: 'Iron & Steel Making',
    icon: <ConstructionIcon />,
    image: '/Banner 1.jpg',
    title:
      'Electrotherm has supplied more than 6500 induction melting furnaces and completed over 40 turnkey projects.',
    buttonText: 'Explore Iron & Steel Products',
    buttonLink: '/products',
  },

  {
    label: 'Foundry Equipments',
    icon: <EngineeringIcon />,
    image: '/Banner 2.jpg',
    title:
      'Advanced foundry solutions designed for modern casting industries worldwide.',
    buttonText: 'Explore Foundry Equipments',
    buttonLink: '/products',
  },

  {
    label: 'Induction Heating & Hardening',
    icon: <PrecisionManufacturingIcon />,
    image: '/Banner 3.jpg',
    title:
      'High-performance induction heating systems for efficient industrial applications.',
    buttonText: 'Explore Heating Solutions',
    buttonLink: '/products',
  },
  {
    label: 'Rolling Mill',
    icon: <PrecisionManufacturingIcon />,
    image: '/Banner 3.jpg',
    title:
      'High-performance induction heating systems for efficient industrial applications.',
    buttonText: 'Explore Heating Solutions',
    buttonLink: '/products',
  },
];

export default function SectionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <div className={styles.heroSection}>

      {/* BACKGROUND IMAGE */}
      <Image
        src={tabData[value].image}
        alt="Industry"
        fill
        className={styles.backgroundImage}
      />

      {/* DARK OVERLAY */}
      <div className={styles.overlay}></div>

      {/* TABS */}
      <Box className={styles.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              className={styles.customTab}
            />
          ))}
        </Tabs>
      </Box>

      {/* CONTENT */}
      <div className={styles.contentArea}>

        <h1 className={styles.heading}>
          {tabData[value].title}
        </h1>

        <Link
          href={tabData[value].buttonLink}
          className={styles.exploreButton}
        >
          <span>{tabData[value].buttonText}</span>

          <div className={styles.arrowCircle}>
            →
          </div>
        </Link>

      </div>
    </div>
  );
}