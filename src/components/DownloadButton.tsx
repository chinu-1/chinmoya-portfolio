
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type DownloadButtonProps = {
  size?: 'default' | 'sm' | 'lg';
  fullWidth?: boolean;
};

const DownloadButton = ({ size = 'default', fullWidth = false }: DownloadButtonProps) => {
  // Replace this with the actual Google Drive link to the CV
  const CV_LINK = "https://drive.google.com/your-cv-link-here";
  
  return (
    <Button 
      className={cn(
        "bg-white text-background hover:bg-white/90 transition-all",
        fullWidth && "w-full"
      )}
      size={size}
      onClick={() => window.open(CV_LINK, '_blank')}
    >
      <FileDown className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
};

export default DownloadButton;
