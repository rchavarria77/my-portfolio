// Dependencies
import { Tooltip } from 'react-tooltip';

// Icons
import { BuildingIcon, UserIcon } from '@/components/icons';

export const ProjectType = ({ type = 'personal' }: { type?: string }) => {
  if (type === 'client') {
    return (
      <>
        <span className='cursor-pointer hover:scale-110'>
          <BuildingIcon
            data-tooltip-id='building-tooltip'
            data-tooltip-content='Client Project'
            data-tooltip-place='left'
          />
        </span>
        <Tooltip id='building-tooltip' />
      </>
    );
  }

  return (
    <>
      <span className='cursor-pointer hover:scale-110'>
        <UserIcon
          data-tooltip-id='user-tooltip'
          data-tooltip-content='Side Project'
          data-tooltip-place='left'
        />
      </span>
      <Tooltip id='user-tooltip' />
    </>
  );
};
