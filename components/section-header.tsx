interface SectionHeaderProps {
    title: string;
    subtitle?: string;
  }
  
  export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
      <div className="space-y-1 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>
    )
  }