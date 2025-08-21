import BlankLine from '@/app/ui/BlankLine';

const BlankLines = ({ number }: { number: number }) => (
  <>
    {Array.from({ length: number }).map((_, i) => (
      <BlankLine key={i} />
    ))}
  </>
);

export default BlankLines;
