interface IconProps {
  icon: string;
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin'
}

export function Icon({ icon, weight = 'thin', size = 28 }: IconProps) {
  const PhosphorIcon = require(`../../../node_modules/phosphor-react`)[icon];

  return (
    PhosphorIcon && <PhosphorIcon size={size} weight={weight} />
  )

}