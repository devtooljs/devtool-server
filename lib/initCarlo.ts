import * as carlo from 'carlo';

let app: any;

export const initCarlo = async exposeObj => {
    // Launch the browser.
    app = await carlo.launch();

    // Terminate Node.js process on app window closing.
    app.on('exit', () => process.exit());

    // Tell carlo where your web files are located.
    app.serveFolder(__dirname + '/../');

    // Expose 'env' function in the web environment.
    await app.exposeFunction('env', _ => process.env);

    // await hook(app);
    await app.exposeObject('api', exposeObj);

    // Navigate to the main page of your app.
    await app.load('index.html');

    return app;
};

export { app };
