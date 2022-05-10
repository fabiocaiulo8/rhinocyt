# Demonstration Video
https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/bad4581c-59d4-47bd-b866-95fb202c7c06

# Key Features
### Loading of Slides
![Screenshot1](https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/7662deb1-7869-4024-a9e6-4efdef75c06e)
### Management of Slides
![Screenshot2](https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/f7fe53d4-aa85-4203-8a79-f775a96d49b0)
### Analysis of a Slide Field
![Screenshot3](https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/cafa8dda-3526-4e66-81a3-bfb748e25e52)
### Viewing the Analysis of a Slide Field
![Screenshot4](https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/06311cbc-1fc7-4cf3-9e9c-0d55ee357a77)
### Knowledge Visualization of the Artificial Intelligence Subsystem
![Screenshot5](https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/6aacc26c-aed9-4133-9d2f-371294ccb5cf)

# Technologies Used
### Frameworks
Angular|Node.js|Firebase
:-----:|:-----:|:------:
<img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/76195405-99a8-4971-a3a1-57f098d0ce1c" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/f41e6b26-aad4-41c6-9f89-d3af8aa88c08" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/3e9c312d-7f74-4dc3-ad91-27fec59d9dba" width="100%" max-width="250" height="auto">
### Libraries
Material|Annotorious|TensorFlow.js
:------:|:---------:|:-----------:
<img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/20aba96f-a833-4043-a524-ad945d7d33eb" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/bb3bed33-daf7-4300-a78c-f094ceac89f1" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/b5121b47-1c2f-44d8-8f3c-6b1521fcdbc8" width="100%" max-width="250" height="auto">

# Getting Started
### To Contribute
1. Create a Project on Firebase
2. Initialize Firestore and Storage
3. Change Bucket Visibility 
```
gsutil iam ch allUsers:objectViewer gs://<URL>
```
4. Set the CORS Policy
```
nano cors.json
```
```
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```
```
gsutil cors set cors.json gs://<URL>
```
5. Generate the Service Account's Private Key
6. Import the Key into the Root
7. Update Server URLs
8. Launch the Application and Develop
### Usage Guide
1. Clone the Repository
```
git clone https://github.com/fabiocaiulo8/rhinocyt.git
```
2. Install the Dependencies
```
npm install
```
3. Start the Server
```
npx nodemon server.js
```
4. Launch the Application
```
ng serve
```

# Test Slides
- [Slides1.zip](https://github.com/fabiocaiulo8/rhinocyt/files/11849274/Slides1.zip)
- [Slides2.zip](https://github.com/fabiocaiulo8/rhinocyt/files/11849279/Slides2.zip)
- [Slides3.zip](https://github.com/fabiocaiulo8/rhinocyt/files/11849286/Slides3.zip)
- [Slides4.zip](https://github.com/fabiocaiulo8/rhinocyt/files/11849290/Slides4.zip)
- [Slides5.zip](https://github.com/fabiocaiulo8/rhinocyt/files/11849295/Slides5.zip)
