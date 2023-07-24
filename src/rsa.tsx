import React, { useState, useEffect, EventHandler, SyntheticEvent } from 'react';
import forge from 'node-forge';
import './App.css';
import Encrypter from './encrypter';
import Decrypter from './decrypter';

function RSAInputs() {
  var value;
  const [pub, setPub] = useState<string>()
  const [priv, setPriv] = useState<string>()
  const [pubKey, setPubKey] = useState<forge.pki.rsa.PublicKey>()
  const [message, setMessage] = useState("")
  useEffect(() => {
    const { publicKey, privateKey }: forge.pki.rsa.KeyPair = forge.pki.rsa.generateKeyPair(2048, 0x10001);
    setPub(forge.pki.publicKeyToPem(publicKey))
    setPubKey(publicKey)
    setPriv(forge.pki.privateKeyToPem(privateKey))
    console.log(priv, pub)
  }, []);

  return (
    <div className="rsa">
      <h1>RSA Keys Generator</h1>
      <br />
      {pub}
      <br />
      <button onClick={
        () => {
          if (pub != undefined) navigator.clipboard.writeText(pub)
        }
      }
      >Copy public</button>
      <hr />
      {priv}
      <br />
      <button onClick={
        () => {
          if (priv != undefined) navigator.clipboard.writeText(priv)
        }
      }
      >Copy private</button>
      <hr />
      {pubKey != undefined ? <Encrypter publicKey={pubKey!} /> : <></>}
      <hr />
      <Decrypter/>
    </div>
  );
}


export default RSAInputs;