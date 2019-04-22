# Newser PWA


Newser is a boilerplate ReactJS application. Also qualified to be a Progressive Web Application since we have added all the required features.

The application can be quickly and easily setup locally in two ways:

* Using Docker Image:
```
  Linux:  docker run -p 8000:80 -it yaziderman/newser-pwa-5
  Windows: winpty docker run -p 8000:80 -it yaziderman/newser-pwa-5
```
As per what is mentioned in the previous command, after executing it, open the following link on your browser: http://localhost:8000, or from any mobile connected to the same network: http://(your PC IP):8000.

However, the docker repository url is as following: https://cloud.docker.com/repository/docker/yaziderman/newser-pwa-5

* Manually, Cloning and building the code:
The script is uploaded on Github, and publicly accessible using the url: https://github.com/yaziderman/newser.3, in order to get it setup on your machine, please follow the steps:
```
    *Optionally: cd C:/Users/(Your User)/newser*
    Clone the code on your local:
    git clone https://github.com/yaziderman/newser.3.git newser
    cd newser/
    npm i
    npm run build
    npm install -g serve <If not already installed>
    serve -s build
```

In this case, the application will be accessible using the link: http://localhost:5000, or from any mobile connected to the same network: http://(your PC IP):5000

In order to run the tests, in the root folder, execute any of the following commands:
```
    npm test
    npm test -- --coverage
```

> Besides the many enhancments I would suggest, there are some issues I am aware of. I just ignored them to keep inline with the requirments. Feel free please to contact me any time for more details.

More details are available on the link: 
https://github.com/yaziderman/newser.3/blob/master/Documentation/Use%20Case%20Details.docx
