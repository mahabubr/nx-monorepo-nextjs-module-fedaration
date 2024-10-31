/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '@nx-monorepo-nextjs/Button';
// @ts-ignore
import Card from 'create/Card';

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
  const router = useRouter();
  const { id } = router.query;
  const [eventData, setEventData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const event = events.find((e) => e.id === Number(id));
      setEventData(event);
    }
  }, [id]);

  if (!eventData) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="w-full h-screen grid place-items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{eventData.title}</h1>
        <p className="text-gray-500 mt-2">
          {eventData.date} at {eventData.time}
        </p>
        <p className="mt-4 text-gray-600">{eventData.description}</p>
      </div>
      <div className="mt-4">
        <Button
          onClick={() => {
            window.location.href = `http://localhost:3001`;
          }}
          type="button"
        >
          View All
        </Button>
      </div>

      <div className="my-20 grid grid-cols-3 gap-5 w-8/12 mx-auto">
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
