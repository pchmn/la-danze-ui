import styled from '@emotion/styled';
import { withClass } from '@la-danze-ui/core/withClass';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = FlexCommon | 'left' | 'right' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignContent = FlexCommon | 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

export type Globals = 'inherit' | 'initial' | 'unset';
export type FlexCommon = 'flex-start' | 'flex-end' | 'start' | 'end';
export type MixProperties<A extends string, B extends string> = `${A} ${B}`;
export type AlignItems = FlexCommon | 'stretch' | 'self-start' | 'self-end' | 'center' | 'baseline';

export interface FlexLayoutProps {
  flexDirection?: FlexDirection | Globals;
  flexWrap?: FlexWrap | Globals;
  flexFlow?: MixProperties<FlexDirection, FlexWrap> | Globals;
  justifyContent?:
    | JustifyContent
    | MixProperties<'safe', JustifyContent>
    | MixProperties<'unsafe', JustifyContent>
    | Globals;
  alignItems?: AlignItems | MixProperties<'safe', AlignItems> | MixProperties<'unsafe', AlignItems> | Globals;
  alignContent?: AlignContent | MixProperties<'safe', AlignContent> | MixProperties<'unsafe', AlignContent> | Globals;
  fullHeight?: boolean;
}

export const FlexLayout = withClass('LaDuiFlexLayout')(
  styled.div(
    ({ flexDirection, flexWrap, flexFlow, justifyContent, alignItems, alignContent, fullHeight }: FlexLayoutProps) => ({
      display: 'flex',
      flexDirection,
      flexWrap,
      justifyContent,
      flexFlow,
      alignItems,
      alignContent,
      height: fullHeight ? '100%' : 'auto'
    })
  )
);
