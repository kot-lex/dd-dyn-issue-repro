import tracer from 'dd-trace';

tracer.init({
    logger: {
				error: (err) => console.error('DD_TRACE DD_TRACE_ERROR: ', err),
				warn: (message) => console.warn('DD_TRACE DD_TRACE_WARN: ', message),
				info: (message) => console.info('DD_TRACE DD_TRACE_INFO: ', message),
				debug: () => (message) => console.trace('DD_TRACE DD_TRACE_DEBUG: ', message),
        }
});
