export const ERROR_MESSAGES = {
  INVALID_REQUEST: 'Invalid request',
  NOT_FOUND: 'Not found',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  BAD_REQUEST: 'Bad request',
  INVALID_REQUEST_BODY: 'Invalid request body',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  REGISTRATION_DATE_INVALID: 'Registration date must be in the future',
  REGISTRATION_START_DATE_BEFORE_EVENT_DATE:
    'Registration start date must be before the event start date',
  REGISTRATION_END_DATE_BEFORE_EVENT_DATE:
    'Registration end date must be on or before the event start date',
  REGISTRATION_START_DATE_INVALID:
    'Registration start date must be in the future',
  REGISTRATION_END_DATE_INVALID: 'Registration end date must be in the future',
  REGISTRATION_START_DATE_BEFORE_END_DATE:
    'Registration start date must be before registration end date',
  RECURRENCE_END_DATE_INVALID: 'Recurrence end date must be in the future',
  RECURRENCE_END_DATE_BEFORE_EVENT_DATE:
    'Recurrence end date must be after the event start date',
  RECURRING_PATTERN_REQUIRED: 'Recurrence Pattern required for event',
  REGISTRATION_START_DATE_REQUIRED:
    'Registration Start Date required for event',
  RESTRICTED_EVENT_NO_REGISTRATION_DATE:
    'Cannot have registration date for restricted event',
  ATTENDEES_REQUIRED: 'Attendees required for private event',
  ATTENDEES_NOT_REQUIRED: 'Attendees not required for public event',
  EVENT_NOT_FOUND: 'Event not found',
  EVENT_ATTENDEE_NOT_FOUND: 'Event attendee not found',
  EVENT_ATTENDEE_HISTORY_NOT_FOUND: 'Event attendee history not found',
  EVENT_ATTENDEE_HISTORY_ITEM_NOT_FOUND:
    'Event attendee history item not found',
};

export const SUCCESS_MESSAGES = {
  EVENT_CREATED: 'Event created successfully',
  EVENT_UPDATED: 'Event updated successfully',
  EVENT_DELETED: 'Event deleted successfully',
  EVENT_NOT_FOUND: 'Event not found',
  EVENT_ATTENDEE_CREATED: 'Event attendee created successfully',
  EVENT_ATTENDEE_UPDATED: 'Event attendee updated successfully',
  EVENT_ATTENDEE_DELETED: 'Event attendee deleted successfully',
  EVENT_ATTENDEE_HISTORY_ITEM_CREATED:
    'Event attendee history item created successfully',
  EVENT_ATTENDEE_HISTORY_ITEM_UPDATED:
    'Event attendee history item updated successfully',
  EVENT_ATTENDEE_HISTORY_ITEM_DELETED:
    'Event attendee history item deleted successfully',
};

export const API_ID = {
  CREATE_EVENT: 'api.event.create',
  GET_EVENT_BY_ID: 'api.event.getbyid',
  GET_EVENTS: 'api.events.get',
  UPDATE_EVENT: 'api.event.update',
  DELETE_EVENT: 'api.event.delete',
  GET_EVENT_ATTENDEES: 'api.event.attendees.get',
  GET_EVENT_ATTENDEE: 'api.event.attendee.get',
  CREATE_EVENT_ATTENDEE: 'api.event.attendee.create',
  UPDATE_EVENT_ATTENDEE: 'api.event.attendee.update',
  DELETE_EVENT_ATTENDEE: 'api.event.attendee.delete',
  GET_EVENT_ATTENDEE_HISTORY: 'api.event.attendee.history.get',
  GET_EVENT_ATTENDEE_HISTORY_ITEM: 'api.event.attendee.history.item.get',
  CREATE_EVENT_ATTENDEE_HISTORY_ITEM: 'api.event.attendee.history.item.create',
  UPDATE_EVENT_ATTENDEE_HISTORY_ITEM: 'api.event.attendee.history.item.update',
  DELETE_EVENT_ATTENDEE_HISTORY_ITEM: 'api.event.attendee.history.item.delete',
};
