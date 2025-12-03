"use client";

import React from 'react';
import styles from './css/header.module.css';
import { Text, Group, Image} from '@mantine/core';
import { Navbar } from './navbar';


export function Header() {
  return (
    <header>
      <Navbar />

      <Group className= {styles.container}>
        
        <Text className={styles.subtitle}>EN VITA NOS CENTRAMOS EN TRAER LO MEJOR PARA TU INTERIOR</Text>
        <Image className={styles.image} src="/header-image.jpg" alt="Imagen de pistachos" />
      
      </Group>
      
    </header>
  );
}