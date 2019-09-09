import { CREATE_EVENT } from "./eventConstants";

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event // payload.event
        }
    }
}

export const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        payload: {
            event
        }
    }
}

export const deleteEvent = (event) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}