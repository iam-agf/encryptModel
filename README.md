# Encrypt / Decrypt message for messages

### Install 

#### Website 
To run this model by yourself first run the website. 

```bash
npm install
npm start
```

This will run the encrypte/decrypt website in [localhost:3000](http://localhost:3000/).

<img width="900" alt="image" src="https://github.com/iam-agf/encryptModel/assets/61362029/73ac546a-2aa9-4989-bdf1-076273cdb0dc">

#### Realm

[It's assumed you know how to run your own node, create your account and edit the genesis file to add tokens to an address you control to work with Gno](https://test3.gno.land/r/demo/boards:testboard/5). To add this realm to your local node first copy the file `realm/simulation.gno` in this repository into `/gno/examples/gno.land/r/demo/simulation` (assuming `/gno` is a clone of the repository of Gno.) and then run this command (Don't forget to add your address in `YOURADDRESSHERE`):

```bash
gnokey maketx addpkg --pkgpath "gno.land/r/demo/simulation" \
    --pkgdir "examples/gno.land/r/demo/simulation" \
    --deposit 100000000ugnot --gas-fee 1000000ugnot \
    --gas-wanted 2000000 --broadcast --chainid dev --remote localhost:26657 \
    YOURADDRESSHERE
```

This will allow you to see the website for the realm. To follow these instructions access to the help section for the realm.

<img width="900" alt="image" src="https://github.com/iam-agf/encryptModel/assets/61362029/b03ea988-5b5e-44ff-a1af-7e46aadb44d0">


## Model simulation

First of all this is a dummy model so must be assumed it's a rudimentary simulation of what the Shiken project would do behind stages when interacting with it for the examinator and the candidate. The connection between the chain and the website isn't implemented because the intention is to make this as minimal as possible.

### The process simulated

#### Examinator side
1.- Enter the website and generate a pair of private key and public key. **Store the private key** and copy the public key (this last one will be sent on chain). This is the equivalent to the job the website will do each time someone requests to make a new exam. Don't refresh the website if you want to store the 

<img width="900" alt="Screenshot 2023-07-23 at 19 12 44" src="https://github.com/iam-agf/encryptModel/assets/61362029/27f48c47-7a26-4001-a736-aa3cd53e848d">


2.- Make a tx containing as public key the public key you copied. This would be the equivalent to what the browser would do before asking you to sign when creating a new exam.
*For this use the path for the realm and enter help

<img width="900" alt="image" src="https://github.com/iam-agf/encryptModel/assets/61362029/0f5197f9-1336-4ef6-ac45-be755108effb">

3.- Now this will store on chain the public key. In the project this would be equivalent to the candidates being able to call the exam and get your public key so can encrypt their answers when sending it. Since you saved the private key you can decrypt them.

<img width="1412" alt="image" src="https://github.com/iam-agf/encryptModel/assets/61362029/8836386a-1fe1-4654-bf6d-824ca9e43f89">

#### Candidate side

1.- Copy the public key and use it to encrypt the answer. In the project this is equivalent to the website encrypting the answer of the candidate using the public key obtained by calling the exam from the chain. 

Notice the project mentiones a double encryption because of long answers, so the website would also generate a symmetric key and that would be the RSA-encrypted message and the answer would be encrypted using that answer but that would be very long for a dummy model, so it's reduced to only one encryption for the sampling.

<img width="651" alt="image" src="https://github.com/iam-agf/encryptModel/assets/61362029/05580c8e-44b1-41ea-8753-ded4a1799cae">

2.- The previous step will allow the evaluator to decrypt your answer using the private key he previously saved. In the project the website would decrypt the symmetric key and use the result to decrypt the answer.

<img width="514" alt="Screenshot 2023-07-23 at 20 08 31" src="https://github.com/iam-agf/encryptModel/assets/61362029/3acfed27-4a7e-4d28-adeb-ab7abecc5a6c">
