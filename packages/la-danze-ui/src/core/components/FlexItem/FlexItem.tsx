import styled from '@emotion/styled';
import { AlignItems, Globals, MixProperties } from '@la-danze-ui/core/components/FlexLayout/FlexLayout';

type FlexBasis = number | string | 'fill' | 'max-content' | 'min-content' | 'fit-content' | 'content';
type Flex = 'auto' | 'initial' | 'none' | number | string;

export interface FlexItemProps {
  order?: number | Globals;
  flexGrow?: number | Globals;
  flexShrink?: number | Globals;
  flexBasis?: FlexBasis | Globals;
  flex?: Flex | Globals;
  alignSelf?:
    | 'auto'
    | 'normal'
    | AlignItems
    | MixProperties<'safe', AlignItems>
    | MixProperties<'unsafe', AlignItems>
    | Globals;
}

export const FlexItem = styled.div(({ order, flexGrow, flexShrink, flexBasis, flex, alignSelf }: FlexItemProps) => ({
  order,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  alignSelf
}));
