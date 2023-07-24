import React, { useEffect, useState } from 'react';
import forge from 'node-forge';
import './App.css';

function Decrypter() {
  const [priv, setPriv] = useState<forge.pki.rsa.PrivateKey>() // Private key decrypter
  const [message, setMessage] = useState<string>("") // Message to decrypt
  const [messageDecoded, setMessageDecoded] = useState<string>("") // Message to decrypt
  const [decryptedMessage, setDecryptedMessage] = useState<string>("") // Decrypted message

  function decryptMessage() {
    if (priv != undefined) {
      setMessageDecoded(forge.util.decode64(message))
    }
    if (messageDecoded != "") setDecryptedMessage(priv!.decrypt(messageDecoded!))
  }

  useEffect(()=>{
    decryptMessage()
  }, [messageDecoded, message, priv])

  return (
    <div className="decrypter">
      <h1>Decrypter</h1>
      <h3>Private key Pem</h3>
      <textarea onChange={(e) => { setPriv(forge.pki.privateKeyFromPem(e.target.value)) }} /> {/*  Private key input  */}
      
      <h3>Encrypted Message</h3>
      <textarea onChange={(e) => { setMessage(e.target.value) }} /> {/*  Message to decrypt  */}
      <div>{decryptedMessage}</div>
    </div>
  );
}


export default Decrypter;