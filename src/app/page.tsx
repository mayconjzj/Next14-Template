import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[72px] tracking-tighter font-black">
        Hello React + Next
      </h1>

      <Button>Button</Button>
    </main>
  );
}
