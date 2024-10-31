/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from '@nx-monorepo-nextjs/Button';

const Card = ({ title, description }: any) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
    <Button>Learn More</Button>
  </div>
);

export default Card;
