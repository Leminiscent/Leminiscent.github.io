import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the skill bar on mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;