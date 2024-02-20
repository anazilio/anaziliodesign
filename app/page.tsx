import { homeMock } from '../mocks/home';
import { Home } from '../screens';

export default function HomePage() {
  return (
    <Home
      images={homeMock.images}
      sectionLogistic={homeMock.sectionLogistic}
      sectionTransport={homeMock.sectionTransport}
    />
  );
}
