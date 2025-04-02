import { isDev, isServer } from 'solid-js/web'
import type SolidQueryDevtoolsComp from './solid-query-devtools-base'
import type { ComponentProps } from 'solid-js'
import { createMemo, untrack } from 'solid-js'
import { onMount } from 'solid-js'
import type { Component } from 'solid-js'
import { createSignal, sharedConfig, splitProps } from 'solid-js'
import type { JSX } from 'solid-js'

export function clientOnly<T extends Component<any>>(
  fn: () => Promise<{
    default: T
  }>,
) {
  if (isServer)
    return (props: ComponentProps<T> & { fallback?: JSX.Element }) =>
      props.fallback

  const [comp, setComp] = createSignal<T>()
  fn().then((m) => setComp(() => m.default))
  return (props: ComponentProps<T>) => {
    let Comp: T | undefined
    let m: boolean
    const [, rest] = splitProps(props, ['fallback'])
    if ((Comp = comp()) && !sharedConfig.context) return Comp(rest)
    const [mounted, setMounted] = createSignal(!sharedConfig.context)
    onMount(() => setMounted(true))
    return createMemo(
      () => (
        (Comp = comp()),
        (m = mounted()),
        untrack(() => (Comp && m ? Comp(rest) : props.fallback))
      ),
    )
  }
}

export const SolidQueryDevtools: typeof SolidQueryDevtoolsComp = isDev
  ? clientOnly(() => import('./solid-query-devtools-base'))
  : function () {
      return null
    }