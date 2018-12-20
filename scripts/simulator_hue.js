subscribe('hue/set/+', (topic, val) => {
    const splits = topic.split('/');
    setTimeout(() => {
        publish('hue/status/'+splits[2], val);
    }, 500);
});
