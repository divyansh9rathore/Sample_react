import get from 'lodash/get'

export const getLocation = (state) => get(state, ['location']);
export const getLocationPayload = (state) => get(state, ['location', 'payload']);
