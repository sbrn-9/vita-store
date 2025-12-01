"use client";

import React from 'react';
import styles from './css/header.module.css';
import { Text, Group } from '@mantine/core';
import { Navbar } from './navbar';


export function Header() {
  return (
    <header>
      <Navbar />

      <Group className= {styles.container}>
        
        <Text className={styles.subtitle}>EN VITA NOS CENTRAMOS EN TRAER LO MEJOR PARA TU INTERIOR</Text>
      </Group>
      
    </header>
  );
}