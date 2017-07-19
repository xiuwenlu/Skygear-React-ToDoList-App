//this is an action creator function
export const selectAssignment = (assignment) => {
    console.log('You clicked on assignment:', assignment.first);
    return {
        type: 'ASSIGNMENT_SELECTED',
        payload: assignment
    };
};


