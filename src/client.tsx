/// <reference types="vinxi/types/client" />
import { hydrate } from 'solid-js/web';
import { StartClient } from '@tanstack/solid-start';
import { createRouter } from './router';


const router = createRouter();
hydrate(() => {
 
  return <StartClient router={router} />
}, document.body)