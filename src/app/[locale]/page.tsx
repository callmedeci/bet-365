import Sidebar from '@/components/Sidebar';
import MatchesList from '@/features/MatchesList';

function HomePage() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
        {/* Mobile Categories - Top */}
        <div className='lg:hidden'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='lg:col-span-3'>
          <MatchesList />
        </div>

        {/* Desktop Sidebar */}
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
