import { mapProps, mapper } from 'recompose';
import FooterCore, { FooterCoreProps } from './FooterCore';

export interface FooterProps extends FooterCoreProps {
  copyright?: React.ReactNode;
}

export const toCoreProps: mapper<FooterProps, FooterCoreProps> = ({
  copyright,
  ...otherProps
}) => ({
  ...otherProps,
  children: copyright,
});

const enhance = mapProps(toCoreProps)(FooterCore);
enhance.displayName = 'Footer';

export default enhance;
