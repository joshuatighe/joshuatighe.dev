import BlankLine from '@/app/components/BlankLine';

const BlankLines = () => (
  <>
    {Array.from({ length: 30 }).map((_, i) => (
      <BlankLine key={i} />
    ))}
  </>
);

export default BlankLines;
