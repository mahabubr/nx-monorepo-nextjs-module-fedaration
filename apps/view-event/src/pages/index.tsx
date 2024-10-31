import { Button } from '@nx-monorepo-nextjs/Button';

const events = [
  {
    id: 1,
    title: 'Coding Bootcamp',
    date: '2024-11-01',
    time: '10:00 AM',
    description:
      'An intensive coding bootcamp covering full-stack development.',
  },
  {
    id: 2,
    title: 'Yoga Workshop',
    date: '2024-11-03',
    time: '8:00 AM',
    description: 'A morning yoga workshop for beginners and enthusiasts alike.',
  },
  {
    id: 3,
    title: 'Tech Conference',
    date: '2024-11-05',
    time: '9:30 AM',
    description: 'Annual tech conference showcasing the latest in technology.',
  },
  {
    id: 4,
    title: 'Art Exhibition',
    date: '2024-11-07',
    time: '6:00 PM',
    description: 'An art exhibition featuring local artists and sculptors.',
  },
  {
    id: 5,
    title: 'Music Festival',
    date: '2024-11-10',
    time: '5:00 PM',
    description: 'An open-air music festival with bands from around the world.',
  },
  {
    id: 6,
    title: 'Startup Pitch Event',
    date: '2024-11-15',
    time: '1:00 PM',
    description: 'Pitch event for startups seeking funding and mentorship.',
  },
];

export function Index() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-20">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
            <p className="text-gray-500 mt-1">
              {event.date} at {event.time}
            </p>
            <p className="mt-2 text-gray-600">{event.description}</p>
            <div className="mt-4">
              <Button
                onClick={() => {
                  window.location.href = `http://localhost:3002/?id=${event.id}`;
                }}
                type="button"
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 w-20 mx-auto">
        <Button
          onClick={() => {
            window.location.href = 'http://localhost:3000';
          }}
          type="button"
        >
          Create
        </Button>
      </div>
    </>
  );
}

export default Index;
