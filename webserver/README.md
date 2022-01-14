# NextJS Webservice

This webservice is designed to run in a Container.

## Local development
To run your Application, build the docker image and run it using
```
docker build -t <NameOfYourImage> .
docker run -p <LocalPort>:3000 <NameOfYourImage>
```

After that you should be able to connect to your nextjs app via localhost:<LocalPort>

