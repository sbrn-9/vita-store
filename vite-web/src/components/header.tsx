"use client";

import React from 'react';
import styles from './css/header.module.css';
import { Text, Group, Image, Button} from '@mantine/core';
import { Navbar } from './navbar';


export function Header() {
  return (

    <header >
      
      <Group className= {styles.container}>
        <Navbar />


        <Group className={styles.TextContainer}>
        <Text className={styles.title}>EN VITA NOS CENTRAMOS EN TRAER LO MEJOR PARA TU INTERIOR</Text>
        <Button className={styles.button}>CONTACTANOS</Button>
        </Group>
      </Group>
      
    </header>
  );
}