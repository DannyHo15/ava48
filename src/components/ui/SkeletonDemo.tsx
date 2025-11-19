'use client';

import OptimizedThemeImage from '@/components/OptimizedThemeImage';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonDemo = () => {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Skeleton Loading Variants Demo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Default Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Default</h3>
          <OptimizedThemeImage
            lightURL="/assets/rank48-light.png"
            darkURL="/assets/rank48-dark.png"
            width={200}
            height={150}
            skeletonVariant="default"
            alt="Default skeleton demo"
          />
        </div>

        {/* Shimmer Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Shimmer</h3>
          <OptimizedThemeImage
            lightURL="/assets/rank48-light.png"
            darkURL="/assets/rank48-dark.png"
            width={200}
            height={150}
            skeletonVariant="shimmer"
            skeletonClassName="bg-blue-100/50 dark:bg-blue-900/30"
            alt="Shimmer skeleton demo"
          />
        </div>

        {/* Pulse Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Pulse</h3>
          <OptimizedThemeImage
            lightURL="/assets/rank48-light.png"
            darkURL="/assets/rank48-dark.png"
            width={200}
            height={150}
            skeletonVariant="pulse"
            alt="Pulse skeleton demo"
          />
        </div>

        {/* Wave Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Wave</h3>
          <OptimizedThemeImage
            lightURL="/assets/rank48-light.png"
            darkURL="/assets/rank48-dark.png"
            width={200}
            height={150}
            skeletonVariant="wave"
            alt="Wave skeleton demo"
          />
        </div>

        {/* Gradient Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Gradient</h3>
          <OptimizedThemeImage
            lightURL="/assets/rank48-light.png"
            darkURL="/assets/rank48-dark.png"
            width={200}
            height={150}
            skeletonVariant="gradient"
            skeletonClassName="bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/30 dark:to-pink-900/30"
            alt="Gradient skeleton demo"
          />
        </div>

        {/* Custom Rounded Skeleton */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Rounded Avatar</h3>
          <OptimizedThemeImage
            lightURL="/assets/aya-fujimoto-light.png"
            darkURL="/assets/aya-fujimoto-dark.png"
            width={150}
            height={150}
            skeletonVariant="shimmer"
            skeletonClassName="bg-pink-100/50 dark:bg-pink-900/30"
            alt="Rounded avatar demo"
            style={{ borderRadius: '50%' }}
          />
        </div>

      </div>

      {/* Standalone Skeleton Examples */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Standalone Skeleton Components
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Default</p>
            <Skeleton width="100%" height="120px" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Shimmer</p>
            <Skeleton variant="shimmer" width="100%" height="120px" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Pulse</p>
            <Skeleton variant="pulse" width="100%" height="120px" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Wave</p>
            <Skeleton variant="wave" width="100%" height="120px" />
          </div>
        </div>

        {/* Different shapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Card Skeleton</p>
            <div className="space-y-3">
              <Skeleton variant="shimmer" width="100%" height="200px" />
              <Skeleton variant="shimmer" width="75%" height="20px" />
              <Skeleton variant="shimmer" width="50%" height="16px" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">List Skeleton</p>
            <div className="space-y-2">
              <Skeleton variant="pulse" width="60px" height="60px" rounded="full" />
              <Skeleton variant="pulse" width="100%" height="16px" />
              <Skeleton variant="pulse" width="80%" height="16px" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Profile Skeleton</p>
            <div className="space-y-3">
              <Skeleton variant="gradient" width="80px" height="80px" rounded="full" />
              <Skeleton variant="gradient" width="120px" height="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDemo;