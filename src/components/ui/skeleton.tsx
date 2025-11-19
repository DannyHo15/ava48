import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'shimmer' | 'pulse' | 'wave' | 'gradient';
  width?: string | number;
  height?: string | number;
  rounded?: string | boolean;
}

const Skeleton = ({ 
  className, 
  variant = 'default',
  width,
  height,
  rounded = 'default'
}: SkeletonProps) => {
  const getRoundedClass = () => {
    if (typeof rounded === 'string') {
      return rounded;
    }
    return rounded ? 'rounded-full' : 'rounded-lg';
  };

  const variants = {
    default: (
      <div 
        className={cn(
          "bg-gray-200 dark:bg-gray-700 animate-pulse",
          getRoundedClass(),
          className
        )}
        style={{ width, height }}
      />
    ),
    
    shimmer: (
      <div 
        className={cn(
          "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
          getRoundedClass(),
          className
        )}
        style={{ width, height }}
      >
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    ),
    
    pulse: (
      <div 
        className={cn(
          "relative bg-gray-200 dark:bg-gray-700",
          getRoundedClass(),
          className
        )}
        style={{ width, height }}
      >
        <div className="absolute inset-0 animate-pulse-opacity bg-gradient-to-br from-gray-300/50 via-transparent to-gray-300/50 dark:from-gray-600/50 dark:to-gray-600/50" />
      </div>
    ),
    
    wave: (
      <div 
        className={cn(
          "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
          getRoundedClass(),
          className
        )}
        style={{ width, height }}
      >
        <div className="absolute inset-0 animate-wave bg-gradient-to-t from-gray-300/30 via-transparent to-gray-300/30 dark:from-gray-600/30 dark:to-gray-600/30" />
      </div>
    ),
    
    gradient: (
      <div 
        className={cn(
          "relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600",
          getRoundedClass(),
          className
        )}
        style={{ width, height }}
      >
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </div>
    )
  };

  return variants[variant];
};

export { Skeleton };

// Add custom animations to global CSS
export const skeletonStyles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes pulse-opacity {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes wave {
  0%, 100% { transform: translateY(100%); }
  50% { transform: translateY(-50%); }
}

@keyframes gradient-shift {
  0%, 100% { transform: translateX(-100%) translateY(-100%); }
  50% { transform: translateX(100%) translateY(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-pulse-opacity {
  animation: pulse-opacity 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-wave {
  animation: wave 1.5s ease-in-out infinite;
}

.animate-gradient-shift {
  animation: gradient-shift 3s ease-in-out infinite;
}
`;