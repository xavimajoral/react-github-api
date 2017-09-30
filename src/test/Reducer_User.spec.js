import reducer from '../reducers/reducer_users';

describe('Users Reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      loadingUsers: false,
      users: []
    });
  });

  it('When fetching Users should return loadingUsers set to true', () => {
    expect(reducer(undefined, { type: 'FETCH_USERS_PENDING' })).to.eql({
      loadingUsers: true,
      users: []
    });
  });

});

