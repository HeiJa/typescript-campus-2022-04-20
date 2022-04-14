import {CloudFrontFunctionsEvent} from 'aws-lambda';

export default function (event: CloudFrontFunctionsEvent) {
    const request = event.request;
    request.headers['x-my-custom-header'] = {value: 'Added by my Function'}
}
