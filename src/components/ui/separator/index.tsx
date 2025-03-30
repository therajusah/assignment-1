import { cn } from "../../../lib/utils";

const Separator = ({ className }: { className?: string }) => {
    return <hr className={cn("my-4 border-0 h-[.5px] bg-[#c3c1c1]", className)} />;
  };
  
  export default Separator;