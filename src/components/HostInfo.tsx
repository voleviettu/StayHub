import { Card } from "@/components/ui/card";

interface HostInfoProps {
  hostName: string;
}

const HostInfo = ({ hostName }: HostInfoProps) => {
  return (
    <Card className="glass-strong rounded-3xl border-0 p-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Hosted by</h2>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">
            {hostName.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{hostName}</h3>
          <p className="text-white/70">Superhost · Joined in 2020</p>
        </div>
      </div>
    </Card>
  );
};

export default HostInfo;
