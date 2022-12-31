
import { IconsType } from './Icon.d';

interface IconProps extends IconsType {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
  bgColor?: string;
}

export function Icon({ icon, bgColor, weight = 'thin', size = 28 }: IconProps) {
  const PhosphorIcon = require(`../../../node_modules/phosphor-react`)[icon];

  return (
    PhosphorIcon &&
    (
      <div style={{backgroundColor: bgColor, borderRadius: '50%', padding: '.5rem' }}>
        <PhosphorIcon size={size} weight={weight} />
      </div>
    )
  )

}