# Demonstration Video

https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/bad4581c-59d4-47bd-b866-95fb202c7c06

# System Design

### Requirements

<p align="center"><img src="https://github.com/user-attachments/assets/affe85b3-31eb-47ee-99c8-688510bec69f"></p>

### Architecture

<p align="center"><img src="https://github.com/user-attachments/assets/1d4d9508-493e-4b28-82af-9e589dac9f65"></p>

### Database

<p align="center"><img src="https://github.com/user-attachments/assets/f09d6e96-e3cb-403d-85d5-41743056bdfa"></p>

# Technologies Used

### Frameworks

| Angular | Node.js | Firebase |
| :-: | :-: | :-: |
| <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/76195405-99a8-4971-a3a1-57f098d0ce1c" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/f41e6b26-aad4-41c6-9f89-d3af8aa88c08" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/3e9c312d-7f74-4dc3-ad91-27fec59d9dba" width="100%" max-width="250" height="auto"> |

### Libraries

| Material | Annotorious | TensorFlow.js |
| :-: | :-: | :-: |
| <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/20aba96f-a833-4043-a524-ad945d7d33eb" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/bb3bed33-daf7-4300-a78c-f094ceac89f1" width="100%" max-width="250" height="auto"> | <img src="https://github.com/fabiocaiulo8/rhinocyt/assets/137437056/b5121b47-1c2f-44d8-8f3c-6b1521fcdbc8" width="100%" max-width="250" height="auto"> |

# Getting Started

### To Contribute

1. Create a Project on *Firebase*
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
8. Launch the Platform and Develop

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
4. Launch the Platform
```
ng serve
```
