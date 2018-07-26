import { getJSON } from 'mock_json_response';

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.resquest.type === 'LaunchRequest';
  },

  handle(handlerInput) {
    const speechText = 'Welcome to Deal Finder powered by Groupon!';

    return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard('Deal Finder', speechText)
          .getResponse();
  }
}

const DealIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DealIntent';
  },
  handle(handlerInput) {
    // TO DO
    const request = handlerInput.intent.slots.SlotName.value;
    let speechText = 'Here are the results for ' + request + '!';

    let repsonse = getJSON();

    for (let deal in )

    return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Deal Finder', speechText)
            .getResponse();
  }
}

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Try asking for food and drink deals in Chicago!';

    return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Deal Finder', speechText)
            .getResponse();
  }
}

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handleInput) {
    const speechText = 'Thank you for using Deal Finder powered by Groupon!';

    return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Deal Finder', speechText)
            .getResponse();
  }
}

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.getResponse();
  }
}

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    return handlerInput.responseBuilder
            .speak('Sorry. I did not understand')
            .reprompt('Sorry. I did not understand')
            .getResponse();
  }
}
