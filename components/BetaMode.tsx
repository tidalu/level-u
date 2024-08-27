import { AlertTriangle } from 'lucide-react';
import { useLocalizedData } from '@/lib/useLocalizedData';
const BetaNotification = () => {
  const data = useLocalizedData();

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-yellow-900 text-sm py-1 px-4 text-center z-50 flex items-center justify-center">
      <AlertTriangle className="w-5 h-5 mr-2" />
      <span className="font-semibold">{data.testMode}</span>
    </div>
  );
};

export default BetaNotification;
