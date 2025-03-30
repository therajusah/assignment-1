import { cn } from "../../../lib/utils";

const Separator = ({ className }: { className?: string }) => {
  return <hr className={cn("border-0 h-[1px] bg-[#EEEEEE]", className)} />;
  };
  
  export default Separator;