import ColorShell from './ColorShell';
import ExpensiveComponent from './expensive-component';

const Application = () => {
  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      <ColorShell/>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
