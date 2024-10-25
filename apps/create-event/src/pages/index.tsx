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
    </div>
  );
}

export default Index;
