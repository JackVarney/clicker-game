import React from 'react';
import { useDispatch } from 'react-redux';
import { gameEvents } from '../core/create-game-event';
import { removeEvent } from '../store/actions/remove-event';
import { removeStaffMember } from '../store/actions/remove-staff-member';
import Button from '../components/Button';

const StaffFireButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(removeStaffMember());
        dispatch(removeEvent(gameEvents.staffMember));
      }}
    >
      Fire staff member
    </Button>
  );
};

export default StaffFireButton;
