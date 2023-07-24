import React, { useState, FC } from 'react';
import forge from 'node-forge';
import './App.css';

type EncrypterProps = {
  publicKey: forge.pki.rsa.PublicKey;
};

const Encrypter: React.FC<EncrypterProps> = ({ publicKey }) => {
  const [encryptedMessage, setEncryptedMessage] = useState<string>()

  function encryptMessage(message:string) {
    let encrypting: string = forge.util.encode64(publicKey.encrypt(message))
    setEncryptedMessage(encrypting)
  }
  return (
    <div className="rsa">
      <h1>Encrypter</h1>
      <textarea onChange={(e) => {
        var message: string = e.target.value
        if (message.length != 0) encryptMessage(e.target.value)
      }} />
      <br />
      <div className='outputEncrypted'>
        {encryptedMessage != undefined ? encryptedMessage : ""}
      </div>
    </div>
  );
}


export default Encrypter;