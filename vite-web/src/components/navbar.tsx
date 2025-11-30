"use client"; // <-- añade esto en la primera línea del archivo

import { Autocomplete, Burger, Group , Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import React from 'react';
import styles from './css/navbar.module.css';

const links = [
  { link: '/about', label: 'Producto' },
  { link: '/pricing', label: 'Contacto' },
  { link: '/learn', label: 'Sobre nosotros' },
  { link: '/community', label: 'Mi carrito' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={styles.header}>
      <div className= {styles.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text>Vita</Text>
          {/* <MantineLogo size={28} /> */}
        </Group>

        <Group>
          <Group ml={50} gap={5} className={styles.links} visibleFrom="sm">
            {items}
         
          <Autocomplete
            className={styles.search} 
            placeholder="Search"
            leftSection="icon"
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
           </Group>
        </Group>
      </div>
    </header>
  );
}