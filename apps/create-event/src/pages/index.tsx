import Card from '../components/Card';
import CreateEventForm from '../components/CreateEventForm ';

export function Index() {
  return (
    <div className="w-8/12 mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center p-2 border-black border-dashed shadow-md">
        Create Events
      </h2>
      <div className="mt-10">
        <CreateEventForm />
      </div>
      <div className="my-20 grid grid-cols-3 gap-5">
        <Card
          title="Module Federation"
          description="This Card is shared by nx monorepo and module federation"
        />
        <Card
          title="Module Federation"
          description="This Card is shared by nx monorepo and module federation"
        />
        <Card
          title="Module Federation"
          description="This Card is shared by nx monorepo and module federation"
        />
      </div>
    </div>
  );
}

export default Index;
